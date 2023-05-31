import lightMode from "package1s";

function messageToggler() {
    if(lightMode === true ) {
        return "You are now in light mode"
    } else {
        return "You are now in Dark mode"
    }
}

export default messageToggler;