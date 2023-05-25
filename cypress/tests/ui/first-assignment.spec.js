describe('Real World App Bank Account Tests', () => {
  let UUID = '1' + Math.random().toString();
  let bankName = 'Auto Test Bank Account ' + UUID;
  let routingNumber = '987654321';
  let accountNumber = '123456789';

  beforeEach(() => {
    cy.visit('/');
    cy.get('#username').clear().type('USERNAME');
    cy.get('#password').clear().type('PASSWORD');
    cy.get('.MuiButton-label').click();
    cy.get('h6[data-test="sidenav-username"]').should('have.text', `@${USERNAME}`);
  });
  
  afterEach(() => {
    cy.get('span.MuiTypography-root').contains('Logout').click();
  });

  it('should create a new bank account', () => {
    cy.get('.MuiTypography-root').contains('Bank Accounts').click();
    cy.get('[data-test="bankaccount-new"').click();
    cy.get('#bankaccount-bankName-input').clear().type(bankName);
    cy.get('#bankaccount-routingNumber-input').clear().type(routingNumber);
    cy.get('#bankaccount-accountNumber-input').clear().type(accountNumber);
    cy.get('button[type="submit"]').click();
    cy.get('div.MuiGrid-root p').contains(bankName).should('be.visible');
  });

  it('should delete an existing bank account', () => {
    cy.get('.MuiTypography-root').contains('Bank Accounts').click();
    cy.get('div.MuiGrid-root p').contains(bankName)
      .parents('[data-test*="bankaccount-list-item-"]')
      .within(() => {
        cy.get('[data-test="bankaccount-delete"]').click();
    });
    cy.get('div.MuiGrid-root p').contains(`${bankName} (Deleted)`).should('be.visible');
  });
});
