@fourth
Feature: Search for a board

    Background:
        Given a user is logged into their account
    Scenario:  User successfully searches for a board
        Given a board named "Sudoku" was created
        When the user searches "Sudoku" board
        Then the "Sudoku" board should be displayed in search results
