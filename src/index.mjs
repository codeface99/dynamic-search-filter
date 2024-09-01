import "./styles.css";

const searchInputElement = document.querySelector(".search-input");
const itemListElement = document.querySelector(".item-list");
const noResultFoundElement = document.querySelector(".no-result-found");

searchInputElement.addEventListener("input", () => {
  const searchQuery = searchInputElement.value.toLowerCase();

  const itemElements = itemListElement.children;
  let found = false;

  for (let i = 0; i < itemElements.length; i++) {
    const itemElement = itemElements[i];
    const itemName = itemElement.textContent.toLowerCase();

    if (itemName.includes(searchQuery)) {
      itemElement.style.display = "block";

      const highlightedText = itemName.replace(
        searchQuery,
        `<span class="highlight">${searchQuery}</span>`
      );

      itemElement.innerHTML = highlightedText;

      found = true;
    } else {
      itemElement.style.display = "none";
    }
  }

  if (found) {
    noResultFoundElement.style.display = "none";
  } else {
    noResultFoundElement.style.display = "block";
  }
});
