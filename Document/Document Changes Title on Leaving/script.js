let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Leaving So Soon...🥺";})
window.addEventListener("focus", () => {document.title = docTitle;})