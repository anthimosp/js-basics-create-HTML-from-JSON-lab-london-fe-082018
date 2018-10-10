document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  // invoking a function here will make sure it happens on page load
  // your code here
const Titanic = document.getElementById("Titanic")

Titanic.addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies["Titanic"]["title"]
  document.getElementById("director").innerHTML = movies["Titanic"]["director"]
  document.getElementById("genre").innerHTML = movies["Titanic"]["genre"]
  document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"]
  document.getElementById("poster").innerHTML = movies["Titanic"]["poster"]
  document.getElementById("description").innerHTML = movies["Titanic"]["description"]
  document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"]
  document.getElementById("case").innerHTML = movies["Titanic"]["cast"]
  }
)

const Terminator 2 = document.getElementById("Titanic")

Titanic.addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies["Titanic"]["title"]
  document.getElementById("director").innerHTML = movies["Titanic"]["director"]
  document.getElementById("genre").innerHTML = movies["Titanic"]["genre"]
  document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"]
  document.getElementById("poster").innerHTML = movies["Titanic"]["poster"]
  document.getElementById("description").innerHTML = movies["Titanic"]["description"]
  document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"]
  document.getElementById("case").innerHTML = movies["Titanic"]["cast"]

  }
)
