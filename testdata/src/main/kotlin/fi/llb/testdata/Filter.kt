package fi.llb.testdata

import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.server.ServerWebExchange
import org.springframework.web.server.WebFilter
import org.springframework.web.server.WebFilterChain
import reactor.core.publisher.Mono

@Component
class Filter : WebFilter {
    override fun filter(exchange: ServerWebExchange?, chain: WebFilterChain?): Mono<Void> {
        return if (exchange!!.request.method == HttpMethod.OPTIONS) {
            exchange.response.statusCode = HttpStatus.OK
            exchange.response.headers.set("Access-Control-Allow-Methods", "HEAD,GET,POST,OPTIONS")
            exchange.response.headers.set("Access-Control-Allow-Headers", "Content-Type,Authorization,x-requested-with,x-xsrf-token")
            Mono.empty<Void>()
        } else {
            chain!!.filter(exchange)
        }
    }
}
