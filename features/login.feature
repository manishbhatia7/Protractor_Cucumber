Feature: Login

    Logging to Orange HRM application
    Scenario: Login to application
    Given i login in into "https://orangehrm-demo-6x.orangehrmlive.com/auth/login"
    When  i enter "admin" in username
    And   i enter "admin123" in password
    And   i click on submit button