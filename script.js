const cards = document.querySelectorAll('.pokemon-card');
const modal = document.querySelector('.modal'); // Selecione o seu modal
const successMessage = document.querySelector('.success-message'); // Seleciona a mensagem de sucesso


cards.forEach(card => {
    card.addEventListener('click', () => {
        setTimeout(() => {
            successMessage.style.display = 'none';
          }, 3000); // Ocultar após 3 segundos
      // Remover a classe 'active' de todos os cards
      cards.forEach(card => card.classList.remove('active', 'dark'));
  
      // Adicionar a classe 'active' ao card clicado
      card.classList.add('active');
  
      // Adicionar a classe 'dark' aos outros cards
      card.querySelectorAll('~ .pokemon-card.dark').forEach(otherCard => {
        otherCard.classList.add('dark');
      });

      successMessage.style.display = 'Voce escolheu';
  
      // Exibir o modal e atualizar a descrição
      modal.style.display = 'flex';
      description.textContent = `
        <h2>${card.querySelector('h2').textContent}</h2>
        <p>Tipo: Planta</p>
        <p>Habilidades: Raio Solar, Veneno</p>
        `;

       
    });
  });