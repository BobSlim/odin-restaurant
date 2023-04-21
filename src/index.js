import {Home} from './home';
import {Menu} from './menu.js';
import {Booking} from './booking'

const tabs = {Home, Menu, Booking};
const content = document.getElementById('content');

const initializeBrowser = (() => {
  const nav = document.createElement('nav');
  nav.innerHTML = 
  /*html*/`
    <ul class="tabs">
      <li><button value = "Home">Home</button></li>
      <li><button value = "Menu">Menu</button></li>
      <li><button value = "Booking">Booking</button></li>
    </ul>
  `

  content.appendChild(nav);
  const main = document.createElement('main');
  main.innerHTML =
  /*html*/`
    BLAH BLAH BLAH
  `
  content.appendChild(main);

  const swapTab = (button) => {
    main.removeChild(main.lastChild);
		main.appendChild(tabs[button.value]);
    button.setAttribute('disabled', 'true');
  };

  const buttons = [...nav.querySelectorAll('button')];
  buttons.forEach(element => {
    element.addEventListener('click', function(){
      buttons.forEach(element => {
        element.disabled = false;
      });
      element.disabled = true;
      swapTab(element)
    });
  });

  buttons[0].click();


})()