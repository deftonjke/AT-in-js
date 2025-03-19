@first
Feature: Sign in

    Scenario:  User successfully signs in an existing account
        Given a user navigated to the home page
        When the user logs in with valid credentials
        Then the user should be redirected to their board page
