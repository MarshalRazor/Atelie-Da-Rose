// Função para adicionar produtos ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      // A cada clique, incrementa o número de itens no carrinho
      const cartIcon = document.getElementById('cart-icon');
      let cartCount = parseInt(cartIcon.getAttribute('data-count') || '0');
      cartCount++;
      cartIcon.setAttribute('data-count', cartCount);
      cartIcon.textContent = `🛒 (${cartCount})`; // Atualiza o ícone do carrinho com a quantidade
  });
});
