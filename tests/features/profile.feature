@second
Feature: User profile

    Background:
        Given a user is logged into their account
    Scenario Outline: User successfully changes profile
        Given a user navigated to the profile page
        When the user changes "<fieldName>" to "<value>"
        Then the updated "<fieldName>" should be "<value>"
        Examples:
            | fieldName | value         |
            | username  | namelessowicz |
            | bio       | AT in JS      |
