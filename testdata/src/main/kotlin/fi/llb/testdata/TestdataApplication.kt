package fi.llb.testdata

import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@SpringBootApplication
class TestdataApplication

fun main(args: Array<String>) {
    runApplication<TestdataApplication>(*args)

    if (args.isNotEmpty()) {
        LoggerFactory.getLogger("Init").info("Running with arguments.")

        try {
            if (args[0] == "record") {
                val busId = args[1]
                val output = args[2]
                DataRecorder.record(busId, output)
            } else {
                DataLoader.dataFileName = args[0]
            }
        } catch(e: Exception) {
            LoggerFactory.getLogger("Init").error("Could not parse arguments!\n" +
                    "To run in record mode: java -jar [jar name] record [busid] [output filename]\n" +
                    "To run in server mode with custom datafile: java -jar [jar name] [input filename]")
        }
    }
}
