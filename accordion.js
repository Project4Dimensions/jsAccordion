/* validated with JSLint edition 2017-04-10 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsAccordion: an algorithm to show or hide content
 * see https://github.com/Project4Dimensions/jsAccordion
 */

function jsAccordion(parent) {
    "use strict";
    var a = document.getElementById(parent);
    if (a.className.indexOf("show") === -1) {
        a.className += " show";
    } else {
        a.className = a.className.replace(" show", "");
    }
}
