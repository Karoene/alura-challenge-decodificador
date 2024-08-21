function displayText(tag, text) {
  const userOutput = document.querySelector(tag);
  userOutput.innerHTML = text;
}

function toggleVisibility(elementId, visible) {
  const element = document.getElementById(elementId);
  element.style.visibility = visible ? "visible" : "hidden";
}

function secondScreen() {
  displayText("h3", "");
  displayText("h4", "");

  document.getElementById("lupe-man").style.display = "none";
  toggleVisibility("copyButton", true);
  toggleVisibility("messageToCopy", true);

  const copyButton = document.getElementById("copyButton");
  copyButton.style.pointerEvents = "auto";
}

function processText(action) {
  const inputText = document.querySelector("textarea").value.trim();
  const processedText = removeDiacritics(inputText.toLowerCase());

  if (processedText !== "") {
    const result = action(processedText);
    displayText("h2", result);
    secondScreen();
    document.querySelector("textarea").value = "";
  } else {
    alert(
      "Erro #01:\nPor favor, entre com uma mensagem válida para ser criptografada ou descriptografada."
    );
    return false;
  }
  return true;
}

function encryptText() {
  return processText((text) =>
    text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
  );
}

function decryptText() {
  return processText((text) =>
    text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
  );
}

function removeDiacritics(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, ""); // Permitindo apenas letras minúsculas e espaços
}

function copyText() {
  const textToClipboard = document.getElementById("messageToCopy").innerText;
  navigator.clipboard.writeText(textToClipboard).then(() => {
    displayText("h2", "");
    toggleVisibility("messageToCopy", false);
    location.reload();
  });
}
