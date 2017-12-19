package fi.llb.testdata

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TestdataApplication

fun main(args: Array<String>) {
    runApplication<TestdataApplication>(*args)
}
