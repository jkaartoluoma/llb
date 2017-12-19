package fi.llb.testdata

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.publisher.SynchronousSink
import java.io.FileWriter
import java.io.BufferedWriter
import java.util.function.Consumer
import java.util.logging.Logger
import org.springframework.web.reactive.function.server.body


@Component
class Handler {
    fun getData(req: ServerRequest): Mono<ServerResponse> = ServerResponse.ok().body(Mono.just(Data.getLatest()))

    fun recordData(req: ServerRequest): Mono<ServerResponse> {
        val apiKey = "5a07a2f986f30e00015b3cb106cfd0ff4f0f4949bf1ee95ef3e3a930"
        val busId = req.pathVariable("id")
        val url = "https://llb.cloud.tyk.io/llb-bus-api/GetData?busId=$busId"
        val client = WebClient.create(url)
        var counter = 0

        return ServerResponse.ok().body(Flux.generate(Consumer<SynchronousSink<Mono<String>>> {
                it.next(client.get()
                    .apply {
                        Thread.sleep(1000)
                        Logger.getLogger(this.javaClass.simpleName).info("Sending request %03d".format(counter++))
                    }
                    .header("Authorization", "Bearer $apiKey")
                    .retrieve()
                    .bodyToMono(String::class.java))
            })
            .flatMap {
                it.flatMap {
                    val writer = BufferedWriter(FileWriter(Data.dataFileName, true))
                    writer.append("$it\n")
                    writer.close()
                    Mono.just(it)
                }
            })
    }
}
