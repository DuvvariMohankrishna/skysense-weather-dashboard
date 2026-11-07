
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {

        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("open");
        });

        document.addEventListener("click", function (event) {

            const clickedInsideSidebar = sidebar.contains(event.target);
            const clickedMenuButton = menuToggle.contains(event.target);

            if (!clickedInsideSidebar && !clickedMenuButton) {
                sidebar.classList.remove("open");
            }

        });

    }

    console.log("SkySense dashboard initialized successfully.");

});
