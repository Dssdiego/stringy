// Esconde a notificação e o botão de cópia ao inicar
window.onload = () => {
    console.log("Carregado!")
    // showCopyIcon(false)
    // showCopyNotification(false)
}

// Atualiza o Text Area de Resultado
function onUpdateText() {
    var oldString = document.getElementById('oldString').value
    var newString = document.getElementById('newString').value

    var oldText = document.getElementById('old').value
    oldText = oldText.replaceAll(oldString, newString)

    document.getElementById('result').innerHTML = oldText
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

// Mostra e Esconde partes da UI

function showCopyNotification(flag) {
    showPieceOfUI(flag, '.not-container')
    showPieceOfUI(flag, '.notification')
}

function showCopyIcon(flag) {
    showPieceOfUI(flag, '.copy-icon-background')
    showPieceOfUI(flag, '.copy-icon')
}

function showPieceOfUI(flag, ui) {
    let state = flag ? "visible" : "hidden"
    document.querySelector(ui).style.visibility = state
}

// Recarrega a Página
function reloadPage() {
    window.location.reload();
}

