const colorSwatches = document.querySelectorAll(".color-swatch");
const demoBlock = document.querySelector(".demo-block");
const colorValue = document.querySelector(".color-value");
const root = document.documentElement;

colorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
        const color = swatch.dataset.color;

        // Update the block background
        demoBlock.style.backgroundColor = color;

        // Update the accent color across the interface
        root.style.setProperty("--accent", color);

        // Update the displayed color code
        colorValue.textContent = color.toUpperCase();

        // Mark the selected color
        colorSwatches.forEach((item) => {
            item.classList.remove("active");
        });

        swatch.classList.add("active");
    });
});
