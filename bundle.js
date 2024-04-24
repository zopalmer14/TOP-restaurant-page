/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! tab_modules/media/pigs/cute_pig.jpg */ "./src/tab_modules/media/pigs/cute_pig.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! tab_modules/media/rustic_bar.jpg */ "./src/tab_modules/media/rustic_bar.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* CSS Style Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Variable Declaration */

:root {
    --tan-accent: #f3cba5;
    --dark-accent: #25161b;
}

/* Base Styling */

body, button {
    font-size: 16px;
    font-family: Garamond, sans-serif;
    color: inherit;
}

body {
    display: flex;

    max-width: 100vw;
    min-height: 100vh;

    color: var(--dark-accent);
    line-height: 1.5;
}

/* Header / Nav Styling */

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    max-width: 300px;
    background-color: var(--tan-accent);
    padding: 1.5rem;
}

header h1 {
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
}

header .logo-container {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center center; 

    width: 300px;
    height: 300px;
    border-radius: 50%;
}

header nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

header nav button {
    font-size: 1.25rem;
    font-weight: 600;

    padding-top: 0.5rem;
    background-color: var(--tan-accent);
    border: none;
    border-bottom: 1px solid transparent;
    transition: 0.25s ease-in-out;
}

header nav button.active {
    border-bottom: 1px solid var(--dark-accent);
}

header nav button:hover {
    border-bottom: 1px solid var(--dark-accent);
    transform: translateY(-2px);
}

/* Content Styling */

#content {
    position: relative;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center center; 

    color: var(--dark-accent);
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#content .image-citation {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
}

#content .image-citation, #content .image-citation a {
    color: white;
    font-size: 0.75rem;
    text-wrap: nowrap;
}

#content .home-info, #content .about-info {
    max-width: 800px;
    color: white;
}

/* Homepage Styling */

#content .home-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: rgba(37, 22, 27, 0.6);
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
    padding: 2rem;

    font-size: 1.25rem;
    text-align: center;
}

#content .home-info img {
    width: 250px;
    height: 250px; 
    border-radius: 50%;

    object-fit: cover;
    object-position: 50% 45%;
}

/* Menu Styling */

#content .menu-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;

    padding: 6rem;
    color: white;
    align-self: stretch;
}

#content .menu-info .menu-item {
    padding: 1.5rem;
    background-color: rgba(37, 22, 27, 0.9);
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
}

#content .menu-info .menu-item .img-container {
    float: left;
    padding-right: 1rem;
    border-radius: 8px;
}

#content .menu-info .menu-item .img-container img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
}

#content .menu-info .menu-item .img-container img#moscow-mule {
    object-position: center 40%;
}

#content .menu-info .menu-item .img-container img#espresso-martini {
    object-position: center 0%;
}

#content .menu-info .menu-item h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

/* About / Contact Styling */

#content .about-info {
    position: relative;
    background-color: rgba(37, 22, 27, 0.6);
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
    margin-right: 2rem;
    padding: 1rem;
}

#content .about-info .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    white-space: pre-line;
    margin-bottom: 1rem;
}

#content .about-info .contact-info h2 {
    font-size: 1.25rem;
}

#content .about-info .contact-info ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

#content .about-info .contact-info ul li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

#content .about-info .contact-info ul li:first-child {
    margin-bottom: 0.5rem;
}

#content .about-info .button-container {
    display: flex;
    gap: 1rem;
}

#content .about-info .button-container > button {
    background-color: rgba(37, 22, 27, 0.6);
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
    padding: 1rem 2rem;
    transition: 0.5s ease-in-out;
}

#content .about-info .button-container > button:hover {
    background-color: var(--dark-accent);
    cursor: pointer;
}

#content .about-info .about-img {
    position: relative;
    background-color: rgba(37, 22, 27, 0.6);
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
    padding: 1rem;
}

#content .about-info .about-img#bbq-restaurant {
    float: right;
    top: -5rem;
    right: -3rem;

    margin-left: -2rem;
}

#content .about-info .about-img#portland-sign {
    position: absolute;
    bottom: -5.5rem;
    right: -1rem;
}

#content .about-info .about-img#portland-sign img{
    width: 225px;
    height: 175px;
}

#content .about-info .about-img#stoic-pig {
    margin-right: 1rem;
    background: none;
    border: none;
    padding: 0;

    float: left;
    top: 0;
    left: 0;
}

#content .about-info .about-img img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
}

/* Media Queries */

/* Large Laptop */ 

@media (max-width: 1400px) {
    #content .menu-info {
        padding: 3rem;
    }
}

/* Large Laptop */

@media (max-width: 1150px) {
    body {
        flex-direction: column;
    }

    header {
        flex-direction: row;
        max-width: none;
        padding: 1rem 1.5rem;
    }

    header h1 {
        font-size: 1.75rem;
        margin-right: auto;
    }

    header .logo-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        order: 1;
    }

    header nav ul {
        flex-direction: row;
        gap: 1rem;
    }

    header nav button {
        font-size: 1rem;
    }

    #content .home-info {
        padding: 1rem;
        font-size: 1rem;
    }
}

/* Tablet */

@media (max-width: 800px) {
    header {
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.5rem;
    }

    header h1 {
        margin: 0;
    }

    header .logo-container {
        display: none;
    }

    header nav button {
        font-size: 0.75rem;
        font-weight: normal;
    }

    #content .menu-info {
        padding: 2rem 1rem;
    }

    #content .about-info {
        margin: 0;
        padding: 0.5rem;
    }

    #content .about-info .contact-info {
        gap: 0.5rem;
    }

    #content .about-info .contact-info h2 {
        font-size: 1rem;
    }

    #content .about-info .contact-info ul {
        font-size: 0.75rem;
    }

    #content .about-info .button-container > button {
        padding: 0.75rem 1.5rem;
        font-size: 0.75rem;
    }

    #content .about-info .contact-info ul li span.material-icons {
        font-size: 18px;
    }

    #content .about-info .about-img#stoic-pig {
        margin-right: 0.5rem;
    }

    #content .about-info .about-img#stoic-pig img {
        width: 125px;
        height: 125px;
    }

    #content .about-info .about-img#bbq-restaurant, #content .about-info .about-img#portland-sign {
        display: none;
    }
}

/* Mobile */ 

@media (max-width: 600px) {
    #content .home-info {
        padding: 1rem;
        border-radius: 0;
    }

    #content .home-info img {
        width: 250px;
        height: 250px; 
    }

    #content .menu-info .menu-item {
        padding: 0.75rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n/* CSS Style Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Variable Declaration */\n\n:root {\n    --tan-accent: #f3cba5;\n    --dark-accent: #25161b;\n}\n\n/* Base Styling */\n\nbody, button {\n    font-size: 16px;\n    font-family: Garamond, sans-serif;\n    color: inherit;\n}\n\nbody {\n    display: flex;\n\n    max-width: 100vw;\n    min-height: 100vh;\n\n    color: var(--dark-accent);\n    line-height: 1.5;\n}\n\n/* Header / Nav Styling */\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n\n    max-width: 300px;\n    background-color: var(--tan-accent);\n    padding: 1.5rem;\n}\n\nheader h1 {\n    font-weight: bold;\n    font-size: 3rem;\n    text-align: center;\n}\n\nheader .logo-container {\n    background: url(tab_modules/media/pigs/cute_pig.jpg);\n    background-size: cover;\n    background-position: center center; \n\n    width: 300px;\n    height: 300px;\n    border-radius: 50%;\n}\n\nheader nav ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n}\n\nheader nav button {\n    font-size: 1.25rem;\n    font-weight: 600;\n\n    padding-top: 0.5rem;\n    background-color: var(--tan-accent);\n    border: none;\n    border-bottom: 1px solid transparent;\n    transition: 0.25s ease-in-out;\n}\n\nheader nav button.active {\n    border-bottom: 1px solid var(--dark-accent);\n}\n\nheader nav button:hover {\n    border-bottom: 1px solid var(--dark-accent);\n    transform: translateY(-2px);\n}\n\n/* Content Styling */\n\n#content {\n    position: relative;\n    background: url(tab_modules/media/rustic_bar.jpg);\n    background-size: cover;\n    background-position: center center; \n\n    color: var(--dark-accent);\n    flex: 1 1 0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#content .image-citation {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, 0);\n}\n\n#content .image-citation, #content .image-citation a {\n    color: white;\n    font-size: 0.75rem;\n    text-wrap: nowrap;\n}\n\n#content .home-info, #content .about-info {\n    max-width: 800px;\n    color: white;\n}\n\n/* Homepage Styling */\n\n#content .home-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n\n    background-color: rgba(37, 22, 27, 0.6);\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n    padding: 2rem;\n\n    font-size: 1.25rem;\n    text-align: center;\n}\n\n#content .home-info img {\n    width: 250px;\n    height: 250px; \n    border-radius: 50%;\n\n    object-fit: cover;\n    object-position: 50% 45%;\n}\n\n/* Menu Styling */\n\n#content .menu-info {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    column-gap: 2rem;\n    row-gap: 2.5rem;\n\n    padding: 6rem;\n    color: white;\n    align-self: stretch;\n}\n\n#content .menu-info .menu-item {\n    padding: 1.5rem;\n    background-color: rgba(37, 22, 27, 0.9);\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n}\n\n#content .menu-info .menu-item .img-container {\n    float: left;\n    padding-right: 1rem;\n    border-radius: 8px;\n}\n\n#content .menu-info .menu-item .img-container img {\n    display: block;\n    width: 150px;\n    height: 150px;\n    border-radius: 8px;\n    object-fit: cover;\n}\n\n#content .menu-info .menu-item .img-container img#moscow-mule {\n    object-position: center 40%;\n}\n\n#content .menu-info .menu-item .img-container img#espresso-martini {\n    object-position: center 0%;\n}\n\n#content .menu-info .menu-item h2 {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n/* About / Contact Styling */\n\n#content .about-info {\n    position: relative;\n    background-color: rgba(37, 22, 27, 0.6);\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n    margin-right: 2rem;\n    padding: 1rem;\n}\n\n#content .about-info .contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    white-space: pre-line;\n    margin-bottom: 1rem;\n}\n\n#content .about-info .contact-info h2 {\n    font-size: 1.25rem;\n}\n\n#content .about-info .contact-info ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n#content .about-info .contact-info ul li {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n}\n\n#content .about-info .contact-info ul li:first-child {\n    margin-bottom: 0.5rem;\n}\n\n#content .about-info .button-container {\n    display: flex;\n    gap: 1rem;\n}\n\n#content .about-info .button-container > button {\n    background-color: rgba(37, 22, 27, 0.6);\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n    padding: 1rem 2rem;\n    transition: 0.5s ease-in-out;\n}\n\n#content .about-info .button-container > button:hover {\n    background-color: var(--dark-accent);\n    cursor: pointer;\n}\n\n#content .about-info .about-img {\n    position: relative;\n    background-color: rgba(37, 22, 27, 0.6);\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n    padding: 1rem;\n}\n\n#content .about-info .about-img#bbq-restaurant {\n    float: right;\n    top: -5rem;\n    right: -3rem;\n\n    margin-left: -2rem;\n}\n\n#content .about-info .about-img#portland-sign {\n    position: absolute;\n    bottom: -5.5rem;\n    right: -1rem;\n}\n\n#content .about-info .about-img#portland-sign img{\n    width: 225px;\n    height: 175px;\n}\n\n#content .about-info .about-img#stoic-pig {\n    margin-right: 1rem;\n    background: none;\n    border: none;\n    padding: 0;\n\n    float: left;\n    top: 0;\n    left: 0;\n}\n\n#content .about-info .about-img img {\n    display: block;\n    width: 150px;\n    height: 150px;\n    border-radius: 8px;\n    object-fit: cover;\n}\n\n/* Media Queries */\n\n/* Large Laptop */ \n\n@media (max-width: 1400px) {\n    #content .menu-info {\n        padding: 3rem;\n    }\n}\n\n/* Large Laptop */\n\n@media (max-width: 1150px) {\n    body {\n        flex-direction: column;\n    }\n\n    header {\n        flex-direction: row;\n        max-width: none;\n        padding: 1rem 1.5rem;\n    }\n\n    header h1 {\n        font-size: 1.75rem;\n        margin-right: auto;\n    }\n\n    header .logo-container {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        order: 1;\n    }\n\n    header nav ul {\n        flex-direction: row;\n        gap: 1rem;\n    }\n\n    header nav button {\n        font-size: 1rem;\n    }\n\n    #content .home-info {\n        padding: 1rem;\n        font-size: 1rem;\n    }\n}\n\n/* Tablet */\n\n@media (max-width: 800px) {\n    header {\n        flex-direction: column;\n        gap: 0.25rem;\n        padding: 0.5rem;\n    }\n\n    header h1 {\n        margin: 0;\n    }\n\n    header .logo-container {\n        display: none;\n    }\n\n    header nav button {\n        font-size: 0.75rem;\n        font-weight: normal;\n    }\n\n    #content .menu-info {\n        padding: 2rem 1rem;\n    }\n\n    #content .about-info {\n        margin: 0;\n        padding: 0.5rem;\n    }\n\n    #content .about-info .contact-info {\n        gap: 0.5rem;\n    }\n\n    #content .about-info .contact-info h2 {\n        font-size: 1rem;\n    }\n\n    #content .about-info .contact-info ul {\n        font-size: 0.75rem;\n    }\n\n    #content .about-info .button-container > button {\n        padding: 0.75rem 1.5rem;\n        font-size: 0.75rem;\n    }\n\n    #content .about-info .contact-info ul li span.material-icons {\n        font-size: 18px;\n    }\n\n    #content .about-info .about-img#stoic-pig {\n        margin-right: 0.5rem;\n    }\n\n    #content .about-info .about-img#stoic-pig img {\n        width: 125px;\n        height: 125px;\n    }\n\n    #content .about-info .about-img#bbq-restaurant, #content .about-info .about-img#portland-sign {\n        display: none;\n    }\n}\n\n/* Mobile */ \n\n@media (max-width: 600px) {\n    #content .home-info {\n        padding: 1rem;\n        border-radius: 0;\n    }\n\n    #content .home-info img {\n        width: 250px;\n        height: 250px; \n    }\n\n    #content .menu-info .menu-item {\n        padding: 0.75rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/tab_modules/about.js":
/*!**********************************!*\
  !*** ./src/tab_modules/about.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _media_portland_sign_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/portland-sign.jpg */ "./src/tab_modules/media/portland-sign.jpg");
/* harmony import */ var _media_bbq_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/bbq_restaurant.jpg */ "./src/tab_modules/media/bbq_restaurant.jpg");
/* harmony import */ var _media_pigs_stoic_pig_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/pigs/stoic_pig.jpg */ "./src/tab_modules/media/pigs/stoic_pig.jpg");

// import in some cool pictures




const coolImages = [_media_portland_sign_jpg__WEBPACK_IMPORTED_MODULE_0__, _media_bbq_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__, _media_pigs_stoic_pig_jpg__WEBPACK_IMPORTED_MODULE_2__];
const imgIds = ['portland-sign', 'bbq-restaurant', 'stoic-pig'];

// create DOM representations for the pictures
const DOM_images = [];
for (let i = 0; i < coolImages.length; i+=1) {
    // create a cool image to place adjacent to the info
    const img_container = document.createElement('div');
    img_container.classList.add('about-img');
    img_container.id = imgIds[i];

    const about_img = new Image();
    about_img.src = coolImages[i];

    img_container.appendChild(about_img);
    DOM_images.push(img_container);
} 

function loadAbout() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the about info
    const about_container = document.createElement('div');
    about_container.classList.add('about-info');

    // create a div to hold the contact info
    const contact_info = document.createElement('div');
    contact_info.classList.add('contact-info');

    // create a header for the contact info
    const contact_header = document.createElement('h2');
    contact_header.textContent = 'Find us at the our original location:';

    // create a list of contact info
    const contact_list = document.createElement('ul');

    // fake address
    const address = document.createElement('li');

    const address_logo = document.createElement('span');
    address_logo.textContent = 'home';
    address_logo.classList.add('material-icons');

    address.appendChild(address_logo);
    address.appendChild(document.createTextNode('3106 SE Hawthorne Blvd\r\nPortland, Oregon, 97214'));

    // phone number: THE-PIG-FARM
    const phone = document.createElement('li');

    const phone_logo = document.createElement('span');
    phone_logo.textContent = 'phone';
    phone_logo.classList.add('material-icons');

    phone.appendChild(phone_logo);
    phone.appendChild(document.createTextNode('843-744-3276'));

    // email
    const email = document.createElement('li');

    const email_logo = document.createElement('span');
    email_logo.textContent = 'email';
    email_logo.classList.add('material-icons');

    email.appendChild(email_logo);
    email.appendChild(document.createTextNode('thedrunkenpig@gmail.com'));

    contact_list.appendChild(address);
    contact_list.appendChild(phone);
    contact_list.appendChild(email);

    // append the header and list to the contact info section
    contact_info.appendChild(contact_header);
    contact_info.appendChild(contact_list);

    // create a div to hold the 'contact us' buttons
    const button_container = document.createElement('div');
    button_container.classList.add('button-container');

    // create 'contact us' and 'make reservation' buttons
    const contact_button = document.createElement('button');
    contact_button.classList.add('contact-button');
    contact_button.textContent = 'Contact Us';

    const reservation_button = document.createElement('button');
    reservation_button.classList.add('contact-button');
    reservation_button.textContent = 'Make Reservation';

    button_container.appendChild(contact_button);
    button_container.appendChild(reservation_button);

    // append all of the content to the about container:
    // - portland_sign
    // - contact info
    // - bbq_restaurant
    // - button container
    // - stoic_pig
    about_container.appendChild(DOM_images[0]);
    about_container.appendChild(DOM_images[1]);
    about_container.appendChild(DOM_images[2]);
    about_container.appendChild(contact_info);
    about_container.appendChild(button_container);

    // replace the content with the about container
    page_content.replaceChildren(about_container);
}



/***/ }),

/***/ "./src/tab_modules/homepage.js":
/*!*************************************!*\
  !*** ./src/tab_modules/homepage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _media_drinks_manhattan_cocktail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/drinks/manhattan_cocktail.jpg */ "./src/tab_modules/media/drinks/manhattan_cocktail.jpg");

// import in cool drink image


function loadHome() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to test
    const home_container = document.createElement('div');
    home_container.classList.add('home-info');

    // first text section
    const restaurant_intro = document.createElement('div');
    restaurant_intro.textContent = `
        Best cafe / cantina / restaurant east of the Columbia!
        Founded in Portland all the way back in 1926!
    `;

    // cool image 
    const cool_img = new Image();
    cool_img.src = _media_drinks_manhattan_cocktail_jpg__WEBPACK_IMPORTED_MODULE_0__;

    // second text section
    const restaurant_aside = document.createElement('div');
    restaurant_aside.textContent = `
        Order online or come visit us at our original
        location in SE Hawthorne! 
    `;

    // append all to container
    home_container.appendChild(restaurant_intro);
    home_container.appendChild(cool_img);
    home_container.appendChild(restaurant_aside);

    page_content.replaceChildren(home_container);
}



/***/ }),

/***/ "./src/tab_modules/menu.js":
/*!*********************************!*\
  !*** ./src/tab_modules/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _media_food_brisket_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/food/brisket.jpg */ "./src/tab_modules/media/food/brisket.jpg");
/* harmony import */ var _media_food_kebab_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/food/kebab.jpg */ "./src/tab_modules/media/food/kebab.jpg");
/* harmony import */ var _media_food_ribs_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/food/ribs.jpg */ "./src/tab_modules/media/food/ribs.jpg");
/* harmony import */ var _media_food_tacos_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/food/tacos.jpg */ "./src/tab_modules/media/food/tacos.jpg");

// import in food images





// food data
const foodImages = [_media_food_brisket_jpg__WEBPACK_IMPORTED_MODULE_0__, _media_food_kebab_jpg__WEBPACK_IMPORTED_MODULE_1__, _media_food_ribs_jpg__WEBPACK_IMPORTED_MODULE_2__, _media_food_tacos_jpg__WEBPACK_IMPORTED_MODULE_3__];
const foodHeaders = ['Prime Brisket', 'Chicken Kebab Plate', 'BBQ Pork Ribs', 'Pulled Pork Tacos'];
const foodDesc = [
    '1/3 lb Prime aged beef, hand sliced with our original sauce, brown beans, coleslaw, and cornbread',
    'Marinated, seasoned chicken served with fries, tomatoes, and bell peppers',
    'Duroc St. Louis ribs, dry rubbed and slow smoked, lightly glazed with our original BBQ sauce',
    'Pulled pork topped with Sriracha coleslaw'
];

function loadMenu() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the menu items in a grid format / structure
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-info');

    for (let i = 0; i < foodImages.length; i++) {
        // create a div to represent each individual menu item
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        // create the contents - the item name / title, a desc, and an image
        const item_container = document.createElement('div');
        item_container.classList.add('item-container');

        const item_title = document.createElement('h2');
        item_title.textContent = foodHeaders[i];

        const item_desc = document.createElement('div');
        item_desc.classList.add('item-desc');
        item_desc.textContent = foodDesc[i];

        // create a container for the image and append the image to it
        const img_container = document.createElement('div');
        img_container.classList.add('img-container');

        const item_img = new Image();
        item_img.src = foodImages[i];

        img_container.appendChild(item_img);

        menu_item.appendChild(img_container);
        menu_item.appendChild(item_title);
        menu_item.appendChild(item_desc);

        // append the menu_item to the container
        menu_container.appendChild(menu_item);
    }

    page_content.replaceChildren(menu_container);
}



/***/ }),

/***/ "./src/tab_modules/taplist.js":
/*!************************************!*\
  !*** ./src/tab_modules/taplist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTapList: () => (/* binding */ loadTapList)
/* harmony export */ });
/* harmony import */ var _media_drinks_manhattan_cocktail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/drinks/manhattan_cocktail.jpg */ "./src/tab_modules/media/drinks/manhattan_cocktail.jpg");
/* harmony import */ var _media_drinks_espresso_martini_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/drinks/espresso_martini.jpg */ "./src/tab_modules/media/drinks/espresso_martini.jpg");
/* harmony import */ var _media_drinks_moscow_mule_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/drinks/moscow_mule.jpg */ "./src/tab_modules/media/drinks/moscow_mule.jpg");
/* harmony import */ var _media_drinks_aperol_spritz_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/drinks/aperol_spritz.jpg */ "./src/tab_modules/media/drinks/aperol_spritz.jpg");


// import in cocktail images





// food data
const drinkImages = [_media_drinks_manhattan_cocktail_jpg__WEBPACK_IMPORTED_MODULE_0__, _media_drinks_espresso_martini_jpg__WEBPACK_IMPORTED_MODULE_1__, _media_drinks_moscow_mule_jpg__WEBPACK_IMPORTED_MODULE_2__, _media_drinks_aperol_spritz_jpg__WEBPACK_IMPORTED_MODULE_3__];
const drinkHeaders = ['Manhattan', 'Espresso Martini', 'Moscow Mule', 'Aperol Spritz'];
const drinkDesc = [
    'Classic cocktail made with bourbon, sweet vermouth, and aromatic bitters',
    'Espresso, vanilla vodka, and coffee liqueur',
    'Zesty cocktail with vodka, ginger beer, and a squeeze of lime in a copper mug',
    'Aperol, prosecco, soda, garnished with a slice of orange'
];

function loadTapList() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the menu items in a grid format / structure
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-info');

    for (let i = 0; i < drinkImages.length; i++) {
        // create a div to represent each individual menu item
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        // create a container for the image and append the image to it
        const img_container = document.createElement('div');
        img_container.classList.add('img-container');

        const item_img = new Image();
        item_img.src = drinkImages[i];

        if (i == 0) {
            item_img.id = 'moscow-mule';
        }

        if (i == 1) {
            item_img.id = 'espresso-martini';
        }

        img_container.appendChild(item_img);

        // create the contents - item name / title, a desc, and an image
        const item_title = document.createElement('h2');
        item_title.textContent = drinkHeaders[i];

        const item_desc = document.createElement('div');
        item_desc.classList.add('item-desc');
        item_desc.textContent = drinkDesc[i];

        // append the contents to the menu_item
        menu_item.appendChild(img_container);
        menu_item.appendChild(item_title);
        menu_item.appendChild(item_desc);

        // append the menu_item to the container
        menu_container.appendChild(menu_item);
    }

    page_content.replaceChildren(menu_container);
}



/***/ }),

/***/ "./src/tab_modules/media/bbq_restaurant.jpg":
/*!**************************************************!*\
  !*** ./src/tab_modules/media/bbq_restaurant.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e5edd986d4d1aba56b6.jpg";

/***/ }),

/***/ "./src/tab_modules/media/drinks/aperol_spritz.jpg":
/*!********************************************************!*\
  !*** ./src/tab_modules/media/drinks/aperol_spritz.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df4b38bbcd67f5fc199d.jpg";

/***/ }),

/***/ "./src/tab_modules/media/drinks/espresso_martini.jpg":
/*!***********************************************************!*\
  !*** ./src/tab_modules/media/drinks/espresso_martini.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a81fc851220d454c57cd.jpg";

/***/ }),

/***/ "./src/tab_modules/media/drinks/manhattan_cocktail.jpg":
/*!*************************************************************!*\
  !*** ./src/tab_modules/media/drinks/manhattan_cocktail.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aff6539807d0641e98d5.jpg";

/***/ }),

/***/ "./src/tab_modules/media/drinks/moscow_mule.jpg":
/*!******************************************************!*\
  !*** ./src/tab_modules/media/drinks/moscow_mule.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00575e0579e6e7920000.jpg";

/***/ }),

/***/ "./src/tab_modules/media/food/brisket.jpg":
/*!************************************************!*\
  !*** ./src/tab_modules/media/food/brisket.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8e934522b9ba061eb83.jpg";

/***/ }),

/***/ "./src/tab_modules/media/food/kebab.jpg":
/*!**********************************************!*\
  !*** ./src/tab_modules/media/food/kebab.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90f44849dc9ee162a5fd.jpg";

/***/ }),

/***/ "./src/tab_modules/media/food/ribs.jpg":
/*!*********************************************!*\
  !*** ./src/tab_modules/media/food/ribs.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0d04819cd742c12bff2.jpg";

/***/ }),

/***/ "./src/tab_modules/media/food/tacos.jpg":
/*!**********************************************!*\
  !*** ./src/tab_modules/media/food/tacos.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6d95b2b3695442c9b40.jpg";

/***/ }),

/***/ "./src/tab_modules/media/pigs/cute_pig.jpg":
/*!*************************************************!*\
  !*** ./src/tab_modules/media/pigs/cute_pig.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2b99c6cb29b26ec21fa.jpg";

/***/ }),

/***/ "./src/tab_modules/media/pigs/stoic_pig.jpg":
/*!**************************************************!*\
  !*** ./src/tab_modules/media/pigs/stoic_pig.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a36e9fd0a4b62f3bceeb.jpg";

/***/ }),

/***/ "./src/tab_modules/media/portland-sign.jpg":
/*!*************************************************!*\
  !*** ./src/tab_modules/media/portland-sign.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c96670d94ec11bdd96b.jpg";

/***/ }),

/***/ "./src/tab_modules/media/rustic_bar.jpg":
/*!**********************************************!*\
  !*** ./src/tab_modules/media/rustic_bar.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63dc82e7d076a950a60f.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tab_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_modules/homepage.js */ "./src/tab_modules/homepage.js");
/* harmony import */ var _tab_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab_modules/menu.js */ "./src/tab_modules/menu.js");
/* harmony import */ var _tab_modules_taplist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab_modules/taplist.js */ "./src/tab_modules/taplist.js");
/* harmony import */ var _tab_modules_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab_modules/about.js */ "./src/tab_modules/about.js");

// import in CSS styling


// import in tab content modules





// DOM references
const content = document.querySelector('#content');
const image_citation = document.querySelector('.image-citation');

// adds the image citation to the bottom of the content section
function addCitation() {
    content.appendChild(image_citation);
}

function setupNav() {
    // dom references
    const home_button = document.querySelector('#home-button');
    const menu_button = document.querySelector('#menu-button');
    const taplist_button = document.querySelector('#taplist-button');
    const about_button = document.querySelector('#about-button');

    // load the home 'tab' content when it is clicked and toggle the active tab
    home_button.addEventListener('click', (event) => {
        (0,_tab_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the menu 'tab' content when it is clicked
    menu_button.addEventListener('click', (event) => {
        (0,_tab_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the taplist 'tab' content when it is clicked
    taplist_button.addEventListener('click', (event) => {
        (0,_tab_modules_taplist_js__WEBPACK_IMPORTED_MODULE_3__.loadTapList)();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the about 'tab' content when it is clicked
    about_button.addEventListener('click', (event) => {
        (0,_tab_modules_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)();
        addCitation();
        toggleActive(event.currentTarget);
    });
}

function toggleActive(button) {
    // grab the currently active button and toggle the 'active' class
    const active_button = document.querySelector('.active');
    active_button.classList.toggle('active');

    // add 'active' to the button's classList
    button.classList.add('active');
}

function initializePage() {
    // setup the nav buttons to facilitate tabbed browsing
    setupNav();

    // load the home 'tab' by default
    (0,_tab_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
    addCitation();
}

initializePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUpBQXNEO0FBQ2xHLDRDQUE0QywrSUFBbUQ7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RUFBNEUsYUFBYSxRQUFRLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUs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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDcUI7O0FBRXJCO0FBQ3FEO0FBQ0o7QUFDTTtBQUNKOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGtFQUFRO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLDhEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLG9FQUFXO0FBQ25CO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLGdFQUFTO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksa0VBQVE7QUFDWjtBQUNBOztBQUVBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYl9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiX21vZHVsZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJfbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiX21vZHVsZXMvdGFwbGlzdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInRhYl9tb2R1bGVzL21lZGlhL3BpZ3MvY3V0ZV9waWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwidGFiX21vZHVsZXMvbWVkaWEvcnVzdGljX2Jhci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi8qIENTUyBTdHlsZSBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogVmFyaWFibGUgRGVjbGFyYXRpb24gKi9cblxuOnJvb3Qge1xuICAgIC0tdGFuLWFjY2VudDogI2YzY2JhNTtcbiAgICAtLWRhcmstYWNjZW50OiAjMjUxNjFiO1xufVxuXG4vKiBCYXNlIFN0eWxpbmcgKi9cblxuYm9keSwgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogSGVhZGVyIC8gTmF2IFN0eWxpbmcgKi9cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG5cbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi1hY2NlbnQpO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oZWFkZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBcblxuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaGVhZGVyIG5hdiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuXG5oZWFkZXIgbmF2IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi1hY2NlbnQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmhlYWRlciBuYXYgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTtcbn1cblxuaGVhZGVyIG5hdiBidXR0b246aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4vKiBDb250ZW50IFN0eWxpbmcgKi9cblxuI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBcblxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgZmxleDogMSAxIDA7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQgLmltYWdlLWNpdGF0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuI2NvbnRlbnQgLmltYWdlLWNpdGF0aW9uLCAjY29udGVudCAuaW1hZ2UtY2l0YXRpb24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cblxuI2NvbnRlbnQgLmhvbWUtaW5mbywgI2NvbnRlbnQgLmFib3V0LWluZm8ge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBIb21lcGFnZSBTdHlsaW5nICovXG5cbiNjb250ZW50IC5ob21lLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIyLCAyNywgMC42KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudCAuaG9tZS1pbmZvIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDQ1JTtcbn1cblxuLyogTWVudSBTdHlsaW5nICovXG5cbiNjb250ZW50IC5tZW51LWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgY29sdW1uLWdhcDogMnJlbTtcbiAgICByb3ctZ2FwOiAyLjVyZW07XG5cbiAgICBwYWRkaW5nOiA2cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4jY29udGVudCAubWVudS1pbmZvIC5tZW51LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMiwgMjcsIDAuOSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIC5pbWctY29udGFpbmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIC5pbWctY29udGFpbmVyIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jY29udGVudCAubWVudS1pbmZvIC5tZW51LWl0ZW0gLmltZy1jb250YWluZXIgaW1nI21vc2Nvdy1tdWxlIHtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciA0MCU7XG59XG5cbiNjb250ZW50IC5tZW51LWluZm8gLm1lbnUtaXRlbSAuaW1nLWNvbnRhaW5lciBpbWcjZXNwcmVzc28tbWFydGluaSB7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMCU7XG59XG5cbiNjb250ZW50IC5tZW51LWluZm8gLm1lbnUtaXRlbSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4vKiBBYm91dCAvIENvbnRhY3QgU3R5bGluZyAqL1xuXG4jY29udGVudCAuYWJvdXQtaW5mbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIyLCAyNywgMC42KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4jY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmNvbnRhY3QtaW5mbyB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC4yNXJlbTtcbn1cblxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmNvbnRhY3QtaW5mbyB1bCBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4yNXJlbTtcbn1cblxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmNvbnRhY3QtaW5mbyB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5idXR0b24tY29udGFpbmVyID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMiwgMjcsIDAuNik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmJ1dHRvbi1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMiwgMjcsIDAuNik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI2JicS1yZXN0YXVyYW50IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiAtNXJlbTtcbiAgICByaWdodDogLTNyZW07XG5cbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjcG9ydGxhbmQtc2lnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTUuNXJlbTtcbiAgICByaWdodDogLTFyZW07XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjcG9ydGxhbmQtc2lnbiBpbWd7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG59XG5cbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjc3RvaWMtcGlnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzICovXG5cbi8qIExhcmdlIExhcHRvcCAqLyBcblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgICNjb250ZW50IC5tZW51LWluZm8ge1xuICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgIH1cbn1cblxuLyogTGFyZ2UgTGFwdG9wICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIH1cblxuICAgIGhlYWRlciBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIGhlYWRlciAubG9nby1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgIGhlYWRlciBuYXYgdWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgfVxuXG4gICAgaGVhZGVyIG5hdiBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLmhvbWUtaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuMjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG5cbiAgICBoZWFkZXIgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaGVhZGVyIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIG5hdiBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLm1lbnUtaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICB9XG5cbiAgICAjY29udGVudCAuYWJvdXQtaW5mbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgIH1cblxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8ge1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAjY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gdWwge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLmFib3V0LWluZm8gLmJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cblxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gdWwgbGkgc3Bhbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAjY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI3N0b2ljLXBpZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIH1cblxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjc3RvaWMtcGlnIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICB9XG5cbiAgICAjY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI2JicS1yZXN0YXVyYW50LCAjY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI3BvcnRsYW5kLXNpZ24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyogTW9iaWxlICovIFxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjY29udGVudCAuaG9tZS1pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAjY29udGVudCAuaG9tZS1pbmZvIGltZyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDsgXG4gICAgfVxuXG4gICAgI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSxvQkFBb0I7O0FBRXBCOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbURBQW9EO0lBQ3BELHNCQUFzQjtJQUN0QixrQ0FBa0M7O0lBRWxDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ks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UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLyogQ1NTIFN0eWxlIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBWYXJpYWJsZSBEZWNsYXJhdGlvbiAqL1xcblxcbjpyb290IHtcXG4gICAgLS10YW4tYWNjZW50OiAjZjNjYmE1O1xcbiAgICAtLWRhcmstYWNjZW50OiAjMjUxNjFiO1xcbn1cXG5cXG4vKiBCYXNlIFN0eWxpbmcgKi9cXG5cXG5ib2R5LCBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBHYXJhbW9uZCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogSGVhZGVyIC8gTmF2IFN0eWxpbmcgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcblxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tYWNjZW50KTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubG9nby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwodGFiX21vZHVsZXMvbWVkaWEvcGlncy9jdXRlX3BpZy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyBcXG5cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmhlYWRlciBuYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tYWNjZW50KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbi5hY3RpdmUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsaW5nICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHVybCh0YWJfbW9kdWxlcy9tZWRpYS9ydXN0aWNfYmFyLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IFxcblxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBmbGV4OiAxIDEgMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IC5pbWFnZS1jaXRhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbn1cXG5cXG4jY29udGVudCAuaW1hZ2UtY2l0YXRpb24sICNjb250ZW50IC5pbWFnZS1jaXRhdGlvbiBhIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1pbmZvLCAjY29udGVudCAuYWJvdXQtaW5mbyB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogSG9tZXBhZ2UgU3R5bGluZyAqL1xcblxcbiNjb250ZW50IC5ob21lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIyLCAyNywgMC42KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1pbmZvIGltZyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDQ1JTtcXG59XFxuXFxuLyogTWVudSBTdHlsaW5nICovXFxuXFxuI2NvbnRlbnQgLm1lbnUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgICByb3ctZ2FwOiAyLjVyZW07XFxuXFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMiwgMjcsIDAuOSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jY29udGVudCAubWVudS1pbmZvIC5tZW51LWl0ZW0gLmltZy1jb250YWluZXIge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jY29udGVudCAubWVudS1pbmZvIC5tZW51LWl0ZW0gLmltZy1jb250YWluZXIgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIC5pbWctY29udGFpbmVyIGltZyNtb3Njb3ctbXVsZSB7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDQwJTtcXG59XFxuXFxuI2NvbnRlbnQgLm1lbnUtaW5mbyAubWVudS1pdGVtIC5pbWctY29udGFpbmVyIGltZyNlc3ByZXNzby1tYXJ0aW5pIHtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgMCU7XFxufVxcblxcbiNjb250ZW50IC5tZW51LWluZm8gLm1lbnUtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIEFib3V0IC8gQ29udGFjdCBTdHlsaW5nICovXFxuXFxuI2NvbnRlbnQgLmFib3V0LWluZm8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIyLCAyNywgMC42KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmNvbnRhY3QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIHVsIGxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIHVsIGxpOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmFib3V0LWluZm8gLmJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAyMiwgMjcsIDAuNik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNjb250ZW50IC5hYm91dC1pbmZvIC5idXR0b24tY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDIyLCAyNywgMC42KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjYmJxLXJlc3RhdXJhbnQge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHRvcDogLTVyZW07XFxuICAgIHJpZ2h0OiAtM3JlbTtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI3BvcnRsYW5kLXNpZ24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTUuNXJlbTtcXG4gICAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG4jY29udGVudCAuYWJvdXQtaW5mbyAuYWJvdXQtaW1nI3BvcnRsYW5kLXNpZ24gaW1ne1xcbiAgICB3aWR0aDogMjI1cHg7XFxuICAgIGhlaWdodDogMTc1cHg7XFxufVxcblxcbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcjc3RvaWMtcGlnIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbiNjb250ZW50IC5hYm91dC1pbmZvIC5hYm91dC1pbWcgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcblxcbi8qIExhcmdlIExhcHRvcCAqLyBcXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICAgICNjb250ZW50IC5tZW51LWluZm8ge1xcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBMYXJnZSBMYXB0b3AgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBuYXYgdWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmhvbWUtaW5mbyB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMC4yNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaDEge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciAubG9nby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5tZW51LWluZm8ge1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY29udGVudCAuYWJvdXQtaW5mbyAuY29udGFjdC1pbmZvIHtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gdWwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5idXR0b24tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5hYm91dC1pbmZvIC5jb250YWN0LWluZm8gdWwgbGkgc3Bhbi5tYXRlcmlhbC1pY29ucyB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmFib3V0LWluZm8gLmFib3V0LWltZyNzdG9pYy1waWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmFib3V0LWluZm8gLmFib3V0LWltZyNzdG9pYy1waWcgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgIGhlaWdodDogMTI1cHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQgLmFib3V0LWluZm8gLmFib3V0LWltZyNiYnEtcmVzdGF1cmFudCwgI2NvbnRlbnQgLmFib3V0LWluZm8gLmFib3V0LWltZyNwb3J0bGFuZC1zaWduIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyogTW9iaWxlICovIFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAjY29udGVudCAuaG9tZS1pbmZvIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5ob21lLWluZm8gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMjUwcHg7IFxcbiAgICB9XFxuXFxuICAgICNjb250ZW50IC5tZW51LWluZm8gLm1lbnUtaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4vLyBpbXBvcnQgaW4gc29tZSBjb29sIHBpY3R1cmVzXG5pbXBvcnQgUG9ydGxhbmRTaWduIGZyb20gJy4vbWVkaWEvcG9ydGxhbmQtc2lnbi5qcGcnO1xuaW1wb3J0IEJCUVJlc3RhdXJhbnQgZnJvbSAnLi9tZWRpYS9iYnFfcmVzdGF1cmFudC5qcGcnO1xuaW1wb3J0IFN0b2ljUGlnIGZyb20gJy4vbWVkaWEvcGlncy9zdG9pY19waWcuanBnJztcblxuY29uc3QgY29vbEltYWdlcyA9IFtQb3J0bGFuZFNpZ24sIEJCUVJlc3RhdXJhbnQsIFN0b2ljUGlnXTtcbmNvbnN0IGltZ0lkcyA9IFsncG9ydGxhbmQtc2lnbicsICdiYnEtcmVzdGF1cmFudCcsICdzdG9pYy1waWcnXTtcblxuLy8gY3JlYXRlIERPTSByZXByZXNlbnRhdGlvbnMgZm9yIHRoZSBwaWN0dXJlc1xuY29uc3QgRE9NX2ltYWdlcyA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjb29sSW1hZ2VzLmxlbmd0aDsgaSs9MSkge1xuICAgIC8vIGNyZWF0ZSBhIGNvb2wgaW1hZ2UgdG8gcGxhY2UgYWRqYWNlbnQgdG8gdGhlIGluZm9cbiAgICBjb25zdCBpbWdfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1pbWcnKTtcbiAgICBpbWdfY29udGFpbmVyLmlkID0gaW1nSWRzW2ldO1xuXG4gICAgY29uc3QgYWJvdXRfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgYWJvdXRfaW1nLnNyYyA9IGNvb2xJbWFnZXNbaV07XG5cbiAgICBpbWdfY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0X2ltZyk7XG4gICAgRE9NX2ltYWdlcy5wdXNoKGltZ19jb250YWluZXIpO1xufSBcblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIC8vIGRvbSByZWZlcmVuY2VzIFxuICAgIGNvbnN0IHBhZ2VfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICAvLyBjcmVhdGUgZGl2IHRvIGNvbnRhaW4gdGhlIGFib3V0IGluZm9cbiAgICBjb25zdCBhYm91dF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW5mbycpO1xuXG4gICAgLy8gY3JlYXRlIGEgZGl2IHRvIGhvbGQgdGhlIGNvbnRhY3QgaW5mb1xuICAgIGNvbnN0IGNvbnRhY3RfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RfaW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcblxuICAgIC8vIGNyZWF0ZSBhIGhlYWRlciBmb3IgdGhlIGNvbnRhY3QgaW5mb1xuICAgIGNvbnN0IGNvbnRhY3RfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250YWN0X2hlYWRlci50ZXh0Q29udGVudCA9ICdGaW5kIHVzIGF0IHRoZSBvdXIgb3JpZ2luYWwgbG9jYXRpb246JztcblxuICAgIC8vIGNyZWF0ZSBhIGxpc3Qgb2YgY29udGFjdCBpbmZvXG4gICAgY29uc3QgY29udGFjdF9saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIC8vIGZha2UgYWRkcmVzc1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgY29uc3QgYWRkcmVzc19sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZHJlc3NfbG9nby50ZXh0Q29udGVudCA9ICdob21lJztcbiAgICBhZGRyZXNzX2xvZ28uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcblxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc19sb2dvKTtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCczMTA2IFNFIEhhd3Rob3JuZSBCbHZkXFxyXFxuUG9ydGxhbmQsIE9yZWdvbiwgOTcyMTQnKSk7XG5cbiAgICAvLyBwaG9uZSBudW1iZXI6IFRIRS1QSUctRkFSTVxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IHBob25lX2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGhvbmVfbG9nby50ZXh0Q29udGVudCA9ICdwaG9uZSc7XG4gICAgcGhvbmVfbG9nby5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuXG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVfbG9nbyk7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzg0My03NDQtMzI3NicpKTtcblxuICAgIC8vIGVtYWlsXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgY29uc3QgZW1haWxfbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlbWFpbF9sb2dvLnRleHRDb250ZW50ID0gJ2VtYWlsJztcbiAgICBlbWFpbF9sb2dvLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG5cbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbF9sb2dvKTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGhlZHJ1bmtlbnBpZ0BnbWFpbC5jb20nKSk7XG5cbiAgICBjb250YWN0X2xpc3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdF9saXN0LmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBjb250YWN0X2xpc3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgLy8gYXBwZW5kIHRoZSBoZWFkZXIgYW5kIGxpc3QgdG8gdGhlIGNvbnRhY3QgaW5mbyBzZWN0aW9uXG4gICAgY29udGFjdF9pbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RfaGVhZGVyKTtcbiAgICBjb250YWN0X2luZm8uYXBwZW5kQ2hpbGQoY29udGFjdF9saXN0KTtcblxuICAgIC8vIGNyZWF0ZSBhIGRpdiB0byBob2xkIHRoZSAnY29udGFjdCB1cycgYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKTtcblxuICAgIC8vIGNyZWF0ZSAnY29udGFjdCB1cycgYW5kICdtYWtlIHJlc2VydmF0aW9uJyBidXR0b25zXG4gICAgY29uc3QgY29udGFjdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ1dHRvbicpO1xuICAgIGNvbnRhY3RfYnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2YXRpb25fYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9uJyk7XG4gICAgcmVzZXJ2YXRpb25fYnV0dG9uLnRleHRDb250ZW50ID0gJ01ha2UgUmVzZXJ2YXRpb24nO1xuXG4gICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0X2J1dHRvbik7XG4gICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbl9idXR0b24pO1xuXG4gICAgLy8gYXBwZW5kIGFsbCBvZiB0aGUgY29udGVudCB0byB0aGUgYWJvdXQgY29udGFpbmVyOlxuICAgIC8vIC0gcG9ydGxhbmRfc2lnblxuICAgIC8vIC0gY29udGFjdCBpbmZvXG4gICAgLy8gLSBiYnFfcmVzdGF1cmFudFxuICAgIC8vIC0gYnV0dG9uIGNvbnRhaW5lclxuICAgIC8vIC0gc3RvaWNfcGlnXG4gICAgYWJvdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKERPTV9pbWFnZXNbMF0pO1xuICAgIGFib3V0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChET01faW1hZ2VzWzFdKTtcbiAgICBhYm91dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NX2ltYWdlc1syXSk7XG4gICAgYWJvdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RfaW5mbyk7XG4gICAgYWJvdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbl9jb250YWluZXIpO1xuXG4gICAgLy8gcmVwbGFjZSB0aGUgY29udGVudCB3aXRoIHRoZSBhYm91dCBjb250YWluZXJcbiAgICBwYWdlX2NvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGFib3V0X2NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGxvYWRBYm91dCB9OyIsIlxuLy8gaW1wb3J0IGluIGNvb2wgZHJpbmsgaW1hZ2VcbmltcG9ydCBNYW5oYXR0YW5Db2NrdGFpbCBmcm9tICcuL21lZGlhL2RyaW5rcy9tYW5oYXR0YW5fY29ja3RhaWwuanBnJztcblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy8gZG9tIHJlZmVyZW5jZXMgXG4gICAgY29uc3QgcGFnZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIC8vIGNyZWF0ZSBkaXYgdG8gdGVzdFxuICAgIGNvbnN0IGhvbWVfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZV9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbmZvJyk7XG5cbiAgICAvLyBmaXJzdCB0ZXh0IHNlY3Rpb25cbiAgICBjb25zdCByZXN0YXVyYW50X2ludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdGF1cmFudF9pbnRyby50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgQmVzdCBjYWZlIC8gY2FudGluYSAvIHJlc3RhdXJhbnQgZWFzdCBvZiB0aGUgQ29sdW1iaWEhXG4gICAgICAgIEZvdW5kZWQgaW4gUG9ydGxhbmQgYWxsIHRoZSB3YXkgYmFjayBpbiAxOTI2IVxuICAgIGA7XG5cbiAgICAvLyBjb29sIGltYWdlIFxuICAgIGNvbnN0IGNvb2xfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29vbF9pbWcuc3JjID0gTWFuaGF0dGFuQ29ja3RhaWw7XG5cbiAgICAvLyBzZWNvbmQgdGV4dCBzZWN0aW9uXG4gICAgY29uc3QgcmVzdGF1cmFudF9hc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc3RhdXJhbnRfYXNpZGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAgIE9yZGVyIG9ubGluZSBvciBjb21lIHZpc2l0IHVzIGF0IG91ciBvcmlnaW5hbFxuICAgICAgICBsb2NhdGlvbiBpbiBTRSBIYXd0aG9ybmUhIFxuICAgIGA7XG5cbiAgICAvLyBhcHBlbmQgYWxsIHRvIGNvbnRhaW5lclxuICAgIGhvbWVfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRfaW50cm8pO1xuICAgIGhvbWVfY29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2xfaW1nKTtcbiAgICBob21lX2NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50X2FzaWRlKTtcblxuICAgIHBhZ2VfY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oaG9tZV9jb250YWluZXIpO1xufVxuXG5leHBvcnQgeyBsb2FkSG9tZSB9OyIsIlxuLy8gaW1wb3J0IGluIGZvb2QgaW1hZ2VzXG5pbXBvcnQgQnJpc2tldCBmcm9tICcuL21lZGlhL2Zvb2QvYnJpc2tldC5qcGcnO1xuaW1wb3J0IEtlYmFiIGZyb20gJy4vbWVkaWEvZm9vZC9rZWJhYi5qcGcnO1xuaW1wb3J0IFJpYnMgZnJvbSAnLi9tZWRpYS9mb29kL3JpYnMuanBnJztcbmltcG9ydCBUYWNvcyBmcm9tICcuL21lZGlhL2Zvb2QvdGFjb3MuanBnJztcblxuLy8gZm9vZCBkYXRhXG5jb25zdCBmb29kSW1hZ2VzID0gW0JyaXNrZXQsIEtlYmFiLCBSaWJzLCBUYWNvc107XG5jb25zdCBmb29kSGVhZGVycyA9IFsnUHJpbWUgQnJpc2tldCcsICdDaGlja2VuIEtlYmFiIFBsYXRlJywgJ0JCUSBQb3JrIFJpYnMnLCAnUHVsbGVkIFBvcmsgVGFjb3MnXTtcbmNvbnN0IGZvb2REZXNjID0gW1xuICAgICcxLzMgbGIgUHJpbWUgYWdlZCBiZWVmLCBoYW5kIHNsaWNlZCB3aXRoIG91ciBvcmlnaW5hbCBzYXVjZSwgYnJvd24gYmVhbnMsIGNvbGVzbGF3LCBhbmQgY29ybmJyZWFkJyxcbiAgICAnTWFyaW5hdGVkLCBzZWFzb25lZCBjaGlja2VuIHNlcnZlZCB3aXRoIGZyaWVzLCB0b21hdG9lcywgYW5kIGJlbGwgcGVwcGVycycsXG4gICAgJ0R1cm9jIFN0LiBMb3VpcyByaWJzLCBkcnkgcnViYmVkIGFuZCBzbG93IHNtb2tlZCwgbGlnaHRseSBnbGF6ZWQgd2l0aCBvdXIgb3JpZ2luYWwgQkJRIHNhdWNlJyxcbiAgICAnUHVsbGVkIHBvcmsgdG9wcGVkIHdpdGggU3JpcmFjaGEgY29sZXNsYXcnXG5dO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICAvLyBkb20gcmVmZXJlbmNlcyBcbiAgICBjb25zdCBwYWdlX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgLy8gY3JlYXRlIGRpdiB0byBjb250YWluIHRoZSBtZW51IGl0ZW1zIGluIGEgZ3JpZCBmb3JtYXQgLyBzdHJ1Y3R1cmVcbiAgICBjb25zdCBtZW51X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW5mbycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB0byByZXByZXNlbnQgZWFjaCBpbmRpdmlkdWFsIG1lbnUgaXRlbVxuICAgICAgICBjb25zdCBtZW51X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudV9pdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29udGVudHMgLSB0aGUgaXRlbSBuYW1lIC8gdGl0bGUsIGEgZGVzYywgYW5kIGFuIGltYWdlXG4gICAgICAgIGNvbnN0IGl0ZW1fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1fdGl0bGUudGV4dENvbnRlbnQgPSBmb29kSGVhZGVyc1tpXTtcblxuICAgICAgICBjb25zdCBpdGVtX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbV9kZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xuICAgICAgICBpdGVtX2Rlc2MudGV4dENvbnRlbnQgPSBmb29kRGVzY1tpXTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSBpbWFnZSBhbmQgYXBwZW5kIHRoZSBpbWFnZSB0byBpdFxuICAgICAgICBjb25zdCBpbWdfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltZ19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1faW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGl0ZW1faW1nLnNyYyA9IGZvb2RJbWFnZXNbaV07XG5cbiAgICAgICAgaW1nX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtX2ltZyk7XG5cbiAgICAgICAgbWVudV9pdGVtLmFwcGVuZENoaWxkKGltZ19jb250YWluZXIpO1xuICAgICAgICBtZW51X2l0ZW0uYXBwZW5kQ2hpbGQoaXRlbV90aXRsZSk7XG4gICAgICAgIG1lbnVfaXRlbS5hcHBlbmRDaGlsZChpdGVtX2Rlc2MpO1xuXG4gICAgICAgIC8vIGFwcGVuZCB0aGUgbWVudV9pdGVtIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgbWVudV9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudV9pdGVtKTtcbiAgICB9XG5cbiAgICBwYWdlX2NvbnRlbnQucmVwbGFjZUNoaWxkcmVuKG1lbnVfY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgbG9hZE1lbnUgfTsiLCJcblxuLy8gaW1wb3J0IGluIGNvY2t0YWlsIGltYWdlc1xuaW1wb3J0IE1hbmhhdHRhbkNvY2t0YWlsIGZyb20gJy4vbWVkaWEvZHJpbmtzL21hbmhhdHRhbl9jb2NrdGFpbC5qcGcnO1xuaW1wb3J0IEVzcHJlc3NvTWFydGluaSBmcm9tICcuL21lZGlhL2RyaW5rcy9lc3ByZXNzb19tYXJ0aW5pLmpwZyc7XG5pbXBvcnQgTW9zY293TXVsZSBmcm9tICcuL21lZGlhL2RyaW5rcy9tb3Njb3dfbXVsZS5qcGcnO1xuaW1wb3J0IEFwZXJvbFNwcml0eiBmcm9tICcuL21lZGlhL2RyaW5rcy9hcGVyb2xfc3ByaXR6LmpwZyc7XG5cbi8vIGZvb2QgZGF0YVxuY29uc3QgZHJpbmtJbWFnZXMgPSBbTWFuaGF0dGFuQ29ja3RhaWwsIEVzcHJlc3NvTWFydGluaSwgTW9zY293TXVsZSwgQXBlcm9sU3ByaXR6XTtcbmNvbnN0IGRyaW5rSGVhZGVycyA9IFsnTWFuaGF0dGFuJywgJ0VzcHJlc3NvIE1hcnRpbmknLCAnTW9zY293IE11bGUnLCAnQXBlcm9sIFNwcml0eiddO1xuY29uc3QgZHJpbmtEZXNjID0gW1xuICAgICdDbGFzc2ljIGNvY2t0YWlsIG1hZGUgd2l0aCBib3VyYm9uLCBzd2VldCB2ZXJtb3V0aCwgYW5kIGFyb21hdGljIGJpdHRlcnMnLFxuICAgICdFc3ByZXNzbywgdmFuaWxsYSB2b2RrYSwgYW5kIGNvZmZlZSBsaXF1ZXVyJyxcbiAgICAnWmVzdHkgY29ja3RhaWwgd2l0aCB2b2RrYSwgZ2luZ2VyIGJlZXIsIGFuZCBhIHNxdWVlemUgb2YgbGltZSBpbiBhIGNvcHBlciBtdWcnLFxuICAgICdBcGVyb2wsIHByb3NlY2NvLCBzb2RhLCBnYXJuaXNoZWQgd2l0aCBhIHNsaWNlIG9mIG9yYW5nZSdcbl07XG5cbmZ1bmN0aW9uIGxvYWRUYXBMaXN0KCkge1xuICAgIC8vIGRvbSByZWZlcmVuY2VzIFxuICAgIGNvbnN0IHBhZ2VfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICAvLyBjcmVhdGUgZGl2IHRvIGNvbnRhaW4gdGhlIG1lbnUgaXRlbXMgaW4gYSBncmlkIGZvcm1hdCAvIHN0cnVjdHVyZVxuICAgIGNvbnN0IG1lbnVfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudV9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pbmZvJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyaW5rSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB0byByZXByZXNlbnQgZWFjaCBpbmRpdmlkdWFsIG1lbnUgaXRlbVxuICAgICAgICBjb25zdCBtZW51X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudV9pdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIGltYWdlIGFuZCBhcHBlbmQgdGhlIGltYWdlIHRvIGl0XG4gICAgICAgIGNvbnN0IGltZ19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbV9pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaXRlbV9pbWcuc3JjID0gZHJpbmtJbWFnZXNbaV07XG5cbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgaXRlbV9pbWcuaWQgPSAnbW9zY293LW11bGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgaXRlbV9pbWcuaWQgPSAnZXNwcmVzc28tbWFydGluaSc7XG4gICAgICAgIH1cblxuICAgICAgICBpbWdfY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1faW1nKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnRzIC0gaXRlbSBuYW1lIC8gdGl0bGUsIGEgZGVzYywgYW5kIGFuIGltYWdlXG4gICAgICAgIGNvbnN0IGl0ZW1fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpdGVtX3RpdGxlLnRleHRDb250ZW50ID0gZHJpbmtIZWFkZXJzW2ldO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1fZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtX2Rlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgICAgIGl0ZW1fZGVzYy50ZXh0Q29udGVudCA9IGRyaW5rRGVzY1tpXTtcblxuICAgICAgICAvLyBhcHBlbmQgdGhlIGNvbnRlbnRzIHRvIHRoZSBtZW51X2l0ZW1cbiAgICAgICAgbWVudV9pdGVtLmFwcGVuZENoaWxkKGltZ19jb250YWluZXIpO1xuICAgICAgICBtZW51X2l0ZW0uYXBwZW5kQ2hpbGQoaXRlbV90aXRsZSk7XG4gICAgICAgIG1lbnVfaXRlbS5hcHBlbmRDaGlsZChpdGVtX2Rlc2MpO1xuXG4gICAgICAgIC8vIGFwcGVuZCB0aGUgbWVudV9pdGVtIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgbWVudV9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudV9pdGVtKTtcbiAgICB9XG5cbiAgICBwYWdlX2NvbnRlbnQucmVwbGFjZUNoaWxkcmVuKG1lbnVfY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgbG9hZFRhcExpc3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4vLyBpbXBvcnQgaW4gQ1NTIHN0eWxpbmdcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbXBvcnQgaW4gdGFiIGNvbnRlbnQgbW9kdWxlc1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tICcuL3RhYl9tb2R1bGVzL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi90YWJfbW9kdWxlcy9tZW51LmpzJztcbmltcG9ydCB7IGxvYWRUYXBMaXN0IH0gZnJvbSAnLi90YWJfbW9kdWxlcy90YXBsaXN0LmpzJztcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gJy4vdGFiX21vZHVsZXMvYWJvdXQuanMnO1xuXG4vLyBET00gcmVmZXJlbmNlc1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBpbWFnZV9jaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1jaXRhdGlvbicpO1xuXG4vLyBhZGRzIHRoZSBpbWFnZSBjaXRhdGlvbiB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250ZW50IHNlY3Rpb25cbmZ1bmN0aW9uIGFkZENpdGF0aW9uKCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VfY2l0YXRpb24pO1xufVxuXG5mdW5jdGlvbiBzZXR1cE5hdigpIHtcbiAgICAvLyBkb20gcmVmZXJlbmNlc1xuICAgIGNvbnN0IGhvbWVfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKTtcbiAgICBjb25zdCB0YXBsaXN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXBsaXN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1idXR0b24nKTtcblxuICAgIC8vIGxvYWQgdGhlIGhvbWUgJ3RhYicgY29udGVudCB3aGVuIGl0IGlzIGNsaWNrZWQgYW5kIHRvZ2dsZSB0aGUgYWN0aXZlIHRhYlxuICAgIGhvbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgICAgIGFkZENpdGF0aW9uKCk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIC8vIGxvYWQgdGhlIG1lbnUgJ3RhYicgY29udGVudCB3aGVuIGl0IGlzIGNsaWNrZWRcbiAgICBtZW51X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICBhZGRDaXRhdGlvbigpO1xuICAgICAgICB0b2dnbGVBY3RpdmUoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfSk7XG5cbiAgICAvLyBsb2FkIHRoZSB0YXBsaXN0ICd0YWInIGNvbnRlbnQgd2hlbiBpdCBpcyBjbGlja2VkXG4gICAgdGFwbGlzdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbG9hZFRhcExpc3QoKTtcbiAgICAgICAgYWRkQ2l0YXRpb24oKTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH0pO1xuXG4gICAgLy8gbG9hZCB0aGUgYWJvdXQgJ3RhYicgY29udGVudCB3aGVuIGl0IGlzIGNsaWNrZWRcbiAgICBhYm91dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgICAgIGFkZENpdGF0aW9uKCk7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGJ1dHRvbikge1xuICAgIC8vIGdyYWIgdGhlIGN1cnJlbnRseSBhY3RpdmUgYnV0dG9uIGFuZCB0b2dnbGUgdGhlICdhY3RpdmUnIGNsYXNzXG4gICAgY29uc3QgYWN0aXZlX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICBhY3RpdmVfYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXG4gICAgLy8gYWRkICdhY3RpdmUnIHRvIHRoZSBidXR0b24ncyBjbGFzc0xpc3RcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICAgIC8vIHNldHVwIHRoZSBuYXYgYnV0dG9ucyB0byBmYWNpbGl0YXRlIHRhYmJlZCBicm93c2luZ1xuICAgIHNldHVwTmF2KCk7XG5cbiAgICAvLyBsb2FkIHRoZSBob21lICd0YWInIGJ5IGRlZmF1bHRcbiAgICBsb2FkSG9tZSgpO1xuICAgIGFkZENpdGF0aW9uKCk7XG59XG5cbmluaXRpYWxpemVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9