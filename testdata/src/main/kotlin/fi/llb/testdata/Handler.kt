package fi.llb.testdata

import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Mono
import org.springframework.web.reactive.function.server.body


@Component
class Handler {
    fun getData(req: ServerRequest): Mono<ServerResponse> = ServerResponse.ok().body(Mono.just(DataLoader.getLatest()))
}
