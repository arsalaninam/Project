First of all download the calculator (https://github.com/Lendico/coding/tree/master/tasks/test-eng) with the binary you need for your machine and run it locally. Run instructions can be found in the README.md

Then clone the project from git repository "https://github.com/arsalaninam/Project"

Open it on any IDE which supports Java. Preferred IDE would be IntelliJ.

Resolve all the dependencies of pom.xml. After resolving the dependencies, please run the following command "mvn clean install".

In order to execute the test cases. Run command "mvn verify" on terminal.

In order to see Serenity Test Reports after the execution of all test cases, Go to Target -> site -> serenity -> index.html (Open "index.html" on Chrome Browser)

I've used Cucumber BDD framework to build these automated test cases.

NOTE: In order to execute the test cases, first you need to run the calculator on your local. Binaries have been provided which deploys a service to port 8080.
