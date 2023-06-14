Cypress.Commands.add('getBySel', (sel) => {
  cy.wait(1000)
  return cy.get(`[id=${sel}]`)
})

Cypress.Commands.add('signup', (username, password) => {
  cy.intercept('POST', 'https://api.demoblaze.com/signup').as('newUser')
  cy.visit('/')
  cy.getBySel('signin2').contains('Sign up').should('exist').click()
  cy.wait(3000)
  cy.get('.btn-secondary').should('exist').contains('Close')
  cy.getBySel('sign-username').type(username, { delay: 30 })
  cy.getBySel('sign-password').type(password, { delay: 30 })
  cy.get('.btn-primary').contains('Sign up').click()

  cy.wait('@newUser').should(({ request, response }) => {
    expect(response.statusCode).to.eq(200)
    expect(request.body.username).to.eq(username)
  })
})

Cypress.Commands.add('login', (username, password) => {
  cy.intercept('POST', 'https://api.demoblaze.com/signin')
  cy.visit('/')
  cy.getBySel('login2').contains('Log in').should('exist').click()
  cy.wait(3000)
  cy.get('.btn-secondary').should('exist').contains('Close')
  cy.getBySel('loginusername').type(username, { delay: 30 })
  cy.getBySel('loginpassword').type(password, { delay: 30 })
  cy.get('.btn-primary').contains('Log in').click()
  cy.wait(2000)
})
