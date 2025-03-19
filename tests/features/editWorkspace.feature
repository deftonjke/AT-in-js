@seventh
Feature: Edit Workspace

    Background:
        Given a user is logged into their account
    Scenario Outline:  User successfully changes workspace
        Given a user navigated to the workspace page
        When the user updates fields in workspace
            | fieldName   | value              |
            | displayName | New Workspace name |
            | name        | iamvitali          |
            | website     | epam.com           |
            | desc        | AT in JS           |
        Then the updated field should be correct in workspace
            | fieldName   | value              |
            | displayName | New Workspace name |
            | name        | iamvitali          |
            | website     | epam.com           |
            | desc        | AT in JS           |
