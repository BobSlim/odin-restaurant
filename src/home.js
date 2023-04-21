export {Home}

const Home = document.createElement("body")

Home.innerHTML = /*html*/`
  <p>Welcome to \${Restaurant Name}</p>
  <p>We serve foods such as:
  <ul>
    <li>'Dolor in cillum quis in dolore ea culpa veniam est velit exercitation fugiat.'</li>
    <li>'Ut amet tempor anim ipsum adipisicing in.'</li>
    <li>??food not found??</li>
  </ul>
  </p>
`;