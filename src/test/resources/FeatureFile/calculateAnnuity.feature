Feature: Calculate Annuity BDD Scenarios and Test Cases

  Scenario Outline: Calculate Annuity from /calc-annuity rest service

    Given details of "<loanAmount>" , "<nominalRate>" and '<duration>' to create calculate annuity request payload
    When user invoke rest service to calculate annuity
    Then validate correct annuity "<expectedAnnuity>" is calculated successfully

    Examples:
      | loanAmount | nominalRate | duration | expectedAnnuity |
      | 5000       | 5.0         | 24       | 219.36          |
      | 5000       | 5.0         | 12       | 428.04          |

  Scenario Outline: When duration is set as zero, validate it does not calculate annuity and an error is prompt

    Given details of "<loanAmount>" , "<nominalRate>" and '<duration>' to create calculate annuity request payload
    When user invoke rest service to calculate annuity
    Then validate correct annuity "<expectedErrorMessage>" is calculated successfully

    Examples:
      | loanAmount | nominalRate | duration | expectedErrorMessage                              |
      | 5000       | 5.0         | 0        | Invalid Duration Entered/Duration can not be zero |