const joke = document.querySelector(".joke");
const button = document.querySelector("button");

async function fetchJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    const result = data.joke;
    joke.textContent = result;
  } catch (error) {
    console.error("Error fetching joke:", error);
    joke.textContent = "Failed to fetch joke.";
  }
}
button.addEventListener("click", fetchJoke);

document.addEventListener("DOMContentLoaded", fetchJoke);
