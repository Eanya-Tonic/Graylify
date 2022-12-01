// ==UserScript==
// @name            灰色化全部网页
// @name:en         Graylify
// @version         1.0
// @description     纪念|默哀|灰色化所有网页
// @description:en  make every website gray
// @match           *
// @include         *
// @author          3anya T0n1c
// @grant           none
// @license         MIT
// @namespace       https://github.com/Eanya-Tonic/Graylify
// ==/UserScript==

(function() {
    'use strict';

    var body = document.getElementsByTagName("body");
    body[0].style.cssText = "filter: grayscale(0) blur(0px) contrast(1) saturate(0.1) !important";
})();
