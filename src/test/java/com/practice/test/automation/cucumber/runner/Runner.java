package com.practice.test.automation.cucumber.runner;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = {"src/test/resources/FeatureFile"},
        glue = {"com.lendico.assignment/stepdefinition"},
        format = {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
        monochrome = true //display the console output in a proper readable format

)
public class Runner {
}