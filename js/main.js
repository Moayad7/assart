


const messageModalBtn = document.getElementById("messageModalBtn")
const visionModalBtn = document.getElementById("visionModalBtn")
const message = document.getElementById("message-modal")
const vision = document.getElementById("vision-modal")
const messageClose = document.getElementById("messageClose")
const visionClose = document.getElementById("visionClose")
messageModalBtn.addEventListener("click",function() {
    message.classList.remove('hidden');
});
visionModalBtn.addEventListener("click",function() {
    vision.classList.remove('hidden');
});
messageClose.addEventListener("click",function() {
    message.classList.add('hidden');
});
visionClose.addEventListener("click",function() {
    vision.classList.add('hidden');
});


