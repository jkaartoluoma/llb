package fi.llb.testdata

import org.slf4j.LoggerFactory
import java.nio.file.Files
import java.nio.file.Paths
import java.text.SimpleDateFormat
import java.util.*

object DataLoader {
    var dataFileName = "testdata.dat"

    private var curline = 0
    private var data: List<String> = listOf()

    fun getLatest(): String {
        try {
            if (this.data.isEmpty()) {
                this.data = loadData()
            }

            curline++

            if (curline >= data.size) {
                curline = 0
            }

            var data = data[curline]

            // Replace timestamp
            val regex = Regex("\"tsl\":\"[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\\.[0-9]{3}Z\"")
            val dateStr = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'.002Z'").format(Date())
            val replacement = "\"tsl\":\"$dateStr\""
            data = data.replace(regex, replacement)

            // Replace busid
            data = data.replace(Regex("\"BusId\":[0-9]*"), "\"BusId\":666")

            // Replace can path
            data = data.replace(Regex("bus/[0-9]*/can"), "bus/666/can")

            LoggerFactory.getLogger(this.javaClass.simpleName).info("Returning new json with modified tsl and BusId")

            return data
        } catch (e: Exception) {
            LoggerFactory.getLogger(this.javaClass.simpleName).error("Could not return data. Please check that file esists" +
                    " in location: ${dataFileName}. If the file exists, it (or parts of it) might be corrupted.")
            return ""
        }
    }

    private fun loadData(): List<String> {
        curline = 0

        val tmp = mutableListOf<String>()

        try {
            LoggerFactory.getLogger(this.javaClass.simpleName).info("Loading data file from $dataFileName.")
            Files.lines(Paths.get(dataFileName)).forEach { tmp.add(it!!) }
            LoggerFactory.getLogger(this.javaClass.simpleName).info("Successfully loaded data (size=${data.size}).")
        } catch (e: Exception) {
            LoggerFactory.getLogger(this.javaClass.simpleName).error("Could not read data file!")
        }

        return tmp
    }
}
