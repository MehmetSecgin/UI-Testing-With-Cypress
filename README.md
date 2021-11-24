# The Endpoints:

## We added 2 more endpoints to the ones that Mr. Oleg made:

* [Add/Remove Elements](https://the-internet.herokuapp.com/add_remove_elements/)
* [Key Presses](https://the-internet.herokuapp.com/key_presses)

For adding and removing elements, we find the buttons by id and class regarding the situation, and clicking on them. The
test are mainly counting the number of elements it added using  should("have.length",<Number Of Elemets> )

And for Key Presses pages, we added 2 new support functions that sends and checks normal keyboard inputs, and one for special characters such as tab, shift, or back_space.
Had to use small regex to match the output from the site.

# UI Automation with Cypress

Web Application under test: https://the-internet.herokuapp.com/  
Framework used: https://docs.cypress.io/guides/getting-started/installing-cypress.html  
Writing your first Cypress test: https://docs.cypress.io/guides/getting-started/writing-your-first-test.html

https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

# Local installation

1. Have node installed: https://nodejs.org/en/
1. In the root run

bash
npm install

1. And then

bash
node_modules/.bin/cypress open

To run a test build

bash
npm test

# Focus

- Learn alternative to WebDriver: Cypress
- What is better?
- What is it missing?
- How can WebDriver compensate?

## Exercises

- Open home page
- Form Authentication
- Dropdown List
- Dynamic Loading (Waits)
- Hovers (Content appears on hover)
