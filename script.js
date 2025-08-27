let body = document.querySelector("body")
let p = document.querySelector("p")
let current_theme_p = document.querySelector(".dark_and_light")
let current_theme = localStorage.getItem("theme")

switch(current_theme) {
    case "light":
        setLightTheme()
        break
    case "dark":
        setDarkTheme()
        break
    default:
        localStorage.setItem("theme", "light")
        current_theme = "light"
        setLightTheme()
        break
}

let themes = {
    "light": "Светлая",
    "dark": "Темная",
}

changeTextInBtn(current_theme)

function changeTextInBtn(theme) {
    current_theme_p.textContent = themes[theme]
}

function setLightTheme() {
    body.style.color = "#04000fff"
    body.style.backgroundColor = "#FFFFFF"
}

function setDarkTheme() {
    body.style.backgroundColor = "#04000fff"
    body.style.color = "#FFFFFF"
}

function changeTheme() {
    if(current_theme == "light") {
        localStorage.setItem("theme", "dark")
        current_theme = "dark"
        changeTextInBtn(current_theme)
        setDarkTheme()
    } else {
        localStorage.setItem("theme", "light")
        current_theme = "light"
        changeTextInBtn(current_theme)
        setLightTheme()
    }
}

async function ip() {
    p.textContent = "Загрузка..."

    try {
        let response = await fetch("https://api.ipify.org/?format=json")
        let data = await response.json()
    
        p.textContent = data.ip
    } catch (e) {
        console.error(e)
        p.textContent = "Ошибка загрузки айпи!"
    }
    finally {
        console.log("Запрос на получение данных закончен")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ip()
})