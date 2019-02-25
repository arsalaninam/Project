package com.lendico.assignment.service;

import com.lendico.assignment.util.PropertyUtil.PropertyReader;

public class ServiceURL {

    PropertyReader propertyReader = new PropertyReader();

    public final String BASE_URI = propertyReader.readProperty("baseURI");
    public final String CALCULATE_ANNUITY_ENDPOINT = propertyReader.readProperty("calculateAnnuityURL");
    public final String GENERATE_PLAN_ENDPOINT = propertyReader.readProperty("generatePlanURL");
}
