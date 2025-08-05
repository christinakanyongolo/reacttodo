let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)

}

if (darkmode === "active") enableDarkmode()
darkmode = localStorage.getItem('darkmode')


themeSwitch.addEventListener("click", ()=> {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


