import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "./components/navbar";
import "./components/hero";
import "./components/about";
import "./components/fitur";
import "./components/testimonial";
import "./components/qna";
import "./components/getstarted";
import "./components/footer";
import "./components/selectmenu";
import "./components/list-aksara";
import "./components/diagnose-predict";
import App from "./views/app";

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('.nav-list'),
    content: document.querySelector('#main-content'),
    nav: document.querySelector('#navigation>li>a'),
    body: document.querySelector("body"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", () => {
    app.renderPage();
});