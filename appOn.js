(function () {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
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
