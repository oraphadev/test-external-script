(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://f829-187-85-18-74.ngrok-free.app/widget";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "120px";
  iframe.style.height = "120px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);
})();
