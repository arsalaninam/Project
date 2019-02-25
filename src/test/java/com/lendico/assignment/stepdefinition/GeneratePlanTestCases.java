package com.lendico.assignment.stepdefinition;

import com.lendico.assignment.service.ServiceURL;
import com.lendico.assignment.util.restUtil.GeneratePlanUtil;
import com.lendico.assignment.util.restUtil.RestUtilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class GeneratePlanTestCases {

    private static final Logger logger = LoggerFactory.getLogger(CalculateAnnuityTestCase.class);

    GeneratePlanUtil generatePlanUtil = new GeneratePlanUtil();
    RestUtilities restUtilities = new RestUtilities();
    ServiceURL serviceURL = new ServiceURL();

    public String generatePlanBaseURI = serviceURL.BASE_URI;
    public String generatePlanServiceURL = serviceURL.GENERATE_PLAN_ENDPOINT;
    double totalPrincipal;

    String requestPayload, remOutstandingPrincipal, date, borrowerPaymentAmountOfNextMonth;
    String remainingOutstandingPrincipal, initialOutstandingPrincipal, borrowerPaymentAmount;
    List<Map<String, Object>> responsePayloadList = new ArrayList<Map<String, Object>>();
    Map<String, Object> response;

    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    Calendar c = Calendar.getInstance();

    @Given("^details of \"([^\"]*)\",\"([^\"]*)\",'(\\d+)' and \"([^\"]*)\" to create generate Plan request payload$")
    public void createJsonRequestPayloadOfGeneratePlan(String loanAmount, String nominalRate, int duration, String startDate) {
        requestPayload = generatePlanUtil.generatePlanRequestPayload(loanAmount, nominalRate, duration, startDate);
        logger.info("Request Payload is : " + requestPayload);
    }

    @When("^user invoke rest service to generate Plan$")
    public void invokeRestServiceToCalcAnnuity() {
        responsePayloadList = restUtilities.
                requestRestCall(generatePlanBaseURI, generatePlanServiceURL, requestPayload).jsonPath().getList("$");
    }

    @Then("^validate sum of all principal amounts equals the total \"([^\"]*)\" amount$")
    public void validateGeneratePlanPrincipal(String expectedPrincipalAmount) {
        for (Map<String, Object> response : responsePayloadList) {
            totalPrincipal += Double.valueOf(response.get("principal").toString());
        }
        logger.info("Total Principle: " + totalPrincipal);
        Assert.assertEquals(expectedPrincipalAmount, String.valueOf(totalPrincipal));
    }

    @Then("^validate \"([^\"]*)\" of the last schedule entry equals always 0.00$")
    public void validateRemainingOutstandingPrincipal(String remainingOutstandingPrincipal) {
        int lastIndex = responsePayloadList.size() - 1;
        remOutstandingPrincipal = responsePayloadList.get(lastIndex).get("remainingOutstandingPrincipal").toString();
        logger.info("Remaining Outstanding Principal: " + remOutstandingPrincipal);
        Assert.assertEquals(Double.valueOf(remainingOutstandingPrincipal), Double.valueOf(remOutstandingPrincipal));
    }

    @Then("^validate each schedule entry is always due on the same day as the \"([^\"]*)\"$")
    public void validateMonthlyDueDate(String startDateOfMonth) throws ParseException {
        for (Map<String, Object> response : responsePayloadList) {
            date = response.get("date").toString();
            logger.info("Expected Date: " + startDateOfMonth + "...Actual Date: " + date);
            Assert.assertEquals(startDateOfMonth + "T00:00:00Z", date);
            startDateOfMonth = addMonthToDate(startDateOfMonth);
        }
    }

    @Then("^validate remaining outstanding principal of one entry equals the initial outstanding principal of the following month$")
    public void validateRemOutPrincipal() {
        remainingOutstandingPrincipal = responsePayloadList.get(0).get("remainingOutstandingPrincipal").toString();
        for (int i = 1; i < responsePayloadList.size(); i++) {
            response = responsePayloadList.get(i);
            initialOutstandingPrincipal = response.get("initialOutstandingPrincipal").toString();
            logger.info("Remaining Outstanding Principal of one Entry : " + remainingOutstandingPrincipal);
            logger.info("Initial Outstanding Principal of following Month : " + initialOutstandingPrincipal);
            Assert.assertEquals(remainingOutstandingPrincipal, initialOutstandingPrincipal);
            remainingOutstandingPrincipal = response.get("remainingOutstandingPrincipal").toString();
        }
    }

    @Then("^validate borrowerPaymentAmount of each month should be equal except the last month which can differ$")
    public void validateBorrowerPaymentAmount() {
        borrowerPaymentAmount = responsePayloadList.get(0).get("borrowerPaymentAmount").toString();
        for (int i = 0; i < responsePayloadList.size() - 2; i++) {
            borrowerPaymentAmount = responsePayloadList.get(i).get("borrowerPaymentAmount").toString();
            borrowerPaymentAmountOfNextMonth = responsePayloadList.get(i + 1).get("borrowerPaymentAmount").toString();
            logger.info("Borrower Payment Amount of this month: " + borrowerPaymentAmount);
            logger.info("Borrower Payment Amount of next month: " + borrowerPaymentAmountOfNextMonth);
            Assert.assertEquals(borrowerPaymentAmount, borrowerPaymentAmountOfNextMonth);
        }
    }

    public String addMonthToDate(String date) throws ParseException {
        c.setTime(sdf.parse(date));
        c.add(Calendar.MONTH, 1);
        return sdf.format(c.getTime());
    }
}
