Feature: Generate Plan BDD Scenarios and Test Cases

  Scenario Outline: The sum of all principal amounts in the schedule entries equals the total loan amount

    Given details of "<loanAmount>","<nominalRate>",'<duration>' and "<startDate>" to create generate Plan request payload
    When user invoke rest service to generate Plan
    Then validate sum of all principal amounts equals the total "<loanAmount>" amount

    Examples:
      | loanAmount | nominalRate | duration | startDate  |
      | 5000.0     | 5.0         | 12       | 2018-01-01 |
      | 1200.0     | 2.0         | 10       | 2019-01-01 |


  Scenario Outline: The remaining outstanding principal of the last schedule entry equals always 0.00 €

    Given details of "<loanAmount>","<nominalRate>",'<duration>' and "<startDate>" to create generate Plan request payload
    When user invoke rest service to generate Plan
    Then validate "<remainingOutstandingPrincipal>" of the last schedule entry equals always 0.00

    Examples:
      | loanAmount | nominalRate | duration | startDate  | remainingOutstandingPrincipal |
      | 5000.0     | 5.0         | 12       | 2018-01-01 | 0.00                          |
      | 5000.0     | 5.0         | 3        | 2018-01-01 | 0.00                          |


  Scenario Outline: The start date determines the first due date of the calculated schedule. We assume
  that each schedule entry is always due on the same day

    Given details of "<loanAmount>","<nominalRate>",'<duration>' and "<startDate>" to create generate Plan request payload
    When user invoke rest service to generate Plan
    Then validate each schedule entry is always due on the same day as the "<startDate>"

    Examples:
      | loanAmount | nominalRate | duration | startDate  |
      | 5000.0     | 5.0         | 4        | 2018-01-01 |
      | 8000.0     | 4.0         | 6        | 2018-02-04 |


  Scenario Outline: The remaining outstanding principal of one entry equals the initial outstanding
  principal of the following month

    Given details of "<loanAmount>","<nominalRate>",'<duration>' and "<startDate>" to create generate Plan request payload
    When user invoke rest service to generate Plan
    Then validate remaining outstanding principal of one entry equals the initial outstanding principal of the following month

    Examples:
      | loanAmount | nominalRate | duration | startDate  |
      | 5000.00    | 5.0         | 4        | 2018-01-01 |


  Scenario Outline: The total payment amount per month in a borrower schedule should equal the value
  from the annuity call

    Given details of "<loanAmount>","<nominalRate>",'<duration>' and "<startDate>" to create generate Plan request payload
    When user invoke rest service to generate Plan
    Then validate borrowerPaymentAmount of each month should be equal except the last month which can differ

    Examples:
      | loanAmount | nominalRate | duration | startDate  |
      | 5000.00    | 5.0         | 4        | 2018-01-01 |