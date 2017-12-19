package fi.llb.testdata

import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.server.router

@Component
class Router(val handler: Handler) {
    @Bean
    fun routes() = router {
        OPTIONS("/GetData")
        GET("/GetData", handler::getData)
        GET("/record/{id}", handler::recordData)
    }
}
