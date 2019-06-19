/**
 * May 15, 2019
 * @description LiteWeb routing scripts
 * @since 1.0 
 * @copyright MIT License
 * @file: liteweb.js
 * @version 1.0
 * @author Robin Alex Panicker
**/

/** IMPORTANT: NEED TO DEPLOY THE SITE IN A WEBSERVER TO GET ROUTING WORKING **/

// current version
const v = (new URLSearchParams (document.currentScript.src.split('?')[1])).get('v');

// default page (home page) _home.html
const d = "home";

const g = function(f) {$.get('_'+f+'.html?v='+v, function(c){$('page').html(c)})}

const l = function(f) {
    let p = window.location.hash;
    g((p === null || p.length <= 1) ? d : p.substring(1, p.length)); 
}

const r = function(){l()};

// load home page
$(document).ready(r);

// routing based on hash change
$(window).on('hashchange',r);