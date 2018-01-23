package fi.llb.testdata

import org.slf4j.LoggerFactory
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.Disposable
import reactor.core.publisher.Flux
import java.io.BufferedWriter
import java.io.FileWriter
import java.time.Duration

object DataRecorder {
    fun record(busId: String, filename: String): Disposable {
        val apiKey = "5a07a2f986f30e00015b3cb106cfd0ff4f0f4949bf1ee95ef3e3a930"
        val url = "https://llb.cloud.tyk.io/llb-bus-api/GetData?busId=$busId"
        val client = WebClient.create(url)

        LoggerFactory.getLogger(this.javaClass.simpleName).warn("Started in RECORD mode.")

        return Flux
            .interval(Duration.ofSeconds(1))
            .subscribe({ t ->
                client
                    .get()
                    .header("Authorization", "Bearer $apiKey")
                    .retrieve()
                    .bodyToMono(String::class.java)
                    .doOnError {
                        LoggerFactory.getLogger(this.javaClass.simpleName).error("Could not record line. This " +
                                "can be caused by changed architecture in target REST server, connection problems or" +
                                " missing/invalid api key.")
                    }
                    .subscribe({ res ->
                        val writer = BufferedWriter(FileWriter(filename, true))
                        writer.append("$res\n")
                        writer.close()
                        LoggerFactory.getLogger(this.javaClass.simpleName).info("Wrote a new line to record. Total lines: $t.")
                    })
            })
    }
}
