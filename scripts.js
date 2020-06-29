/* Design 1 - Toggle switch using button element */
document.querySelectorAll(".switch").forEach(function(toggleSwitch) {
    toggleSwitch.addEventListener("click", handleClick, false);
});

function handleClick(e) {
    let el = e.target;
    if (el.getAttribute("aria-checked") === "true") {
        el.setAttribute("aria-checked", "false");
    } else {
        el.setAttribute("aria-checked", "true");
    }
}