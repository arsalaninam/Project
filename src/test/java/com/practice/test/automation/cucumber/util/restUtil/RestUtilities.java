package com.practice.test.automation.cucumber.util.restUtil;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RestUtilities {

    RequestSpecification requestSpecification;

    public Response requestRestCall(String baseURI, String servicePath, String requestPayload) {

        requestSpecification = RestAssured.with();
        return requestSpecification.
                given().contentType("application/json").body(requestPayload).
                when().post(baseURI + servicePath).
                then().extract().response();
    }

}
