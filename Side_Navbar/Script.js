let button = document.querySelector(".switch"),
    navToggle = document.querySelector(".toggle"),
    body = document.querySelector("body")
    sideBar=document.querySelector(".sideBar")

button.addEventListener("click", () => {
    body.classList.toggle("dark")
})

navToggle.addEventListener("click", () => {
    sideBar.classList.toggle("close")
})
  