const switchTheme = () =>{
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }

document.querySelector("#switch-theme-button").addEventListener("click", switchTheme);