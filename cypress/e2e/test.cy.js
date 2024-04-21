///<reference types="cypress"/>>

const cypress = require("cypress")

it('Google Search' , function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('cypress project{enter}')

    // cy.contains('Google Search').click()
})