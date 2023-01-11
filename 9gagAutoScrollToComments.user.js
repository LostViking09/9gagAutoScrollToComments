// ==UserScript==
// @name         9gagAutoScrollToComments
// @namespace    https://github.com/LostViking09/9gagAutoScrollToComments/
// @version      0.2
// @updateURL    https://github.com/LostViking09/9gagAutoScrollToComments/raw/main/9gagAutoScrollToComments.user.js
// @downloadURL  https://github.com/LostViking09/9gagAutoScrollToComments/raw/main/9gagAutoScrollToComments.user.js
// @description  Automagically shows you the comment section, instead of the new *related* one
// @author       LostViking09
// @match        https://9gag.com/gag/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9gag.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var currentURL = window.location.href;

    if (!currentURL.includes("#comment")){
        location.assign(currentURL + "#comment");
        }
})();
