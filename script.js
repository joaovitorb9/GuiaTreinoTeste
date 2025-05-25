document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById('idade').value);
  const altura = parseInt(document.getElementById('altura').value);
  const peso = parseInt(document.getElementById('peso').value);
  const nivel = document.getElementById('nivel').value;
  const objetivo = document.getElementById('objetivo').value;

  const planoBase = {
    'Iniciante': [
      "Caminhada leve - 30 min",
      "Agachamento - 3x10",
      "Flexão de braço com joelho no chão - 3x8",
      "Abdominal básico - 3x15",
      "Alongamento"
    ],
    'Intermediário': [
      "Corrida leve - 20 min",
      "Agachamento com salto - 3x12",
      "Flexão tradicional - 3x10",
      "Prancha - 3x30s",
      "Abdominal bicicleta - 3x20",
      "Alongamento"
    ],
    'Avançado': [
      "HIIT 15 min",
      "Agachamento com peso - 4x10",
      "Flexão diamante - 3x12",
      "Prancha lateral - 3x30s por lado",
      "Abdominal V - 3x15",
      "Burpees - 3x10",
      "Alongamento"
    ]
  };

  const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const planoHTML = dias.map((dia, i) => {
    const exercicios = planoBase[nivel].map(e => `<li>${e}</li>`).join('');
    return `<div class="mb-4"><strong>${dia}:</strong><ul class="list-disc ml-5">${exercicios}</ul></div>`;
  }).join('');

  document.getElementById('plano').innerHTML = planoHTML;
  document.getElementById('resultado').classList.remove('hidden');
});
