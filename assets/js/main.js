// Variables for clicking
const ClickMedia = document.querySelector("#category-media");
const ClickIndustry = document.querySelector("#category-industry");
const ClickPolitics = document.querySelector("#category-politics");

const Categories = document.querySelectorAll(".category")

const AutomaticIncomeButton = document.querySelector("#automatic-income-btn");

const MoneyCounterDisplay = document.querySelector("#money-counter");
const ClickCounterDisplay = document.querySelector("#click-money-counter");
const AutomaticMoneyCounterDisplay = document.querySelector("#automatic-money-counter");

// Const for details element
const AllClickCounterDisplay = document.querySelector("#all-click-counter")
const DateBar = document.querySelector("#progress-bar-date");
const CurrentDate = document.querySelector("#current-date")
const CurrentSeason = document.querySelector("#current-season")

// Base variables
let startDate = 1984;
let seasons = ["Tél", "Tavasz", "Nyár", "Ősz"]
let amountOfMoney = 0;
let allClickCounter = 0;

// Base Media Variables 
let amountOfIncomeByClick = 1;
let automaticIncomeActive = false;
let automaticIncome = 0;
let automaticIncomePrice = 10; 

// Details bar
AllClickCounterDisplay.innerHTML = allClickCounter;
CurrentSeason.innerHTML = seasons[0]
CurrentDate.innerHTML = startDate;
let loadingDate = 0;
let timeSpeed = 1; // In minutes 

const LoadingDate = () => {
  if (loadingDate == 0) {

    loadingDate = 1;
    let width = 1;

    let id = setInterval(() => {
      if (width >= 100) {

        // If reach 100%
        clearInterval(id);
        loadingDate = 0;

        width = 1;
        LoadingDate();

        // Add 1 to current year
        startDate++;

        // Render current year
        CurrentDate.innerHTML = startDate;
        console.log("Véget ért egy év");

      } else {

        width++;
        DateBar.style.width = width + "%";

        switch(true) {
          case width < 25:
            DateBar.innerHTML = seasons[0];
            CurrentSeason.innerHTML = seasons[0];
            break;
          case width < 50:
            DateBar.innerHTML = seasons[1];
            CurrentSeason.innerHTML = seasons[1];
            break;
          case width < 75:
            DateBar.innerHTML = seasons[2];
            CurrentSeason.innerHTML = seasons[2];
            break;
          case width < 100:
            DateBar.innerHTML = seasons[3];
            CurrentSeason.innerHTML = seasons[3];
            break;
          default:
        }

      }
    }, timeSpeed * 600);
  }
}






// Event handler for Media clicks
ClickMedia.addEventListener("click", () => {
  console.log("Média működik...");

  // Add animation
  let categoryInfo = ClickMedia.parentElement.nextElementSibling
  let animation = document.createElement("span");
  animation.innerHTML = `<span class="category-click-info active">${amountOfIncomeByClick} Ft</span>`
  categoryInfo.appendChild(animation)

  // Add money
  amountOfMoney = amountOfMoney + amountOfIncomeByClick;  

  // Display in UI  
  MoneyCounterDisplay.innerHTML = amountOfMoney;

  // Event items 
  // Automatic income 
  if (amountOfMoney >= automaticIncomePrice) {
        AutomaticIncomeButton.removeAttribute("disabled")
  }
});





// Event handler for automatic income
AutomaticIncomeButton.addEventListener("click", () => {
  automaticIncomeActive = true;

  if (automaticIncomeActive) { 

    // Add animation
    let activeAnimation = AutomaticIncomeButton.parentElement.nextElementSibling.nextElementSibling
    let animation = document.createElement("span");
    animation.innerHTML = `<img src="/assets/img/fire.gif" class="img-fluid" alt="category-1">`
    activeAnimation.appendChild(animation)

    // 
    amountOfMoney= amountOfMoney - automaticIncomePrice; 
    MoneyCounterDisplay.innerHTML = amountOfMoney;
    automaticIncome++;
    AutomaticMoneyCounterDisplay.innerHTML = automaticIncome;

    setInterval(() => {
      amountOfMoney++;
      MoneyCounterDisplay.innerHTML = amountOfMoney;
    }, 1000);
  }
});


// Event handler for UI events
for (const category of Categories) {
  category.addEventListener("click", () => {
      category.classList.add("category-clicked")
      
      // Add click to all click counter
      allClickCounter++;

      // Render UI
      AllClickCounterDisplay.innerHTML = allClickCounter

      setTimeout(() => {
          category.classList.remove("category-clicked")
      }, 100)
  })
}
