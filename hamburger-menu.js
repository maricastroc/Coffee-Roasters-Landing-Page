let isOpen = false;
document
    .querySelector("#hamburger-icon")
    .addEventListener("click", () => {
        if (!isOpen) {
            document
                .querySelector(".modal-menu")
                .classList.remove("hidden");

            document.querySelector("#hamburger-icon").src =
                "../assets/shared/mobile/icon-close.svg";

            isOpen = true;
        } else {
            document
                .querySelector(".modal-menu")
                .classList.add("hidden");
            document.querySelector("#hamburger-icon").src =
                "../assets/shared/mobile/icon-hamburger.svg";

            isOpen = false;
        }
    });
