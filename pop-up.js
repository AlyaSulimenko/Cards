const allButtons = document.querySelectorAll(".item-cards__button"); //all buttons "More"
const allCrosses = document.querySelectorAll(".pop-up__close"); //All closing crosses on pop-up windowsbody.style.paddingRight = '0px';

if (allButtons.length > 0) {
  allButtons.forEach((button, index) => {
    const actualButton = allButtons[index];
    actualButton.addEventListener("click", (event) => {
      event.preventDefault;
      const popupName = button.getAttribute("href").replace("#", "");
      const actualPopup = document.getElementById(popupName);
      openPopup(actualPopup); //for every button we found href  and match it it with id of pop-up window, then openPopup for this window
    });
  });
}
const openPopup = (popupToOpen) => {
  if (popupToOpen) {
    popupToOpen.classList.add("opened");
    popupToOpen.addEventListener("click", (event) => {
      if (!event.target.closest(".pop-up__content")) {
        closePopup(event.target.closest(".pop-up"));
      } //while clicking on pop-up window not inside content div - the whole pop-up window will close
    });
  }
};

if (allCrosses.length > 0) {
  allCrosses.forEach((cross, index) => {
    const actualCross = allCrosses[index];
    actualCross.addEventListener("click", (event) => {
      event.preventDefault;
      closePopup(actualCross.closest(".pop-up")); //for every cross we add closePopup f on click for nearest parent  with class pop-up, which is whole first div
    });
  });
}

const closePopup = (popupToClose) => {
  popupToClose.classList.remove("opened");
};

document.addEventListener("keydown", (event) => {
  if (event.key === 27) {
    const activePopup = document.querySelector(".pop-up.opened");
    closePopup(activePopup);
  }
}); // closing pop-up on ESC
