#Using local server for testdata

Start server:
cd testdata
./gradlew bootRun

Change data url:
llbservice -> realTimeDataApiUrl = 'http://localhost:8080'

Note! You may also want to hardcore llbservice.isLiveData() funtion to return true.
