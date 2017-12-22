package fi.llb.testdata

import org.slf4j.LoggerFactory
import java.nio.file.Files
import java.nio.file.Paths
import java.text.SimpleDateFormat
import java.util.*

object DataLoader {
    val dataFileName = "data/testdata.dat"

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
            val dateStr = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'.000Z'").format(Date())
            val replacement = "\"tsl\":\"$dateStr\""
            data = data.replace(regex, replacement)

            // Replace busid
            data = data.replace(Regex("\"BusId\":[0-9]*"), "\"BusId\":666")

            LoggerFactory.getLogger(this.javaClass.simpleName).info("Returning new json with modified tsl and BusId")

            return data
        } catch (e: Exception) {
            LoggerFactory.getLogger(this.javaClass.simpleName).error("Could not return data. DataLoader file (or parts of it) might be corrupted.")
            e.printStackTrace()
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