import SignupPage from '../pages/signupPage';
import HomePage from '../pages/homePage';

describe('Testing SignUp & SignIn', () => {
  let randomString = Math.random().toString(36);
  let username = 'Auto' + randomString;
  let username2 = 'Richmond';
  let errms = 'This user already exists.';
  let errmsus = 'User does not exist';
  const password = Cypress.env('password');
  const signupPage = new SignupPage();
  const homePage = new HomePage();

  context('SignUp UI', () => {
    beforeEach(() => {
      signupPage.visit();
    });

    it('TC_001_Validate Signup of a new user through UI', () => {
      signupPage.signup(username, password);
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('newUser');
      cy.wait('@newUser').should(({ request, response }) => {
        expect(response.statusCode).to.eq(200);
        expect(request.body.username).to.eq(username);
      });
    });

    it('TC_002_Validate Signup: A new user cannot create an account if one already exists', () => {
      signupPage.signup(username, password);
      cy.on('window:alert', msg => {
        expect(msg).to.contains(errms);
      });
    });
  });

  context('LogIn UI', () => {
    beforeEach(() => {
      cy.login(username, password);
      homePage.validateUsername(username);
    });

    it('TC_003_Validate an Existing user can access through UI', () => {
      homePage.validateLoginNavNotVisible();
      homePage.validateLogoutNavVisible();
    });

    it('TC_004_Validate a Non Existing user cannot access through UI', () => {
      cy.login(username2, password);
      cy.on('window:alert', msg => {
        expect(msg).to.contains(errmsus);
      });
      homePage.validateLoginNavNotVisible();
    });
  });
});
