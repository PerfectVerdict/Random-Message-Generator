document.querySelector('#app').innerHTML = `
    <h1>random message generator</h1>
    <button id="getMessage" style="font-size: 20px; padding: 15px 30px; display: block; margin-left: auto; margin-right: auto;">Get Message</button>
    <h2 id="messageDisplay"></h2>
`
document.getElementById("getMessage").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/message");
        const message = await response.text()
        console.log(message)
        document.getElementById("messageDisplay").innerText = message;
    } catch (error) {
        console.error("Error fetching message:", error)
    }
} 
)
