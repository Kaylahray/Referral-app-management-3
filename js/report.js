if (typeof loadReport === "undefined") {
  const loadReport = () => {
    const progressBars = document.querySelectorAll(
      ".report-progress-bar .report-progress"
    );
    console.log(progressBars);
    progressBars.forEach((bar) => {
      const percentageText = bar
        .closest("tr")
        .querySelector(".report-percentage");
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
        }
      }, 20); // Speed of the animation
    });
  };
  loadReport();
} else {
  loadReport();
}
