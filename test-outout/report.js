$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFile/calculateAnnuity.feature");
formatter.feature({
  "name": "Calculate Annuity BDD Scenarios and Test Cases",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Calculate Annuity from /calc-annuity rest service",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\" , \"\u003cnominalRate\u003e\" and \u0027\u003cduration\u003e\u0027 to create calculate annuity request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to calculate annuity",
  "keyword": "When "
});
formatter.step({
  "name": "validate correct annuity \"\u003cexpectedAnnuity\u003e\" is calculated successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "expectedAnnuity"
      ]
    },
    {
      "cells": [
        "5000",
        "5.0",
        "24",
        "219.36"
      ]
    },
    {
      "cells": [
        "5000",
        "5.0",
        "12",
        "428.04"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Calculate Annuity from /calc-annuity rest service",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000\" , \"5.0\" and \u002724\u0027 to create calculate annuity request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to calculate annuity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate correct annuity \"219.36\" is calculated successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Calculate Annuity from /calc-annuity rest service",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000\" , \"5.0\" and \u002712\u0027 to create calculate annuity request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to calculate annuity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate correct annuity \"428.04\" is calculated successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "When duration is set as zero, validate it does not calculate annuity and an error is prompt",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\" , \"\u003cnominalRate\u003e\" and \u0027\u003cduration\u003e\u0027 to create calculate annuity request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to calculate annuity",
  "keyword": "When "
});
formatter.step({
  "name": "validate correct annuity \"\u003cexpectedErrorMessage\u003e\" is calculated successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "expectedErrorMessage"
      ]
    },
    {
      "cells": [
        "5000",
        "5.0",
        "0",
        "Invalid Duration Entered/Duration can not be zero"
      ]
    }
  ]
});
formatter.scenario({
  "name": "When duration is set as zero, validate it does not calculate annuity and an error is prompt",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000\" , \"5.0\" and \u00270\u0027 to create calculate annuity request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to calculate annuity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate correct annuity \"Invalid Duration Entered/Duration can not be zero\" is calculated successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("src/test/resources/FeatureFile/generatePlan.feature");
formatter.feature({
  "name": "Generate Plan BDD Scenarios and Test Cases",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The sum of all principal amounts in the schedule entries equals the total loan amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\",\"\u003cnominalRate\u003e\",\u0027\u003cduration\u003e\u0027 and \"\u003cstartDate\u003e\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.step({
  "name": "validate sum of all principal amounts equals the total \"\u003cloanAmount\u003e\" amount",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "startDate"
      ]
    },
    {
      "cells": [
        "5000.0",
        "5.0",
        "12",
        "2018-01-01"
      ]
    },
    {
      "cells": [
        "1200.0",
        "2.0",
        "10",
        "2019-01-01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The sum of all principal amounts in the schedule entries equals the total loan amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.0\",\"5.0\",\u002712\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate sum of all principal amounts equals the total \"5000.0\" amount",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "The sum of all principal amounts in the schedule entries equals the total loan amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"1200.0\",\"2.0\",\u002710\u0027 and \"2019-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate sum of all principal amounts equals the total \"1200.0\" amount",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "The remaining outstanding principal of the last schedule entry equals always 0.00 €",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\",\"\u003cnominalRate\u003e\",\u0027\u003cduration\u003e\u0027 and \"\u003cstartDate\u003e\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.step({
  "name": "validate \"\u003cremainingOutstandingPrincipal\u003e\" of the last schedule entry equals always 0.00",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "startDate",
        "remainingOutstandingPrincipal"
      ]
    },
    {
      "cells": [
        "5000.0",
        "5.0",
        "12",
        "2018-01-01",
        "0.00"
      ]
    },
    {
      "cells": [
        "5000.0",
        "5.0",
        "3",
        "2018-01-01",
        "0.00"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The remaining outstanding principal of the last schedule entry equals always 0.00 €",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.0\",\"5.0\",\u002712\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate \"0.00\" of the last schedule entry equals always 0.00",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "The remaining outstanding principal of the last schedule entry equals always 0.00 €",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.0\",\"5.0\",\u00273\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate \"0.00\" of the last schedule entry equals always 0.00",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "The start date determines the first due date of the calculated schedule. We assume",
  "description": "  that each schedule entry is always due on the same day",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\",\"\u003cnominalRate\u003e\",\u0027\u003cduration\u003e\u0027 and \"\u003cstartDate\u003e\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.step({
  "name": "validate each schedule entry is always due on the same day as the \"\u003cstartDate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "startDate"
      ]
    },
    {
      "cells": [
        "5000.0",
        "5.0",
        "4",
        "2018-01-01"
      ]
    },
    {
      "cells": [
        "8000.0",
        "4.0",
        "6",
        "2018-02-04"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The start date determines the first due date of the calculated schedule. We assume",
  "description": "  that each schedule entry is always due on the same day",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.0\",\"5.0\",\u00274\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate each schedule entry is always due on the same day as the \"2018-01-01\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "The start date determines the first due date of the calculated schedule. We assume",
  "description": "  that each schedule entry is always due on the same day",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"8000.0\",\"4.0\",\u00276\u0027 and \"2018-02-04\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate each schedule entry is always due on the same day as the \"2018-02-04\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "The remaining outstanding principal of one entry equals the initial outstanding",
  "description": "  principal of the following month",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\",\"\u003cnominalRate\u003e\",\u0027\u003cduration\u003e\u0027 and \"\u003cstartDate\u003e\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.step({
  "name": "validate remaining outstanding principal of one entry equals the initial outstanding principal of the following month",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "startDate"
      ]
    },
    {
      "cells": [
        "5000.00",
        "5.0",
        "4",
        "2018-01-01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The remaining outstanding principal of one entry equals the initial outstanding",
  "description": "  principal of the following month",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.00\",\"5.0\",\u00274\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate remaining outstanding principal of one entry equals the initial outstanding principal of the following month",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "The total payment amount per month in a borrower schedule should equal the value",
  "description": "  from the annuity call",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"\u003cloanAmount\u003e\",\"\u003cnominalRate\u003e\",\u0027\u003cduration\u003e\u0027 and \"\u003cstartDate\u003e\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.step({
  "name": "validate borrowerPaymentAmount of each month should be equal except the last month which can differ",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loanAmount",
        "nominalRate",
        "duration",
        "startDate"
      ]
    },
    {
      "cells": [
        "5000.00",
        "5.0",
        "4",
        "2018-01-01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The total payment amount per month in a borrower schedule should equal the value",
  "description": "  from the annuity call",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "details of \"5000.00\",\"5.0\",\u00274\u0027 and \"2018-01-01\" to create generate Plan request payload",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user invoke rest service to generate Plan",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate borrowerPaymentAmount of each month should be equal except the last month which can differ",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});