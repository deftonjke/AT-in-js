@fifth
Feature: Create a list

    Background:
        Given a user is logged into their account
        And a board named "Sudoku" was created

    Scenario:  User successfully creates a list
        Given a user navigated to the Sudoku board page
        When the user creates a new list named "MyNewList"
        Then the "MyNewList" list should be displayed
