import {Home} from './home';
import {Menu} from './menu.js';
import {Booking} from './booking'

const tabs = {Home, Menu, Booking};
const content = document.getElementById('content');

const initializeBrowser = (() => {
  const header = document.createElement('header');
  header.innerHTML = 
  /*html*/`
    <ul class="tabs">
      <li class="tab"><button value = "Home">Home</button></li>
      <li class="tab"><button value = "Menu">Menu</button></li>
      <li class="tab"><button value = "Booking">Booking</button></li>
    </ul>
  `

  content.appendChild(header);
  const main = document.createElement('main');
  main.innerHTML =
  /*html*/`
    BLAH BLAH BLAH
  `
  content.appendChild(main);

  const swapTab = (tab) => {
    main.innerHTML = tabs[tab];
  };

  const buttons = [...header.querySelectorAll('button')];
  buttons.forEach(element => {
    element.addEventListener('click', function(){
      swapTab(element.value)
    });
  });

  buttons[0].click();


})()