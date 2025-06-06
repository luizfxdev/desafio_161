// Função para contar os espirros do dragão
function countSneezes(sneezeSequence) {
  // Inicializa os contadores
  let strongCount = 0
  let weakCount = 0

  // Percorre cada caractere da string
  for (let i = 0; i < sneezeSequence.length; i++) {
    const char = sneezeSequence[i]

    // Verifica se é um espirro forte (F) ou fraco (f)
    if (char === 'F') {
      strongCount++
    } else if (char === 'f') {
      weakCount++
    }
  }

  // Retorna o resultado como um objeto
  return {
    forte: strongCount,
    fraco: weakCount
  }
}

// Função para exibir o resultado formatado
function displayResult(result) {
  const resultElement = document.getElementById('result')

  if (result.forte === 0 && result.fraco === 0) {
    resultElement.innerHTML = 'Nenhum espirro válido encontrado.<br>Use apenas F (forte) ou f (fraco).'
    return
  }

  // Cria uma representação visual das chamas
  let flamesHTML = '<div style="margin-top: 10px;">'

  // Adiciona chamas fortes
  for (let i = 0; i < result.forte; i++) {
    flamesHTML += '<span style="color: #FF4500; font-size: 1.8rem;">🔥</span> '
  }

  // Adiciona chamas fracas
  for (let i = 0; i < result.fraco; i++) {
    flamesHTML += '<span style="color: #FFA07A; font-size: 1.8rem;">♨️</span> '
  }

  flamesHTML += '</div>'

  // Exibe o resultado
  resultElement.innerHTML = `
        <strong>Espirros Fortes:</strong> ${result.forte}<br>
        <strong>Espirros Fracos:</strong> ${result.fraco}
        ${flamesHTML}
    `
}

// Função para limpar o campo de entrada e resultado
function clearFields() {
  document.getElementById('sneezes').value = ''
  document.getElementById('result').textContent = 'Resultado aparecerá aqui...'
}

// Event listeners para os botões
document.getElementById('calculate').addEventListener('click', function () {
  const sneezeSequence = document.getElementById('sneezes').value
  const result = countSneezes(sneezeSequence)
  displayResult(result)
})

document.getElementById('back').addEventListener('click', clearFields)

// Adiciona um listener para a tecla Enter no campo de input
document.getElementById('sneezes').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const sneezeSequence = this.value
    const result = countSneezes(sneezeSequence)
    displayResult(result)
  }
})
