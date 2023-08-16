document.write(`
<div class="navbar">
<div class="burger-menu" onclick="toggleMenu()">
<i class="fas fa-bars"></i> <!-- Icône du menu burger de Font Awesome -->
</div>
<div class="sidebar" id="sidebar">
<a href="./../index.html">Accueil</a>
<a href="./pages/realt.html">RealT</a>
<div class="close-btn" onclick="toggleMenu()">
  <i class="fas fa-times"></i>
</div>
</div>
</div>
`);

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
