const send = document.getElementById("send");
const content = document.getElementById("content");
const userInputX = document.getElementById("userInputX");
const userInputY = document.getElementById("userInputY");

send.onclick = () => {
    const userInputXValue = userInputX.value;
    const userInputYValue = userInputY.value;
    content.style.left = `${userInputXValue}px`;
    content.style.top = `${userInputYValue}px`;
}