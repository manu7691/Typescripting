Feature: Search Flight feature
  As a anonymous user of Ryanair
  I want to search flight tickes on Ryanair Website
  So that I can buy them and enjoy travelling

  Scenario: Buying Return flights
    Given I am on the Ryanair Page
    Then I choose Almeria as my origin
    Then I choose Dublin as my destination
    Then I choose flight dates
    Then I look for prices
    Then I choose cheaper flights
    Then I reject extra services
    Then I set my payment datas

  Scenario: Buying Return flights with wrong data
    Given I am on the Ryanair Page
    Then I choose Almeria as my origin
    Then I choose Dublin as my destination
    Then I saw wrong chosen places

  Scenario Outline: Buying Return flights to dynamic places
    Given I am on the Ryanair Page
    Then I choose "<origin>" as my origin
    Then I choose "<destination>" as my destination
    Then I choose flight dates <departure-date> <return-date>
    Then I look for prices
    Then I choose cheaper flights
    Then I reject extra services
    Then I set my payment datas

    Examples:

    | origin  | destination | departure-date | return-date |
    | Madrid | Dublin      | 16-09-2016     | 30-09-2016  |

  @todo
  Scenario: Buying Return flights with payment included
    Given I am on the Ryanair Page
    Then I choose Almeria as my origin
    Then I choose Dublin as my destination
    Then I choose flight dates
    Then I look for prices
    Then I choose cheaper flights
    Then I reject extra services
    Then I set my payment datas
    Then I buy my flight ticket
