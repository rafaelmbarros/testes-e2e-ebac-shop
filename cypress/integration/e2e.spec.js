/// <reference types="cypress" />

import CompraPage from '../support/page_objects/compra.page';
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
      CompraPage.addProdutoAoCarrinho({ ...produto, quantidade: 1 });
    });
    CompraPage.finalizarCompra(precadastrosFixtures[0]);

    cy.get('.woocommerce-order-details__title').should(
      'contain',
      'Detalhes do pedido'
    );
  });
});
