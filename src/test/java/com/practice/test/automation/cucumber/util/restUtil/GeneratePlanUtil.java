package com.practice.test.automation.cucumber.util.restUtil;

import org.json.JSONObject;

public class GeneratePlanUtil {

    public String generatePlanRequestPayload(String loanAmount, String nominalRate,
                                             int duration, String date) {
        JSONObject object = new JSONObject();
        object.put("loanAmount", loanAmount);
        object.put("nominalRate", nominalRate);
        object.put("duration", duration);
        object.put("startDate", date);

        return object.toString();
    }
}