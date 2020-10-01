// cache DOM
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const animalCards = document.querySelector("#cardContainer");
const addAnimal = document.querySelector("#addAnimal");
const animalForm = document.querySelector("#animalForm");
const closeFormBtn = document.querySelector("#closeForm");
const submitForm = document.querySelector("#submitForm");
const cardContainer = document.querySelector("#cardContainer");
const jungleBtn = document.querySelector("#jungleBtn");
const polarBtn = document.querySelector("#polarBtn");
const oceanBtn = document.querySelector("#oceanBtn");

// Hidden menus and forms
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

closeFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForm();
});

addAnimal.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForm();
});

function toggleForm() {
  if (animalForm.classList.contains("hidden")) {
    animalForm.classList.remove("hidden");
  } else {
    animalForm.classList.add("hidden");
  }
}

// Form submission
let animals = [
  {
    animal: "Polar Bearsss",
    biome: "Polar Circle",
    description:
      "BEars do things Officia amet perspiciatis ad quibusdam incidun",
    vulnerability: "CE",
    imagesrc: "Polar_bear.jpg",
  },
  {
    animal: "Tiger",
    biome: "Jungle",
    description: "Hobbes in the Jungle, better watch ya booties",
    vulnerability: "EX",
    imagesrc: "tiger.jpg",
  },
  {
    animal: "Sea Turtle",
    biome: "Ocean",
    description: "These are the Sea Turtles, they comin for ya!",
    vulnerability: "CE",
    imagesrc: "Sea_Turtle.jpg",
  },
];

// Add animal from form

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const animalTitle = document.querySelector("#animalTitle").value;
  const animalBio = document.querySelector("#animalBiome").value;
  const animalDesc = document.querySelector("#animalDesc").value;
  const animalImg = document.querySelector("#animalImg").value;
  const extStatus = document.querySelector("#extStatus").value;

  let newAnimal = {
    animal: animalTitle,
    biome: animalBio,
    description: animalDesc,
    vulnerability: extStatus,
    imagesrc: animalImg,
  };
  animals.push(newAnimal);
  animalForm.reset();
  toggleForm();

  refreshContainer();
});

// add Animal cards with an image, habitat (/project), title, text, remove button
let render = () => {
  for (let i = 0; i < animals.length; i++) {
    const card = document.createElement("div");
    card.id = "card";

    let title = animals[i].animal;
    let img = animals[i].imagesrc;
    let desc = animals[i].description;
    let ext = animals[i].vulnerability;
    let bio = animals[i].biome;

    card.innerHTML = `
  <div class="col-span-1 bg-white rounded-lg overflow-hidden shadow relative">
  
  <img src="${img}" class="h-56 w-full object-cover object-center transition-opacity hover:opacity-0 duration-1000">
  <div class="p-4 h-auto md:h-40 lg:h-48">
  <h4 class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
  ${title}</h4>
  <p class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
    ${desc}</p>
  <p class="border-t border-gray-500 text-gray-400 ${bio}" id="status">Redlist #${ext} || # ${bio} </p>
  <button class="my-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="removeAnimal">Delete</button>
 </div>
</div>
    `;

    animalCards.appendChild(card);
    showCategories();
  }
};
function removeAnimal() {
  let removeBtn = document.querySelectorAll("#removeAnimal");
  removeBtn.forEach((button) => {
    button.addEventListener("click", remove);
  });
}

function refreshContainer() {
  clearTasks();
  render();
  removeAnimal();
}

function clearTasks() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}
function remove() {
  const index = this.parentNode.dataset.index;
  animals.splice(index, 1);
  refreshContainer();
}

render();
removeAnimal();

function showCategories() {
  let jungleBio = animals.filter(function (bio) {
    return bio.biome == "Jungle";
  });

  let polarBio = animals.filter(function (bio) {
    return bio.biome == "Polar Circle";
  });

  let oceanBio = animals.filter(function (bio) {
    return bio.biome == "Ocean";
  });

  jungleBtn.innerHTML = `Jungle: ${jungleBio.length}`;
  polarBtn.innerHTML = `Polar Circle: ${polarBio.length}`;
  oceanBtn.innerHTML = `Oceans: ${ oceanBio.length}`;
}

jungleBtn.addEventListener("click", filterBiomes);

function filterBiomes() {
  const cardFilter = document.querySelectorAll("#card");
  const cardStatus = document.querySelectorAll("#status");

  console.log(cardFilter);
  console.log(cardStatus);

  for (let i = 0; i < cardStatus.length; i++) {
    if (cardStatus[i].classList.contains("Jungle")) {
      cardFilter[i].classList.remove("hidden");
    } else {
      cardFilter[i].classList.add("hidden");
    }
  }
}

showCategories();
