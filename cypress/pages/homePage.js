class HomePage {
  getUsernameLabel() {
    return cy.get('#nameofuser');
  }

  getLoginNav() {
    return cy.get('#login2');
  }

  getLogoutNav() {
    return cy.getBySel('logout2').contains('Log out');
  }

  validateUsername(username) {
    this.getUsernameLabel().contains(username).should('be.visible');
  }

  validateLoginNavNotVisible() {
    this.getLoginNav().should('not.be.visible');
  }

  validateLogoutNavVisible() {
    this.getLogoutNav().should('exist').contains('Log out');
  }
}

export default HomePage;
