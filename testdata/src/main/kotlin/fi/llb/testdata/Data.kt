package fi.llb.testdata

import java.nio.file.Files
import java.nio.file.Paths

object Data {
    val dataFileName = "data/testdata.dat"

    private var curline = 0
    private var data: List<String> = listOf()

    fun getLatest(): String {
        if (this.data.isEmpty()) {
            this.data = loadData()
        }

        curline++

        if (curline >= data.size) {
            curline = 0
        }

        return data[curline]
    }

    fun loadData(): List<String> {
        curline = 0

        val tmp = mutableListOf<String>()

        Files.lines(Paths.get(dataFileName)).forEach {
            tmp.add(it!!)
        }

        return tmp
    }
}
