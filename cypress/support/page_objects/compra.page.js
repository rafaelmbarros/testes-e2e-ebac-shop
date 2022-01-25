class CompraPage {
  addProdutoAoCarrinho({ produto, quantidade, tamanho, cor }) {
    cy.visit('/');
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
  }

  finalizarCompra({
    nome,
    sobrenome,
    empresa,
    pais,
    endereco,
    numero,
    cidade,
    estado,
    cep,
    telefone,
    email,
    pagamento,
  }) {
    cy.visit('/');
    cy.get('.dropdown-toggle > .text-skin').click();
    cy.get(
      '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout'
    ).click();

    cy.get('#billing_first_name').clear().type(nome);
    cy.get('#billing_last_name').clear().type(sobrenome);
    cy.get('#billing_company').clear().type(empresa);
    cy.get('#select2-billing_country-container').type(pais + '{enter}');
    cy.get('#billing_address_1').clear().type(endereco);
    cy.get('#billing_address_2').clear().type(numero);
    cy.get('#billing_city').clear().type(cidade);
    cy.get('#select2-billing_state-container').type(estado + '{enter}');
    cy.get('#billing_postcode').clear().type(cep);
    cy.get('#billing_phone').clear().type(telefone);
    cy.get('#billing_email').clear().type(email);

    //   check pagamento
    if (pagamento === 'cheque') {
      cy.get('#payment_method_cheque').check();
    } else {
      cy.get('#payment_method_cod').check();
    }

    //   criar conta nova
    // cy.get('.woocommerce-account-fields > .form-row-wide');

    //   termos
    cy.get('#terms').check();

    // submit
    cy.get('#place_order').click();
  }
}

export default new CompraPage();
