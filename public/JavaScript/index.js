// This is important for the Quick and Simple Section

top_text = document.getElementById("top_text");
bottom_text = document.getElementById("bottom_text");
top_text2 = document.getElementById("top_text2");
bottom_text2 = document.getElementById("bottom_text2");

navbar_open_close = document.getElementById("navbar_open_close");

function size() {
  if (window.innerWidth < 769) {
    top_text.style.display = "none";
    bottom_text.style.display = "block";
    top_text2.style.display = "none";
    bottom_text2.style.display = "block";
  } else if (window.innerWidth > 768) {
    top_text.style.display = "block";
    bottom_text.style.display = "none";
    top_text2.style.display = "block";
    bottom_text2.style.display = "none";
  }
  if (window.innerWidth > 576) {
    navbar_open_close.style.display = "none";
  } else if (window.innerWidth < 577) {
    navbar_open_close.style.display = "block";
  }
}
window.onresize = function() {
  size();
}

window.onload = function() {
  size();
}
