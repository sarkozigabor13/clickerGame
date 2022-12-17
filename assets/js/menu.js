// Base variables
const Body = document.querySelector("body");
const MainLayer = document.querySelector("main");

// Section variables 
const SectionMenu = document.querySelector(".section-menu")
const SectionGame = document.querySelector(".section-game")

// Bacgkround variables 
const MainMenuBg = "bg-menu"
const TutorialBg = "bg-menu-tutorial"
const DeveloperBg = "bg-menu-developer"
const LoadBg = "bg-menu-load"
const GameBg = "bg-game";

// Music variables
const BackgroundAudio = document.querySelector("#background-music");
const ClickAudio = document.querySelector("#click-music");

// Card class variables
const MainMenu = document.querySelector("#main-menu").classList;
const MainMenuStart = document.querySelector("#main-menu-start").classList;
const MainMenuGameLoad = document.querySelector("#main-menu-game-load");
const MainMenuTutorial = document.querySelector("#main-menu-tutorial").classList;
const MainMenuDeveloper = document.querySelector("#main-menu-developer").classList;
const MainStatistics = document.querySelector("#main-statistics").classList;

// Button variables
const AllClickableElements = document.querySelectorAll("button, a")
const MainMenuStartBtn = document.querySelector("#main-menu-start-btn");
const MainMenuTutorialBtn = document.querySelector("#main-menu-tutorial-btn");
const MainMenuDeveloperBtn = document.querySelector("#main-menu-developer-btn");
const MainMenuBackBtns = document.querySelectorAll(".main-menu-back-btn");
const MainMenuStartGameBtn = document.querySelector("#main-menu-start-game-btn");
const StartGameButton = document.querySelector("#start-game-button");

// Game settings variables 
const PlayerNameInput = document.querySelector("#player-name-input")
const LoadingProgressDiv = document.querySelector("#game-load-progress-div") 
const LoadingProgressBar = document.querySelector("#game-load-progress-bar") 
const LoadingTextDiv = document.querySelector("#main-menu-game-load-text span")
const CharacterRow = document.querySelector(".character-row")


// Game UI mode on
let GameTesterMode = false;


const Init = () => {


    // For testing purposes
    if (GameTesterMode) {

    // Start background image
    backgroundChange(MainMenuBg, GameBg);

    // Change layout
    SectionMenu.classList.add("d-none")
    SectionGame.classList.remove("d-none")

    // Change sections
    sectionChange(MainMenuGameLoad, MainStatistics)

    // Start progress bar
    LoadingGameAnimation();

    } else {

    // Start background image
    backgroundChange(MainMenuBg, MainMenuBg);

    // Add background music
    playBgMusic();

    // Start rain effect
    RainEffect();
    }
}


// -------------------------------------------------------- // 
// -------------------- Menu Section  --------------------- //
// -------------------------------------------------------- // 

// Background music 
const playBgMusic = () => {

    setTimeout(() => {
        BackgroundAudio.volume = 0.1;
        BackgroundAudio.play();
    }, 2000)
}


// Click effect 
for (const ClickableElement of AllClickableElements) {
    ClickableElement.addEventListener('click', () => {
        ClickAudio.volume = 0.1;
        ClickAudio.play();   
    })
}


// Rain effect
const RainEffect = () => {

    // Settings
    const IntenseOfRain = 100;  //Lower value causes heavier rain 
    const Interval = window.setInterval(() => {

        let drop = document.createElement("span");
        drop.style.left = Math.round(Math.random() * 100) + "%";
        Body.appendChild(drop);
        drop.className = "drop layer" + Math.floor(Math.random() * 3);
        }, IntenseOfRain);
        
        window.setTimeout(() => {
        window.clearInterval(Interval);
        }, 10000);
}


// Content changing
const sectionChange = (removeSection, addSection) => {
    removeSection.remove("active",  "animation");
    addSection.add("active",  "animation")
}


// Background changing
const backgroundChange = (removeBg, addBg) => {

    // Background animation 
    MainLayer.classList.toggle("animation")
    setTimeout(() => {
        MainLayer.classList.toggle("animation")  
    }, 750)

    Body.classList.remove(removeBg)
    Body.classList.add(addBg)
}


// Open start
MainMenuStartBtn.addEventListener('click', () => {
    sectionChange(MainMenu, MainMenuStart)
})


// Open tutorial
MainMenuTutorialBtn.addEventListener('click', () => {
    backgroundChange(MainMenuBg, TutorialBg)
    sectionChange(MainMenu, MainMenuTutorial)
})


// Open developer
MainMenuDeveloperBtn.addEventListener('click', () => {
    backgroundChange(MainMenuBg, DeveloperBg)
    sectionChange(MainMenu, MainMenuDeveloper)
})


// Back to main menu
for (const MainMenuBackButton of MainMenuBackBtns) {
    MainMenuBackButton.addEventListener('click', () => {
        const CurrentCard = MainMenuBackButton.parentElement.parentElement.classList;

        if(Body.classList.contains(TutorialBg)) {
            backgroundChange(TutorialBg, MainMenuBg)
        } if (Body.classList.contains(DeveloperBg)) {
            backgroundChange(DeveloperBg, MainMenuBg)
        }

        sectionChange(CurrentCard, MainMenu)
    })
}


// Progress bar animation 
 const LoadingGameAnimation = () => {
    let startPercent = 0;

    if (startPercent === 0) {

        startPercent = 1;
        let width = 1;
        let id = setInterval(() => {
            if (width >= 100) {

                // If reach 100%
                clearInterval(id);
                startPercent = 0;

            } else {
                width++;
                LoadingProgressBar.style.width = width + "%";
                LoadingProgressBar.innerHTML = width + "%";
            }
        }, 500); // 500 normal
    }
}


// Typing animation effect
const TypewriteAnimation = (playerName) => {
    
    // Settings for animation
    let waitToStartAnimation = 3;
    let i = 0;
    const txt = `Zuhogott az eső, mint ha csak dézsából öntenék. Ez volt az a nap 1984 egyik reménytelenül pocsék délutánján, amikor a 24 éves egyetemista ${playerName} elhatározta, hogy nagyobb beleszólást szeretne az életébe és az őt körülvevő világ dolgaiba. Ezzel a nappal kezdődőtt meg térhódítása a politika-média-tőke bűvős háromszögében...`; /* The text */
    const speed = 10; /* The speed/duration of the effect in milliseconds. Base is 100 */

    setTimeout(() => {

        const typeWriter = () => {
            if (i < txt.length) {
                LoadingTextDiv.innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            } else {

                // Add start button 
                StartGameButton.classList.toggle("d-none");
            }
          }

          const result = typeWriter();
          return result;

    }, waitToStartAnimation * 1000)
}


// Create checking animation 
const CheckInput = (warningDiv) => {
    warningDiv.classList.toggle("danger");

    setTimeout(() => {
        warningDiv.classList.toggle("danger");
    }, 1000)
}


// Start game 
MainMenuStartGameBtn.addEventListener("click", () => {

    const radioButtons = document.querySelectorAll('input[name="characterRadio"]');
    let playerName = PlayerNameInput.value;
    let selectedCharacter;
    
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedCharacter = radioButton.value;
            break;
        }
    };

    // Check player name input 
    if (!playerName) {
        CheckInput(PlayerNameInput)
        return;
    }

    // Check avatar selected
    if (!selectedCharacter) {
        CheckInput(CharacterRow)
        return;
    }
    
    // Set active typewrite effect and add player name to loading text
    console.log("Választott név: " + playerName);
    console.log("Választott karakter: " + selectedCharacter);
    TypewriteAnimation(playerName);

    // Change card 
    sectionChange(MainMenuStart, MainMenuGameLoad.classList);

    // Background image 
    backgroundChange(MainMenuBg, LoadBg);

})


// Change Game display
StartGameButton.addEventListener("click", () => {

    // Change background
    backgroundChange(LoadBg, GameBg);

    // Change layout
    SectionMenu.classList.add("d-none")
    SectionGame.classList.remove("d-none")

    // Change sections
    sectionChange(MainMenuGameLoad, MainStatistics)
});


// -------------------------------------------------------- // 
// -------------------- Game Section  --------------------- //
// -------------------------------------------------------- //






// Initialize application
Init();


