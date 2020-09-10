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


  Scenario: Go to dashboard and click on add employee button
    When i click on dashboard links to reach add employee page
    And on reaching Employee list page
    When I click on add employee link
    Then add employee page should open

    Scenario Outline: Add an Employee
    When i add "<firstname>" in firstName textbox
    And  i add "<lastname>"  in lastName  textbox.
    And  i add "<employee-id>" in employee id textbox
    And  i select workplace dropdown
    Then i assert that login checkbox is unchecked
    And  i select the login checkbox
    And  i enter the "<username>" in username textbox.
    And  i enter the "<password>" in password textbox
    And  i enter the "<password>" in confirm password textbox
    And  i select the Roleid dropdown.
    And  i click on Next button
    Then Add Employee Personal Wizard details should be shown.

    Examples:
        | firstname | lastname | employee-id | username | password |
        | Rahul     | Shetty   | 1234        | Rahul    | Shetty   |


    
