package com.practice.test.automation.cucumber.stepdefinition;

import com.practice.test.automation.cucumber.service.ServiceURL;
import com.practice.test.automation.cucumber.util.restUtil.CalculateAnnuityUtil;
import com.practice.test.automation.cucumber.util.restUtil.RestUtilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public class CalculateAnnuityTestCase {

    private static final Logger logger = LoggerFactory.getLogger(CalculateAnnuityTestCase.class);

    CalculateAnnuityUtil calculateAnnuityUtil = new CalculateAnnuityUtil();
    RestUtilities restUtilities = new RestUtilities();
    ServiceURL serviceURL = new ServiceURL();

    public String calcAnnuityBaseURI = serviceURL.BASE_URI;
    public String calcAnnuityServiceURL = serviceURL.CALCULATE_ANNUITY_ENDPOINT;

    String requestPayload;
    Map<String, Object> responsePayload;

    @Given("^details of \"([^\"]*)\" , \"([^\"]*)\" and '(\\d+)' to create calculate annuity request payload$")
    public void createJsonRequestPayloadOfCalcAnnuity(String loanAmount, String nominalRate, int duration) {
        requestPayload = calculateAnnuityUtil.calculateAnnuityRequestPayload(loanAmount, nominalRate, duration);
        logger.info("Request Payload is : " + requestPayload);
    }

    @When("^user invoke rest service to calculate annuity$")
    public void invokeRestServiceToCalcAnnuity() {
        responsePayload = restUtilities.
                requestRestCall(calcAnnuityBaseURI, calcAnnuityServiceURL, requestPayload).
                jsonPath().getMap("$");
        logger.info("Response Payload is : " + responsePayload);
    }

    @Then("^validate correct annuity \"([^\"]*)\" is calculated successfully$")
    public void validateExpectedAnnuity(String expectedAnnuity) {
        Assert.assertEquals(expectedAnnuity, responsePayload.get("annuity"));
    }
}
