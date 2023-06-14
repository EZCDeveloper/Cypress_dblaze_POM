class LoginPage {
  visit() {
    cy.visit('/');
  }

  getLoginButton() {
    return cy.getBySel('login2').contains('Log in');
  }

  getCloseButton() {
    return cy.get('.btn-secondary').contains('Close');
  }

  getUsernameField() {
    return cy.getBySel('loginusername');
  }

  getPasswordField() {
    return cy.getBySel('loginpassword');
  }

  getLoginButtonOnModal() {
    return cy.get('.btn-primary').contains('Log in');
  }

  login(username, password) {
    this.getLoginButton().click();
    this.getCloseButton().should('exist');
    this.getUsernameField().type(username, { delay: 30 });
    this.getPasswordField().type(password, { delay: 30 });
    this.getLoginButtonOnModal().click();
  }
}

export default LoginPage;
