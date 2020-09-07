Feature: Login

    Logging to Orange HRM application
    Scenario Outline: Scenario Outline name: Login to application
    Given i login in into "https://orangehrm-demo-6x.orangehrmlive.com/auth/login"
    When  i enter "<username>" in username
    And   i enter "<password>" in password
    And   i click on submit button
    Then  login should be successful
   Examples:
       | username | password |
       | admin  | admin123  |
