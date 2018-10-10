document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  // invoking a function here will make sure it happens on page load
  // your code here
const Titanic = document.getElementById("Titanic")

Titanic.addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies["Titanic"]["title"]
  document.getElementById("director").innerHTML = movies["Titanic"]["director"]
  document.getElementById("title").innerHTML = movies["Titanic"]["title"]
  
}
)
}
)
