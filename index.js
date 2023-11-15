const buttonChange = document.getElementById('idButtonChange');
const paragraph2 = document.getElementById('idParagraph2')

buttonChange.onclick = () => {
    paragraph2.style.backgroundColor = "#555555";
    paragraph2.style.color = "#fff";
    paragraph2.style.fontWeight = "bold";
    paragraph2.style.border = "solid 2px #ccc";
}

const buttonReset = document.getElementById('idButtonChange');

buttonReset.onclick = () => {
    paragraph2.style.backgroundColor = "transparent";
    paragraph2.style.color = "#555";
    paragraph2.style.fontWeight = "normal";
    paragraph2.style.border = "0";
}