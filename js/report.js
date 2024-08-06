if (typeof loadReport === "undefined") {
  const loadReport = () => {
    const progressBars = document.querySelectorAll(
      ".report-progress"
    );
    const percentageTexts = document.querySelectorAll(
      ".report-percentage"
    );

    // Loop through each percentageText to set its color based on the data-color attribute
    percentageTexts.forEach((text) => {
      const color = text.getAttribute("data-color");
      if (color) {
        text.style.color = color;
        text.style.borderColor = color;
      }
    });

    // Loop through each progressBar to set its width and background color based on the data-percentage and data-color attributes
    progressBars.forEach((bar) => {
      const percentageText = bar.querySelector(".report-percentage");
      const color = bar.getAttribute("data-color");
      let percentage = parseInt(
        bar.getAttribute("data-percentage"),
        10
      );
      let width = 0;

      let interval = setInterval(() => {
        if (width >= percentage) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = width + "%";

          if (percentageText) {
            percentageText.textContent = width + "%";
          }

          if (color) {
            bar.style.backgroundColor = color;
          }
        }
      }, 20); // Speed of the animation
    });
  };
  loadReport();
} else {
  loadReport();
}
