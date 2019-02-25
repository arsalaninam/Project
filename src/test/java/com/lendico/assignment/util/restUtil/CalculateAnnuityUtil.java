package com.lendico.assignment.util.restUtil;

import org.json.JSONObject;

public class CalculateAnnuityUtil {

    public String calculateAnnuityRequestPayload(String loanAmount, String nominalRate, int duration) {

        JSONObject object = new JSONObject();
        object.put("loanAmount", loanAmount);
        object.put("nominalRate", nominalRate);
        object.put("duration", duration);

        return object.toString();
    }
}
