/* Prompt:

Now write your JavaScript in the Javascript.js file such that 
clicking the buttons re-styles the box appropriately 
(i.e. When a user hits "Grow" the box should 
increase in size, 
when a user hits "Fade" the box should change opacity, 
etc.).

       */


// Grow 
document.getElementById("grow").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

// Shrink 
document.getElementById("shrink").addEventListener("click", function(){

    document.getElementById("box").style.height = "50px";
    document.getElementById("box").style.width = "50px";

});

// Blue
document.getElementById("blue").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

// Opacity: Figure out how to write a loop that enables the user to keep clicking the fade button
document.getElementById("fade").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.25";

});

// Reset: Determine if there's a more elegant way to do this. 
document.getElementById("reset").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
});