
let darkmode = localStorage.getIten('darkmode')
const themeSwitch = document.getElementById('theme-switch')

enableDarkmode = () => {
    document.body.classlist.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

disableDarkmode = () => {
    document.body.classlist.remove('darkmode')
    localStorage.setItem('darkmode', null)

}


themeSwitch.addEventListener("click", ()=> {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


