function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const dropdown = document.getElementById("myDropdown");
  const links = dropdown.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
      const txtValue = links[i].textContent || links[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          links[i].style.display = "";
      } else {
          links[i].style.display = "none";
      }
  }
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
};
