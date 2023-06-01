const lightMode = require("package1s")
const darkMode = require("package-2s")

function messageToggler() {
    let message = {
        light: "You are now in Light Mode",
        dark: "You are now in Dark Mode"
    }

    return message
}

module.exports = {messageToggler, lightMode, darkMode}