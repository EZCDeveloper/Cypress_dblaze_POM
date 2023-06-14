class SignupPage {
  visit() {
    cy.visit('/');
  }

  getSignupButton() {
    return cy.getBySel('signin2').contains('Sign up');
  }

  getCloseButton() {
    return cy.get('.btn-secondary').contains('Close');
  }

  getUsernameField() {
    return cy.getBySel('sign-username');
  }

  getPasswordField() {
    return cy.getBySel('sign-password');
  }

  getSignupButtonOnModal() {
    return cy.get('.btn-primary').contains('Sign up');
  }

  signup(username, password) {
    this.getSignupButton().click();
    this.getCloseButton().should('exist');
    this.getUsernameField().type(username, { delay: 30 });
    this.getPasswordField().type(password, { delay: 30 });
    this.getSignupButtonOnModal().click();
  }
}

export default SignupPage;
