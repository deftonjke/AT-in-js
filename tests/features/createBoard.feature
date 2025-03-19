@third
Feature: Create a board

    Scenario:  User successfully creates a new board
        Given a user is logged into their account
        When the user creates a new board with valid data
            | boardName  | Workspace        | Visibility |
            | myNewBoard | user's workspace | Workspace  |
        Then the user should be redirected to their "myNewBoard" page
