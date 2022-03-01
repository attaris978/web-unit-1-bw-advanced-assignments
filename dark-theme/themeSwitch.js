const changeStyle = () => {
    if (document.querySelector('button').innerText == "Go Light") {
    document.querySelector('.themesheet').href = "./light-theme.css";
    document.querySelector('button').innerText = "Go Dark";
} else {
    document.querySelector('.themesheet').href = "./dark-theme.css";
    document.querySelector('button').innerText = "Go Light";
}
}
