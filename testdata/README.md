##TestData server for LLB applications.

Server mimics a live llb rest server, and returns valid bus data.

Returned data ALWAYS has a busId 666, regardless which bus was recorder. Timestamp is also always fresh.

Prebuilt application and recorded data file can be found in ./jar directory.

##Requirements
JRE8

##Build server:
gradlew build

Jar will be built into following location: ./build/libs/

##Run server:
java -jar testdata-0.0.1-SNAPSHOT.jar [optional testdata filename]

If no arguments is provided, a valid datafile is expected to be found from ./testdata.dat

##Run in record mode:
java -jar testdata-0.0.1-SNAPSHOT.jar record [busid] [output file name]

Example: java -jar testdata-0.0.1-SNAPSHOT.jar record 9999 "output.dat"
