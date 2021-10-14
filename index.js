import { getDatesCards } from "./js/dates.js";
import { createCards } from "./js/createCards.js";
import { createButtons } from "./js/createButtons.js";
import { mount } from "./js/mount.js";;

const datesCard = getDatesCards();

createButtons("addCard", "add card");
createButtons("removeCard", "remove card");
createButtons("clearAll", "clear all");

const max = 5
var cont = 5;
const state={
    quantity: max,
}

datesCard.forEach(item => { 
    const card = createCards(item)
    mount(card)
});

const addCard = document.querySelector("#addCard");
const containerAdd = document.querySelector("container-buttons");
addCard.addEventListener('click', ()=>{
    const addTarget = createCards(datesCard[state.quantity]);
    mount(addTarget);
    state.quantity++;
})

const removeCard = document.querySelector("#removeCard");
removeCard.addEventListener('click', ()=>{
    const removeTarget = document.querySelector(".section-primary");
    removeTarget.removeChild(removeTarget.lastElementChild);
    state.quantity--;
})

const clearAllCard = document.querySelector("#clearAll");
clearAllCard.addEventListener('click', ()=>{
    for (var i = 0; i < 5; i++) {
        const removeTarget = document.querySelector(".section-primary");
        removeTarget.removeChild(removeTarget.lastElementChild);
        state.quantity--;
    }
})