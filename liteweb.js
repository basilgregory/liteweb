/**
 * May 15, 2019
 * @description LiteWeb routing scripts
 * @since 1.0 
 * @copyright MIT License
 * @file: liteweb.js
 * @version 1.2.3
 * @author Robin Alex Panicker
**/

/** IMPORTANT: NEED TO DEPLOY THE SITE IN A WEBSERVER TO GET ROUTING WORKING **/

// Get params. See README for IE support
const q = new URLSearchParams (document.currentScript.src.split('?')[1]);

// current version
const v = q.get('v');

// default page (home page) _home.html
const d = q.get('d') != null ? q.get('d') : "home";

const g = function(f) {$.get('_'+f+'.html?v='+v, function(c){$('page').html(c)})}

const l = function() {
    let p = window.location.hash;
    g((p === null || p.length <= 1) ? d : p.substring(1, p.length)); 
	$("a").removeClass("lw-a-current");
	if (window.location.hash) $("a[href='"+window.location.hash+"']").addClass("lw-a-current");
}

// load home page
$(document).ready(l);

// routing based on hash change
$(window).on('hashchange',l);