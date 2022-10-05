document.querySelector('.hamburger-icon').addEventListener("click", function() {
  document.querySelector('.hamburger-overlay').classList.toggle("active");
  document.querySelector('body').classList.toggle("no-scroll");
});

document.addEventListener('keydown', sluitMenu);

function sluitMenu(e) {
	if(e.keyCode === 27) {
		document.querySelector('.hamburger-overlay').classList.remove('active');
    document.querySelector('body').classList.remove('no-scroll');
	}
}