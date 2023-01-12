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
  
