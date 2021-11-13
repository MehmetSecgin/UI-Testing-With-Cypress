// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
    cy.get('input[name=username]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`)
})

Cypress.Commands.add("input_keyboard", (key) => {
    cy.get("#target").type(key);
    cy.get("#result").should("contain", key)
})

Cypress.Commands.add("input_keyboard_special", (key) => {
    cy.get("#target").type("{" + key + "}");
    cy.get("#result").should("contain", key.match(/[A-Z][a-z]+|[0-9]+/g).join("_").toUpperCase())
})


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
