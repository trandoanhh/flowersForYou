onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.querySelector(".message").style.display = "block";
    clearTimeout(c);
  }, 1000);
};
