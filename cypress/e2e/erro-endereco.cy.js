describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/endereco.html')
    cy.get('[data-input="cep"]').type('11111111');
    cy.get('[data-input="cep"]').blur();
    cy.wait(1000);
    cy.get('[data-input="numero-casa"]').type(' ');
    cy.get('[data-input="botao-proximo2"]').click();
    cy.wait(1000);
    cy.get('[data-input="cep"]').clear();
    cy.get('[data-input="cep"]').type('18077090');
    cy.get('[data-input="cep"]').blur();
    cy.wait(1000);
    cy.get('[data-input="numero-casa"]').type('123');
    cy.get('[data-input="botao-proximo2"]').click();
  })
})