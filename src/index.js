// Load  the DOM content
document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the local server.
    fetchAnimals();
  });
  
  function fetchAnimals() {
    fetch("http://localhost:3000/characters")
      .then((resp) => resp.json())
      .then(CharacterBar);
  }
  // Takes in a number of characters but only renders them one by one
  function CharacterBar(characters) {
    characters.forEach(barDetails);
  }
  // Render animals.
  let currentAnimal;
  function barDetails(character) {
    const characterId = character.id;
    // const characterName= character.characterName
    const characterImage = character.image;
    const characterVotes = character.votes;
    const bar = document.querySelector("#character-bar");
    const barSpan = document.createElement("span");
    barSpan.innerHTML = character.name;
    bar.appendChild(barSpan);
    barSpan.style.cursor = "pointer";
    barSpan.addEventListener("click", () => {
      // Store the state.
      currentAnimal = character;
      // Show data that is specific to a given animal.
      showAnimal(character);
    });
  }
  // Display the selected data.
  function showAnimal(character) {
    const characterName = document.querySelector("p#name");
    characterName.innerHTML = character.name;
    const characterImg = document.querySelector("img#image");
    characterImg.src = character.image;
  // Access the votes form.
    const characterVotes = document.querySelector("span#vote-count");
    characterVotes.innerHTML = character.votes;
  }
  
  // Reset button.
  const resetVotes = document.querySelector("button#reset-btn");
  // Create a pointer. 
  resetVotes.style.cursor = "pointer";
  // Add an event listener that fires when the user clicks a button.
  resetVotes.addEventListener("click", () => {
    currentAnimal.votes = 0;
    showAnimal(currentAnimal);
    form.reset();
  });
  // Adding votes.
  
  const inputvotes = document.querySelector("input#votes");
  const animalVotes = document.querySelector("span#vote-count");
  const form = document.querySelector("form#votes-form");
  
  form.addEventListener("submit", (e) => {
    // Prevent the event's default acction from occuring.
    e.preventDefault();
  //   Return the value provided and display the results together with the animal's details.
    currentAnimal.votes += parseInt(e.target.votes.value, 10);
    showAnimal(currentAnimal);
    form.reset();
  });