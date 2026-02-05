/* Template for button navigation of Blog Tile */
var blogButton = document.getElementById("post-1");

if (blogButton) {
    blogButton.addEventListener("click", function () {
        window.location.href = "post/post-1.html";
    });
}
