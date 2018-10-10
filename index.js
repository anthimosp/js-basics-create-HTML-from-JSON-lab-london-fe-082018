document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  // invoking a function here will make sure it happens on page load
  // your code here
const Titanic = document.getElementById("Titanic")

Titanic.addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies["Titanic 2"]["title"]
  document.getElementById("director").innerHTML = movies["Titanic"]["director"]
  document.getElementById("genre").innerHTML = movies["Titanic"]["genre"]
  document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"]
  document.getElementById("poster").innerHTML = movies["Titanic"]["poster"]
  document.getElementById("description").innerHTML = movies["Titanic"]["description"]
  document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"]
  document.getElementById("case").innerHTML = movies["Titanic"]["cast"]
  }
)

const Terminator = document.getElementById("Terminator 2")

Terminator.addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies["Terminator"]["title"]
  document.getElementById("director").innerHTML = movies["Terminator"]["director"]
  document.getElementById("genre").innerHTML = movies["Terminator"]["genre"]
  document.getElementById("filmRating").innerHTML = movies["Terminator"]["filmRating"]
  document.getElementById("poster").innerHTML = movies["Terminator"]["poster"]
  document.getElementById("description").innerHTML = movies["Terminator"]["description"]
  document.getElementById("audienceScore").innerHTML = movies["Terminator"]["audienceScore"]
  document.getElementById("case").innerHTML = movies["Terminator"]["cast"]
  }
)

  }
)
