const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// add Animal cards with an image, habitat (/project), title, text, remove button
function createCard() {
  const animalCards = document.querySelector("#cardContainer");
  const card = document.createElement("div");
  card.id = "card";
  const cardTitle = "Bearssss";
  const cardText = `BEars do things Officia amet
    perspiciatis ad quibusdam incidunt eaque, nobis, eveniet
    neque porro id commodi quisquam debitis!`;
  const cardImg = "Polar_bear.jpg";
  const cardOrigin = `#Polar Circle`

  card.innerHTML = `
  <div class="col-span-1 bg-white rounded-lg overflow-hidden shadow relative">
  <img src="${cardImg}" class="h-56 w-full object-cover object-center transition-opacity hover:opacity-0 duration-1000">
  <div class="p-4 h-auto md:h-40 lg:h-48">
  <h4 class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
  ${cardTitle}</h4>
  <p class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
    ${cardText}</p>
  <p class="border-t border-gray-500 text-gray-400">${cardOrigin}</p>
 </div>
</div>
    `;
  animalCards.appendChild(card);
}


createCard()
createCard()
createCard()
createCard()