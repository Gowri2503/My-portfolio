document.getElementById('year').textContent = new Date().getFullYear();
// Close the mobile menu after tapping a link
document.querySelectorAll('#nav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('nav');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});
