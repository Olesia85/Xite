Feature: Validation of the field

@TypeScriptScenario
Scenario Outline: Check result, when user enter сomposite number '<Composite>' 
Given I navigate to main page
When I enter '<Composite>' in to the validation field
And I click Validate button 
Then I see result 'false' under the validation field

Examples:
|Composite|
|-1       |
|0        |
|1        |
|65       |
|1118     |


@TypeScriptScenario
Scenario Outline: Check result, when user enter prime number '<PrimeNumber>'
Given I navigate to main page
When I enter '<PrimeNumber>' in to the validation field
And I click Validate button 
Then I see result 'true' under the validation field

Examples:
|PrimeNumber   |
|2             |
|53            |
|761           |
|1627          |


@TypeScriptScenario
Scenario Outline: Check result, when user enter non numeric characters and symbols '<CharactersSymbols>'
Given I navigate to main page
When I enter '<CharactersSymbols>' in to the validation field
And I click Validate button  
Then I see result 'Please enter integer value' under the validation field

Examples:
|CharactersSymbols|
|!@#$%^&*()?><    |
|AsDqwe           |


@TypeScriptScenario
Scenario Outline: Check result, when user enter decimal value '<Decimal>'
Given I navigate to main page
When I enter '<Decimal>' in to the validation field
And I click Validate button  
Then I see result 'Entered value: 1.1 is not an integer. Please enter integer value' under the validation field

Examples:
|Decimal|
|1.1    |