const btn = document.getElementById("btn")
const box = document.getElementById("box")
const map = document.getElementById("map")

async function getLocation() {
    try {
        const response = await fetch("https://ipinfo.io/json");
        const location = await response.json();
        console.log(location.loc.split(","));
        box.innerHTML = `
        <h1>Foydalanuvchi joylashuvini aniqlash</h1>
        <button id="btn">Joylashuvni korsat</button >
        <p>Kenglik: ${location.loc.split(",")[0]} </p>
        <p>Uzunlik: ${location.loc.split(",")[1]}</p>
        <p>Mamlakat: ${location.country} <img src='https://flagcdn.com/16x12/${location.country.toLowerCase()}.png'></img</p>
        <p>Shahar: ${location.city}</p>
    <p>IP Manzil: ${location.ip}</p>
    <p>Internet Provayder: ${location.hostname}</p>
    <div id="map">
    <iframe
    width="100%"
    height="300"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps?q=${location[0]},${location[1]}&output=embed" allowfullscreen>
    </iframe>
    </div >
    `
    p.textContent = location.country;
}catch (error){
        console.log(error);
    }
}

btn.addEventListener("click",()=>{
getLocation();
})
  







