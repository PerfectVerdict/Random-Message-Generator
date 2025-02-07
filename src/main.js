document.querySelector('#app').innerHTML = `
    <div style="
                 background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('/prayinggirl.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;">
    <button id="getMessage" style="background-color: #000000;
    border: 3px solid #ffffff;
    color: white;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    position: fixed;
        bottom: 10%; /* Position from the top */
        left: 50%;
        margin: 0;
        transform: translateX(-50%);
    cursor: pointer; font-family: 'Arial', sans-serif; transition: background-color 0.3s ease; font-size: 30px; display: block;  auto;">Daily Bread</button>
    <h1 id="messageDisplay" style="color: white; font-family: 'Arial', sans-serif; text-align: center; max-width: 500px; font-size: 30px; line-height: 40px;"></h1>
    
`
document.getElementById("getMessage").addEventListener("click", async () => {
    try {
        const response = await fetch("https://random-message-generator.onrender.com");
        const message = await response.text()
        console.log(message)
        document.getElementById("messageDisplay").innerText = message;
    } catch (error) {
        console.error("Error fetching message:", error)
    }
} 
)
