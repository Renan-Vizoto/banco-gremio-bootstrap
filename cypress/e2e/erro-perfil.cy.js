describe('Teste Erros', () => {
  it('perfil', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-input="input-nome"]').type('Renan');
    cy.get('[data-input="input-sobrenome"]').type('Vizoto Ferreira');

    cy.get('[data-input="input-cpf"]').type('45026510871');
    cy.get('[data-input="input-cpf"]').blur();
    cy.contains('CPF Inválido.').should('be.visible');

    cy.get('[data-input="input-dataNasc"]').type('2055-01-08');

    cy.get('[data-input="input-email"]').type('renan.com');
    cy.get('[data-input="input-email"]').blur();
    cy.contains('E-mail Inválido').should('be.visible');

    cy.get('[data-input="input-senha"]').type('aanerffgd123');
    cy.get('[data-input="input-senha"]').blur();
    cy.contains('Deve conter entre 8-20 caracteres (@, A, a, 1).').should('be.visible');

    cy.get('[data-input="input-confirmaSenha"]').type('ghjganer123');
    cy.get('[data-input="input-confirmaSenha"]').blur();
    cy.contains('Senha Inválida.').should('be.visible');

    cy.get('[data-input="input-celular"]').type('111111');
    cy.get('[data-input="input-celular"]').blur();
    cy.contains('Número inválido.').should('be.visible');

    // cy.get('[data-input="select-sexo"]').select('Masculino');
    cy.wait(1000);
    cy.get('[data-input="botao-proximo1"]').click();
    cy.contains('Selecione o sexo.').should('be.visible');
  })
})