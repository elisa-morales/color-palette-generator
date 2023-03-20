const baseUrl = "https://www.thecolorapi.com/scheme"
const seedColor = document.getElementById("seed-color")
const colorSchemeMode = document.getElementById("color-scheme-mode")
const colorScheme = document.getElementById("color-scheme")
const colorHex = document.getElementById("color-hex")
const loader = document.etElementById("loading")

document.getElementById("get-colors-btn").addEventListener("click", render)

function getRandomColor() {
  let letters = "0123456789ABCDEF"
  let randomHex = "#"
  for (let i = 0; i < 6; i++) randomHex += letters[Math.floor(Math.random() * 16)]
  return randomHex
}

function getColorScheme() {
  loader.classList.add("display")

  fetch(`${baseUrl}?hex=${seedColor.value.slice(1)}&mode=${colorSchemeMode.value}`)
    .then((res) => res.json())
    .then((data) => {
      loader.classList.remove("display")
      for (let i = 0; i < 5; i++) {
        let color = data.colors[i].hex.value
        colorScheme.innerHTML += `
        <div id="container">
        <div id="color-scheme" style="background-color:${color}"></div>
        <div id="color-hex">${color}</div>
        </div>
        `
      }
    })
}

function render() {
  colorScheme.innerHTML = ``
  getColorScheme()
}

seedColor.value = getRandomColor()
render()
