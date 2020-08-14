// Muda a cor da borda do input quando estiver digitando
function onInputChange() {
    checkEmptyInput()
}

function checkEmptyInput() {
    var oldStringObj = document.getElementById('oldString')
    var newStringObj = document.getElementById('newString')

    oldStringObj.style.borderColor = oldStringObj.value === "" ? 'red' : '#40444c'
    newStringObj.style.borderColor = newStringObj.value === "" ? 'red' : '#40444c'
}

// Atualiza o Text Area de Resultado
function onUpdateText() {
    var oldString = document.getElementById('oldString').value
    var newString = document.getElementById('newString').value

    checkEmptyInput()

    if (oldString !== "" && newString !== "" && oldString.length > 2 && newString.length > 2) {
        var oldText = document.getElementById('old').value

        // Faz o replace da string
        while (oldText.includes(oldString)) {
            oldText = oldText.replace(oldString, newString)
        }

        document.getElementById('result').value = oldText
    } 
}

// Copia Texto para o Clipboard
function copyToClipboard() {
    var resultArea = document.getElementById('result')
    resultArea.select() // Seleciona todo o texto
    document.execCommand("copy") // Copia
    document.getSelection().empty() // Limpa a seleção

    showCopyNotification(true)
    setTimeout(function () {
        showCopyNotification(false)
    }, 3000)
}

// Mostra ou Esconde a Notificação de "Copiado"
function showCopyNotification(flag) {
    if (flag) {
        document.querySelector('.not-container').classList.add("fadeIn")
        document.querySelector('.not-container').classList.remove("fadeOut")
    } else {
        document.querySelector('.not-container').classList.remove("fadeIn")
        document.querySelector('.not-container').classList.add("fadeOut")
    }
}

// Mostra ou Esconde o Ícone de Copiar o Texto da Área de Resultado
function showCopyIcon(flag) {
    if (flag) {
        document.querySelector('.copy-container').style.opacity = 1
    } else {
        document.querySelector('.copy-container').style.opacity = 0
    }
}

// Limpa os Campos
function clearFields() {
    // window.location.reload();
    console.log('Cleaning Fields')
    document.getElementById('old').value = ""
    document.getElementById('result').value = ""
}

