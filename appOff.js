(function () {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
})();

localStorage.setItem("key", "value");

var data = localStorage.getItem("key");
console.log(data);

localStorage.removeItem("key");
localStorage.clear();

try {
    localStorage.setItem("key", "value");
  } catch (e) {
    if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
    }
}
