const btns = document.querySelectorAll(".btn");
const content = document.getElementsByClassName("page")

btns.forEach(btn => {
  btn.addEventListener("click", function() {
    btns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});


function openTab(evt, tabName) {
    for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "grid";
        evt.currentTarget.className += " active";
}