describe('Cadastro Maior de Idade', () => {
  it('perfil', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-input="input-nome"]').type('Renan');
    cy.get('[data-input="input-sobrenome"]').type('Vizoto Ferreira');
    cy.get('[data-input="input-cpf"]').type('45026510876');
    cy.get('[data-input="input-dataNasc"]').type('2003-01-08');
    cy.get('[data-input="input-email"]').type('renan@gmail.com');
    cy.get('[data-input="input-senha"]').type('@Naner123');
    cy.get('[data-input="input-confirmaSenha"]').type('@Naner123');
    cy.get('[data-input="input-celular"]').type('11111111111');
    cy.get('[data-input="select-sexo"]').select('Masculino');
    cy.get('[data-input="botao-proximo1"]').click();

    cy.get('[data-input="cep"]').type('18077090');
    cy.get('[data-input="cep"]').blur();
    cy.wait(1000);
    cy.get('[data-input="numero-casa"]').type('211');
    cy.get('[data-input="botao-proximo2"]').click();

    cy.get('[data-input="salario"]').type('1234');
    cy.get('[data-input="termos"]').click();
    cy.wait(300);
    cy.get('[data-input="cadastro"]').click();
  })
})