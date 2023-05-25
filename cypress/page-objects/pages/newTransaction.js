export class NewTransaction {
  url = 'http://localhost:3000/transaction/new';

  elements = {
    getNewBtn: () => cy.get('a').contains('New'),
    getSearchBar: () => cy.get('input[id="user-list-search-input"]'),
    getContactLst: () => cy.get('li[data-test*="user-"]'),
    getAmountTxt: () => cy.get('#amount'),
    getNoteTxt: () => cy.get('#transaction-create-description-input'),
    getPayBtn: () => cy.get('button span.MuiButton-label').eq(1),
    getSuccessMsg: () => cy.get('h2'),
  }

  addNew(contactName, amount, note) {
    this.elements.getNewBtn().click();
    this.elements.getSearchBar().type(contactName);
    this.elements.getContactLst().contains(contactName).click();
    this.elements.getAmountTxt().clear().type(amount);
    this.elements.getNoteTxt().clear().type(note);
    this.elements.getPayBtn().click();
  }
}

export const NewTransactionPage = new NewTransaction();
