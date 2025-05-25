document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nivel = document.getElementById('nivel').value;
  const diasSelecionados = Array.from(document.querySelectorAll('.dias:checked')).map(cb => cb.value);

  const treinos = {
    'Iniciante': [
      "Caminhada leve - 30 min", "Agachamento livre - 3x10", "Flexão de braço joelho no chão - 3x8",
      "Abdominal básico - 3x15", "Polichinelos - 2x20", "Alongamento"
    ],
    'Intermediário': [
      "Corrida leve - 20 min", "Agachamento com salto - 3x12", "Flexão tradicional - 3x10",
      "Prancha - 3x30s", "Abdominal bicicleta - 3x20", "Elevação de quadril - 3x15"
    ],
    'Avançado': [
      "HIIT 15 min", "Agachamento com barra - 4x10", "Flexão diamante - 3x12",
      "Prancha lateral - 3x30s por lado", "Abdominal V - 3x15", "Burpees - 3x10"
    ]
  };

  const planoHTML = diasSelecionados.map(dia => {
    const treinoDia = shuffleArray(treinos[nivel]).slice(0, 4);
    return `<div class="mb-4"><strong>${dia}:</strong><ul class="list-disc ml-5">${treinoDia.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
  }).join('');

  document.getElementById('plano').innerHTML = planoHTML;
  document.getElementById('resultado').classList.remove('hidden');
});

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
