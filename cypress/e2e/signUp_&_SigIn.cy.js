/// <reference types = "cypress" />

describe('Testing SignUp & SignIn', () => {
  let randomString = Math.random().toString(36);
  let username = 'Auto' + randomString;
  let username2 = 'Richmond';
  let errms = 'This user already exist.';
  let errmsus = 'User does not exist';
  const password = Cypress.env('password');

  context('SingUp UI', () => {
    it('TC_001_Validate Signup of a new user thro UI', () => {
      cy.signup(username, password);
    });

    it('TC_002_Validate Sigup: a New user cannot create an account if one already exists', () => {
      cy.signup(username, password);
      cy.on('window:alert', msg => {
        expect(msg).to.contains(errms);
      });
    });
  });

  context('LogIn UI', () => {
    it('TC_003_Validate an Existing user can acces thro UI', () => {
      // Validate Login
      cy.login(username, password);
      cy.visit('/');

      // Validate Username
      cy.get('#nameofuser').contains(username).should('be.visible');

      // Validate not visible Login nav
      cy.get('#login2').should('not.be.visible');

      // Validate Log Out exist and is visible
      cy.getBySel('logout2').should('exist').contains('Log out');
    });

    it('TC_004_Validate a Non Existing user cannot acces thro UI', () => {
      cy.login(username2, password);
      cy.on('window:alert', msg => {
        expect(msg).to.contains(errmsus);
      });
      cy.visit('/');

      // Validate not visible Log out nav
      cy.getBySel('logout2').should('not.be.visible');
    });
  });
});
