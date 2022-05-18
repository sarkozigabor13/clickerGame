// Base display variables 
const IndustryMoneyDisplay = document.querySelector("#display-money-industry");
const IndustryIncomeDisplay = document.querySelector("#display-income-industry");
const IndustryAutoIncomeDisplay = document.querySelector("#display-auto-income-industry");

const MediaMoneyDisplay = document.querySelector("#display-money-media");
const MediaIncomeDisplay = document.querySelector("#display-income-media");
const MediaAutoIncomeDisplay = document.querySelector("#display-auto-income-media");
const MediaInfluenceDisplay = document.querySelector("#display-influence-media");

const PoliticsMoneyDisplay = document.querySelector("#display-money-politics");
const PoliticsIncomeDisplay = document.querySelector("#display-income-politics");
const PoliticsAutoIncomeDisplay = document.querySelector("#display-auto-income-politics");
const PoliticsInfluenceDisplay = document.querySelector("#display-influence-politics");

// Base button variables 
const IndustryBtn = document.querySelector("#button-industry");
const MediaBtn = document.querySelector("#button-media");
const PoliticsBtn = document.querySelector("#button-politics");

// Base media item variables 
const IndustryItemButtons = document.querySelectorAll(".industry-item-button")
const IndustryItem01Btn = document.querySelector("#industry-item-01")
const IndustryItem02Btn = document.querySelector("#industry-item-02")
const IndustryItem03Btn = document.querySelector("#industry-item-03")
const IndustryItem04Btn = document.querySelector("#industry-item-04")
const IndustryItem05Btn = document.querySelector("#industry-item-05")

const MediaItemButtons = document.querySelectorAll(".media-item-button")
const MediaItem01Btn = document.querySelector("#media-item-01")
const MediaItem02Btn = document.querySelector("#media-item-02")
const MediaItem03Btn = document.querySelector("#media-item-03")
const MediaItem04Btn = document.querySelector("#media-item-04")

const PoliticsItemButtons = document.querySelectorAll(".politics-item-button")
const PoliticsItem01Btn = document.querySelector("#politics-item-01")

// Init variables
let rate, multiplier;

// Media variables
let mediaMoney, mediaIncome, mediaAutoIncome;

// Base Settings
const Settings = {

  industry: {
    autoRefresh: false,
  },

  media: {
    autoRefresh: false,
  },

  politics: {
    autoRefresh: false,
  }
}

// Base Data
const Data = {

  rate: 1,
  multiplier: 2,

  industry: {
    industryMoney: 0,
    industryIncome: 1,
    industryAutoIncome: 0,
    industryItems: {
      item01: [10,   IndustryItem01Btn],
      item02: [100,  IndustryItem02Btn],
      item03: [300,  IndustryItem03Btn],
      item04: [500,  IndustryItem04Btn],
      item05: [1000, IndustryItem05Btn],
    }
  },

  media: {
      mediaMoney: 0,
      mediaIncome: 1,
      mediaAutoIncome: 0,
      mediaInfluence: 0,
      mediaItems: {
          item01: [10,  MediaItem01Btn],
          item02: [100, MediaItem02Btn],
          item03: [300, MediaItem03Btn],
          item04: [500, MediaItem04Btn],
      }
  },

  politics: {
      politicsMoney: 0,
      politicsIncome: 1,
      politicsAutoIncome: 0,
      politicsInfluence: 0,
      politicsItems: {
        item01: [10,  PoliticsItem01Btn],
    }
  }
}


// Data Module
const DataModule = (() => { 

    // Industry item purchase - Subtract item price from money and increase item price
    const IndustryItemPurchase = (item) => {
      Data.industry.industryMoney -= item[0];
      item[0] = item[0] * Data.multiplier;
    }

    // Media item purchase - Subtract item price from money and increase item price
    const MediaItemPurchase = (item) => {
      Data.media.mediaMoney -= item[0];
      item[0] = item[0] * Data.multiplier;
    }

    // Politics item purchase - Subtract item price from money and increase item price
    const PoliticsItemPurchase = (item) => {
      Data.politics.politicsMoney -= item[0];
      item[0] = item[0] * Data.multiplier;
    }

    // Public methods
    return {

        // Industry methods
        IndustryDataFunctions: {

          // Generate income by click - This click give 1 money
          generateIncomeClick: () => {
            Data.industry.industryMoney += (Data.rate * Data.industry.industryIncome)
          },

          industryItemsFunctions: {

            // Industry item 01 - This item increase income per click by 1
            industryItem01Click: (item) => {
              // Item effects
              Data.industry.industryIncome++;
              // Item purchase
              IndustryItemPurchase(Data.industry.industryItems[item])
            },

            // Industry item 02 - This item increase income per click by 2
            industryItem02Click: (item) => {
              // Item effects
              Data.industry.industryIncome = Data.industry.industryIncome + 2;
              // Item purchase
              IndustryItemPurchase(Data.industry.industryItems[item])
            },

            // Industry item 03 - This item increase income per click by 3
            industryItem03Click: (item) => {
              // Item effects
              Data.industry.industryIncome = Data.industry.industryIncome + 3;
              // Item purchase
              IndustryItemPurchase(Data.industry.industryItems[item])
            },

            // Industry item 04 - This item increase income per sec by 1
            industryItem04Click: (item) => {
              // Item effects
              Settings.industry.autoRefresh = true;
              Data.industry.industryAutoIncome++;

              setInterval(() => {
                Data.industry.industryMoney++;
              }, 1000);
              // Item purchase
              IndustryItemPurchase(Data.industry.industryItems[item])
            },

            // Industry item 05 - This item increase income per sec by 1
            industryItem05Click: (item) => {
              // Item effects
              Settings.industry.autoRefresh = true;
              Data.industry.industryAutoIncome = Data.industry.industryAutoIncome + 10;

              setInterval(() => {
                Data.industry.industryMoney = Data.industry.industryMoney + 10;
              }, 1000);
              // Item purchase
              IndustryItemPurchase(Data.industry.industryItems[item])
            },
          }
          
        },

        // Media methods
        MediaDataFunctions:{

            // Generate income by click - This click give 1 money
            generateIncomeClick: () => {
                Data.media.mediaMoney += (Data.rate * Data.media.mediaIncome)
            },

            mediaItemsFunctions: {

              // Media item 01 - This item increase income per click by 1
              mediaItem01Click: (item) => {
                // Item effects
                Data.media.mediaIncome++;
                // Item purchase
                MediaItemPurchase(Data.media.mediaItems[item])
              },

              // Media item 02 - This item increase income per click by 2
              mediaItem02Click: (item) => {
                // Item effects
                Data.media.mediaIncome = Data.media.mediaIncome + 2;
                // Item purchase
                MediaItemPurchase(Data.media.mediaItems[item])
              },

              // Media item 03 - This item increase income per click by 3
              mediaItem03Click: (item) => {
                // Item effects
                Data.media.mediaIncome = Data.media.mediaIncome + 3;
                // Item purchase
                MediaItemPurchase(Data.media.mediaItems[item])
              },

              // Media item 04 - This item increase income per sec by 1
              mediaItem04Click: (item) => {
                // Item effects
                Settings.media.autoRefresh = true;
                Data.media.mediaAutoIncome++;
                setInterval(() => {
                  Data.media.mediaMoney++;
                }, 1000);
                // Item purchase
                MediaItemPurchase(Data.media.mediaItems[item])
              },
            },
        },

        // Politics methods
        PoliticsDataFunctions: {

          // Generate income by click - This click give 1 money
          generateIncomeClick: () => {
            Data.politics.politicsMoney += (Data.rate * Data.politics.politicsIncome)
          },

          politicsItemsFunctions: {

             // Politics item 01 - This item increase income per click by 1
             politicsItem01Click: (item) => {
              // Item effects
              Data.politics.politicsIncome++;
              // Item purchase
              PoliticsItemPurchase(Data.politics.politicsItems[item])
            },
          },
        },


        // Initialize Data
        init: {
          industry: {
            industryMoney: Data.industry.industryMoney,
            industryIncome: Data.industry.industryIncome,
            industryAutoIncome: Data.industry.industryAutoIncome,
          },
          media: {
              mediaMoney: Data.media.mediaMoney,
              mediaIncome: Data.media.mediaIncome,
              mediaAutoIncome: Data.media.mediaAutoIncome,
              mediaInfluence: Data.media.mediaInfluence,
          },
          politics: {
            politicsMoney: Data.politics.politicsMoney,
            politicsIncome: Data.politics.politicsIncome,
            politicsAutoIncome: Data.politics.politicsAutoIncome,
            politicsInfluence: Data.politics.politicsInfluence,
          }
        },
    }
})();  


// UI Module
const UIModule = (() => { 

      // Formatting numbers 
      const numberFormat = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

    // Public methods
    return {

        // Initialize Industry UI
        initIndustry: () => {
            IndustryMoneyDisplay.innerHTML = `${DataModule.init.industry.industryMoney} Ft`;
            IndustryIncomeDisplay.innerHTML = `Bevétel: ${DataModule.init.industry.industryIncome} Ft / klikk`;
            IndustryAutoIncomeDisplay.innerHTML = `Auto bevétel: ${DataModule.init.industry.industryAutoIncome}  Ft / sec`;

            // Items
            IndustryItemButtons.forEach( (element, index) => {
              let value = Object.values(Data.industry.industryItems)[index][0];
              element.innerHTML = `${numberFormat(value)} Ft`
            });
        },

        // Initialize Media UI
        initMedia: () => {
            MediaMoneyDisplay.innerHTML = `${DataModule.init.media.mediaMoney} Ft`;
            MediaIncomeDisplay.innerHTML = `Bevétel: ${DataModule.init.media.mediaIncome} Ft / klikk`;
            MediaAutoIncomeDisplay.innerHTML = `Auto bevétel: ${DataModule.init.media.mediaAutoIncome}  Ft / sec`;
            MediaInfluenceDisplay.innerHTML = `Elérés: ${DataModule.init.media.mediaInfluence} fő`;

            // Items
            MediaItemButtons.forEach( (element, index) => {
              let value = Object.values(Data.media.mediaItems)[index][0];
              element.innerHTML = `${numberFormat(value)} Ft`
            });
        },

        // Initialize Politics UI
        initPolitics: () => {
            PoliticsMoneyDisplay.innerHTML = `${DataModule.init.politics.politicsMoney} Ft`;
            PoliticsIncomeDisplay.innerHTML = `Bevétel: ${DataModule.init.politics.politicsIncome} Ft / klikk`;
            PoliticsAutoIncomeDisplay.innerHTML = `Auto bevétel: ${DataModule.init.politics.politicsAutoIncome}  Ft / sec`;
            PoliticsInfluenceDisplay.innerHTML = `Befolyás: ${DataModule.init.politics.politicsInfluence} fő`;

            // Items
            PoliticsItemButtons.forEach( (element, index) => {
              let value = Object.values(Data.politics.politicsItems)[index][0];
              element.innerHTML = `${numberFormat(value)} Ft`
            });
        },

        // Animation 
        MoneyAnimation:  (XPosition, YPosition) => {      
          let animation;

          animation = document.createElement("span");
          animation.classList.add('click-animation')
          animation.style.left = XPosition - 15 + "px";
          animation.style.top = YPosition - 15 + "px";
          animation.classList.add('active')
          animation.innerHTML = (Data.media.mediaIncome + " Ft");

          // Add animation
          Body.appendChild(animation)

          // Remove animation
          setTimeout(() => {
              animation.remove();
          }, 1000)
        },

        // ----------------- Industry ----------------- //

        // Refresh industry UI
        industryMoneyUI: () => {
          IndustryMoneyDisplay.innerHTML = `${numberFormat(Data.industry.industryMoney)} Ft`;
        },

        // Refresh industry income UI
        industryIncomeUI: () => {
          IndustryIncomeDisplay.innerHTML = `Bevétel: ${numberFormat(Data.industry.industryIncome)} Ft / klikk`;
        },

        // Refresh industry auto income UI
        industryAutoIncomeUI: () => {
          IndustryAutoIncomeDisplay.innerHTML = `Auto bevétel: ${numberFormat(Data.industry.industryAutoIncome)} Ft / sec`;
        },

        // Check item price UI loop
        checkIndustryItemPriceUILoop: () => {
          for (const array in Data.industry.industryItems) {
            let item, itemPrice, itemBtn;

            item = Data.industry.industryItems[array]
            itemPrice = item[0];
            itemBtn = item[1];

            // Check items available
            if (Data.industry.industryMoney >= itemPrice) {
              itemBtn.removeAttribute("disabled")
            } else {
              itemBtn.setAttribute("disabled", "")
            }
          }
        },

        // Refresh item price UI
        industryItemPriceUI: (itemButton, item) => {
          itemButton.innerHTML = `${numberFormat(Data.industry.industryItems[item][0])} Ft`;
        },

        //UI display refresh 
        industryDisplayRefresh: () => {

          // Industry income
          UIModule.industryIncomeUI();
          // Industry auto income
          UIModule.industryAutoIncomeUI();
          // Industry Money
          UIModule.industryMoneyUI();
          // Check items available
          UIModule.checkIndustryItemPriceUILoop()

          if (Settings.industry.autoRefresh) {
            setInterval(() => {
              // Industry income
              UIModule.industryIncomeUI();
              // Industry auto income
              UIModule.industryAutoIncomeUI();
              // Industry Money
              UIModule.industryMoneyUI();
              // Check items available
              UIModule.checkIndustryItemPriceUILoop()
            }, 1000);
          }
        },


        // ------------------ Media ------------------ //

        // Refresh media UI
        mediaMoneyUI: () => {
            MediaMoneyDisplay.innerHTML = `${numberFormat(Data.media.mediaMoney)} Ft`;
        },

        // Refresh media income UI
        mediaIncomeUI: () => {
            MediaIncomeDisplay.innerHTML = `Bevétel: ${numberFormat(Data.media.mediaIncome)} Ft / klikk`;
        },

        // Refresh media auto income UI
        mediaAutoIncomeUI: () => {
            MediaAutoIncomeDisplay.innerHTML = `Auto bevétel: ${numberFormat(Data.media.mediaAutoIncome)} Ft / sec`;
        },

        // Check item price UI loop
        checkItemPriceUILoop: () => {
          for (const array in Data.media.mediaItems) {
            let item, itemPrice, itemBtn;

            item = Data.media.mediaItems[array]
            itemPrice = item[0];
            itemBtn = item[1];

            // Check items available
            if (Data.media.mediaMoney >= itemPrice) {
              itemBtn.removeAttribute("disabled")
            } else {
              itemBtn.setAttribute("disabled", "")
            }
          }
        },

        // Refresh item price UI
        mediaItemPriceUI: (itemButton, item) => {
          itemButton.innerHTML = `${numberFormat(Data.media.mediaItems[item][0])} Ft`;
        },

        //UI display refresh 
        displayRefresh: () => {

          // Media income
          UIModule.mediaIncomeUI();
          // Media auto income
          UIModule.mediaAutoIncomeUI();
          // Media Money
          UIModule.mediaMoneyUI();
          // Check items available
          UIModule.checkItemPriceUILoop()

          if (Settings.media.autoRefresh) {
            setInterval(() => {
              // Media income
              UIModule.mediaIncomeUI();
              // Media auto income
              UIModule.mediaAutoIncomeUI();
              // Media Money
              UIModule.mediaMoneyUI();
              // Check items available
              UIModule.checkItemPriceUILoop()
            }, 1000);
          }
        },


        // ------------------ Politics ------------------ //

        // Refresh politics UI
        politicsMoneyUI: () => {
          PoliticsMoneyDisplay.innerHTML = `${numberFormat(Data.politics.politicsMoney)} Ft`;
        },

        // Refresh politics income UI
        politicsIncomeUI: () => {
          PoliticsIncomeDisplay.innerHTML = `Bevétel: ${numberFormat(Data.politics.politicsIncome)} Ft / klikk`;
        },

        // Refresh politics auto income UI
        politicsAutoIncomeUI: () => {
          PoliticsAutoIncomeDisplay.innerHTML = `Auto bevétel: ${numberFormat(Data.politics.politicsAutoIncome)} Ft / sec`;
        },

        // Check item price UI loop
        checkPoliticsItemPriceUILoop: () => {
          for (const array in Data.politics.politicsItems) {
            let item, itemPrice, itemBtn;

            item = Data.politics.politicsItems[array]
            itemPrice = item[0];
            itemBtn = item[1];

            // Check items available
            if (Data.politics.politicsMoney >= itemPrice) {
              itemBtn.removeAttribute("disabled")
            } else {
              itemBtn.setAttribute("disabled", "")
            }
          }
        },

        // Refresh item price UI
        politicsItemPriceUI: (itemButton, item) => {
          itemButton.innerHTML = `${numberFormat(Data.politics.politicsItems[item][0])} Ft`;
        },

        //UI display refresh 
        politicsDisplayRefresh: () => {

          // Politics income
          UIModule.politicsIncomeUI();
          // Politics auto income
          UIModule.politicsAutoIncomeUI();
          // Politics Money
          UIModule.politicsMoneyUI();
          // Check items available
          UIModule.checkPoliticsItemPriceUILoop()

          if (Settings.politics.autoRefresh) {
            setInterval(() => {
              // Politics income
              UIModule.politicsIncomeUI();
              // Politics auto income
              UIModule.politicsAutoIncomeUI();
              // Politics Money
              UIModule.politicsMoneyUI();
              // Check items available
              UIModule.checkPoliticsItemPriceUILoop()
            }, 1000);
          }
        },

    }
})();




// Control Module
const ControlModule = ((DataMod, UIMod) => { 

    // ----------------- Industry ----------------- //

    // Industry button click
    IndustryBtn.addEventListener('click', (e) => {

      // Track mouse position for animation      
      let XPosition = e.pageX;
      let YPosition = e.pageY;

      // Generate money
      DataMod.IndustryDataFunctions.generateIncomeClick();
      UIMod.industryMoneyUI();

      // Check items available
      UIMod.checkIndustryItemPriceUILoop();

      // Add animation
      UIMod.MoneyAnimation(XPosition, YPosition);
    })

    // Industry item button click
    for (const [index, button] of IndustryItemButtons.entries()) {
      button.addEventListener('click', () => {

        const item = Object.keys(Data.industry.industryItems)[index];
        const itemNum = item.slice(-2);
        const functionName = `industryItem${itemNum}Click`;

        // Increase income
        DataMod.IndustryDataFunctions.industryItemsFunctions[functionName](item)
        
        // UI refresh
        UIMod.industryDisplayRefresh();
        UIMod.industryItemPriceUI(button, item);
      })
    }


    // ------------------ Media ------------------ //

    // Media button click
    MediaBtn.addEventListener('click', (e) => {

        // Track mouse position for animation      
        let XPosition = e.pageX;
        let YPosition = e.pageY;

        // Generate money
        DataMod.MediaDataFunctions.generateIncomeClick();
        UIMod.mediaMoneyUI();

        // Check items available
        UIMod.checkItemPriceUILoop();

        // Add animation
        UIMod.MoneyAnimation(XPosition, YPosition);
    })

    // Media item button click
    for (const [index, button] of MediaItemButtons.entries()) {
      button.addEventListener('click', () => {

        const item = Object.keys(Data.media.mediaItems)[index];
        const itemNum = item.slice(-2);
        const functionName = `mediaItem${itemNum}Click`;

        // Increase income
        DataMod.MediaDataFunctions.mediaItemsFunctions[functionName](item)
        
        // UI refresh
        UIMod.displayRefresh();
        UIMod.mediaItemPriceUI(button, item);
      })
    }


    // ------------------ Politics ------------------ //

    // Politics button click
    PoliticsBtn.addEventListener('click', (e) => {

        // Track mouse position for animation      
        let XPosition = e.pageX;
        let YPosition = e.pageY;

        // Generate money
        DataMod.PoliticsDataFunctions.generateIncomeClick();
        UIMod.politicsMoneyUI();

        // Check items available
        UIMod.checkPoliticsItemPriceUILoop(); 

        // Add animation
        UIMod.MoneyAnimation(XPosition, YPosition);
    })

    // Politics item button click
    for (const [index, button] of PoliticsItemButtons.entries()) {
      button.addEventListener('click', () => {

        const item = Object.keys(Data.politics.politicsItems)[index];
        const itemNum = item.slice(-2);
        const functionName = `politicsItem${itemNum}Click`;

        // Increase income
        DataMod.PoliticsDataFunctions.politicsItemsFunctions[functionName](item)
        
        // UI refresh
        UIMod.politicsDisplayRefresh();
        UIMod.politicsItemPriceUI(button, item);
      })
    }


    // Public methods
    return {
        init: () => {
          
            // Initialize UI
            UIMod.initIndustry();
            UIMod.initMedia();
            UIMod.initPolitics();
        }
    }

})(DataModule, UIModule);


// Initialize application
ControlModule.init();




const rect = document.querySelectorAll("rect")
const svg = document.querySelector(".hu-map")

svg.addEventListener('click', () => {

  for (let i = 0; i < rect.length; i++) {
    x = Math.floor(Math.random() * rect.length) + 1;
    if (rect[x].style.fill === "red") {
      console.log("Volt már...");
    } else {
      rect[x].style.fill = "red"; 
    }
  }
})
