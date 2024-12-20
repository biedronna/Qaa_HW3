class LoginPage {

    constructor() {
        this.url = 'https://www.edu.goit.global/account/login' ;
        this.emailInput = '#user_email' ;
        this.passwordInput = '#user_password' ;
        this.loginButton = '.eckniwg2' ;

    }

visit() {

    cy.visit(this.url);
}

loginUser(email,password) {

    cy.get(this.emailInput).type(email)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
}

};

export default new LoginPage(); 