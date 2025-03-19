@eighth
Feature: Card filtering

    Background:
        Given a user is logged into their account
        And a board named "TestFilters" was created
        And cards with different attributes were created
    Scenario:  User successfully filters cards by attribute
        Given a user navigated to the TestFilters board page
        When the user filters cards by "<attributeValueId>"
        Then the number of cards should be "<numberOfCards>"
        Examples:
            | attributeName | attributeValueId | numberOfCards |
            | Members       | 0                | 8             |
            | Members       | 1                | 2             |
            | Card status   | 2                | 2             |
            | Card status   | 3                | 8             |
            | Due date      | 4                | 7             |
            | Due date      | 5                | 1             |
            | Due date      | 6                | 0             |
            | Due date      | 7                | 0             |
            | Due date      | 8                | 1             |
            | Labels        | 9                | 7             |
            | Labels        | 10               | 1             |
            | Labels        | 11               | 1             |
            | Labels        | 12               | 1             |
            | Labels        | 13               | 3             |
            | Activity      | 14               | 10            |
            | Activity      | 15               | 10            |
            | Activity      | 16               | 10            |
            | Activity      | 17               | 0             |
