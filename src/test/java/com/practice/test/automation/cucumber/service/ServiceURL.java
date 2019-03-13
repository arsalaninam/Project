package com.practice.test.automation.cucumber.service;

import com.practice.test.automation.cucumber.util.PropertyUtil.PropertyReader;

public class ServiceURL {

    PropertyReader propertyReader = new PropertyReader();

    public final String BASE_URI = propertyReader.readProperty("baseURI");
    public final String CALCULATE_ANNUITY_ENDPOINT = propertyReader.readProperty("calculateAnnuityURL");
    public final String GENERATE_PLAN_ENDPOINT = propertyReader.readProperty("generatePlanURL");
}
