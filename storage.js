chrome.storage.local.set({ "key": "value" }, function() {
    console.log("Value saved: " + value);
});

chrome.storage.local.get("key", function(items) {
  console.log("Retrieved value: " + items.key);
});

chrome.storage.local.remove("key", function() {
    console.log("Value removed");
});

chrome.storage.local.clear(function() {
    console.log("All values removed");
});  

chrome.storage.local.set({ "key": "value" }, function() {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {
      console.log("Value saved: " + value);
    }
});

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
