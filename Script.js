<script>
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (mobileMenu.classList.contains("active")) {
      icon.className = "ri-close-line";
    } else {
      icon.className = "ri-menu-line";
    }
  });
</script>
