// =======================
// SKILLS FILTER + SORT
// =======================

const skillCards = document.querySelectorAll(".skill-card");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSkills");
const skillsContainer = document.getElementById("skillsContainer");

// -------- FILTER --------
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Active button UI
    filterBtns.forEach(b => {
      b.classList.remove("bg-indigo-500", "text-white");
      b.classList.add("bg-gray-200", "dark:bg-gray-700");
    });

    btn.classList.add("bg-indigo-500", "text-white");

    // Show / Hide Skills
    skillCards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === "all" || category === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// -------- SORT --------
sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;

  let cardsArray = Array.from(skillCards);

  cardsArray.sort((a, b) => {
    const textA = a.innerText.toLowerCase();
    const textB = b.innerText.toLowerCase();

    if (value === "az") return textA.localeCompare(textB);
    if (value === "za") return textB.localeCompare(textA);
    return 0;
  });

  // Re-append sorted elements
  cardsArray.forEach(card => {
    skillsContainer.appendChild(card);
  });
});