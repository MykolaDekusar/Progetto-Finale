import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createApp } from "vue";
// import main sass
import "./assets/scss/main.scss";
import App from "./App.vue";
// import router
import { router } from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */

library.add(faUserSecret, faSquareFacebook, faSquareTwitter, faSquareInstagram);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

const body = document.querySelector("body");
const btn = document.querySelector(".btn-darkmode");
const icon = document.querySelector(".btn__icon");

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
  localStorage.setItem("darkmode", value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
  const darkmode = localStorage.getItem("darkmode");

  //if the dark mode was never activated
  if (!darkmode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    //if the dark mode is activated
    body.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    //if the dark mode exists but is disabled
    icon.classList.add("fa-sun");
  }
}

load();

btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  icon.classList.add("animated");

  //save true or false
  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
