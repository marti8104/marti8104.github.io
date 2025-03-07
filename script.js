function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
createConfetti();

function showSurprise() {
    let surpriseBox = document.createElement("div");
    surpriseBox.style.position = "fixed";
    surpriseBox.style.top = "50%";
    surpriseBox.style.left = "50%";
    surpriseBox.style.transform = "translate(-50%, -50%)";
    surpriseBox.style.padding = "20px";
    surpriseBox.style.background = "#fff";
    surpriseBox.style.borderRadius = "10px";
    surpriseBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    surpriseBox.style.zIndex = "1000";
    
    surpriseBox.innerHTML = `<h2>🎉 չէիր Սպասում , չէ՞! 🎉</h2>
                             <p>Թող Ձեր ամեն օրն անցնի լի երջանկությամբ, բարությամբ ու անսահման սիրով։ Դուք արժանի եք ամենալավին։ 💕</p>
                             <button onclick="this.parentElement.remove()" style="padding:10px; background:#d63384; color:white; border:none; border-radius:5px; cursor:pointer;">Փակել</button>`;
    document.body.appendChild(surpriseBox);
}

