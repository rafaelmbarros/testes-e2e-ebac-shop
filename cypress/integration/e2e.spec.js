/// <reference types="cypress" />

const produtosFixtures = require('../fixtures/produtos.json');
const precadastrosFixtures = require('../fixtures/precadastros.json');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtosFixtures.forEach((produto) => {
      cy.addProdutoCarrinho({ ...produto, quantidade: 1 });
    });
    cy.finalizarCompra(precadastrosFixtures[0]);

    cy.get('.woocommerce-order-details__title').should(
      'contain',
      'Detalhes do pedido'
    );
  });
});
