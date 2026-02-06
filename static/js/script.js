/* Template for button navigation of Blog Tile */
var blogButton = document.getElementById("post-1");

if (blogButton) {
    blogButton.addEventListener("click", function () {
        window.location.href = "post/post-1.html";
    });
}

var blogButton = document.getElementById("blog-link");

if (blogButton) {
    blogButton.addEventListener('click', function () {
        window.location.href = "temp/blog/blog.html"
    });
}

var crockpotButton = document.getElementById("cp-link");

if (crockpotButton) {
    crockpotButton.addEventListener("click", function () {
        window.location.href = "temp/crockpot/crockpot.html";
    });
}

var recipesButton = document.getElementById("recipes-link");

if (recipesButton) {
    recipesButton.addEventListener("click", function () {
        window.location.href = "temp/recipes/recipes.html"
    });
}

var storeButton = document.getElementById("store-link");

if(storeButton) {
    storeButton.addEventListener("click", function () {
        window.location.href = "temp/store/store.html"
    });
}