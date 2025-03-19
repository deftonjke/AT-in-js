@sixth
Feature: Create a card

    Background:
        Given a user is logged into their account
        And a board named "Sudoku" was created
    Scenario:  User successfully creates a card
        Given a user navigated to the Sudoku board page
        When the user creates a new card named "MyNewCard"
        Then the "MyNewCard" card should be displayed
