if (typeof loadReport === "undefined") {
  const loadReport = () => {
    const progressBars = document.querySelectorAll(
      ".report-progress"
    );
    const percentageTexts = document.querySelectorAll(
      ".report-percentage"
    );
    progressBars.forEach((bar, index) => {
      const color = bar.getAttribute("data-color");
      const percentage = parseInt(
        bar.getAttribute("data-percentage"),
        10
      );
      let width = 0; // Reset width for each progress bar

      let interval = setInterval(() => {
        if (width >= percentage) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = width + "%";

          if (color) {
            bar.style.backgroundColor = color;
          }

          // Update the percentage text
          percentageTexts[index].textContent = width + "%";
          if (color) {
            percentageTexts[index].style.color = color;
            percentageTexts[index].style.borderColor = color;
          }
        }
      }, 20); // Speed of the animation
    });

    const ctx = document
      .getElementById("conversionChart")
      .getContext("2d");

    const data = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Prospect Conversion",
          data: [200, 450, 300, 600, 700, 500, 400], // Example data
          fill: false,
          borderColor: "#1C64F2", // Line color similar to the image
          tension: 0.4, // Smoother curve
          pointBackgroundColor: "#1C64F2", // Point color similar to the image
          pointBorderColor: "#fff", // White border for the points
          pointBorderWidth: 2,
          pointRadius: 5, // Size of the points
          pointHoverRadius: 7, // Size when hovered
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 1000, // Adjust based on your data range
            ticks: {
              stepSize: 100,
              font: {
                size: 12,
                family: "Arial, sans-serif",
              },
              color: "#8E8E93",
            },
            grid: {
              drawBorder: false,
              color: "#F1F1F2",
            },
          },
          x: {
            ticks: {
              font: {
                size: 12,
                family: "Arial, sans-serif",
              },
              color: "#8E8E93",
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
            backgroundColor: "#fff",
            titleColor: "#1C64F2",
            titleFont: { size: 14, family: "Arial, sans-serif" },
            bodyColor: "#000",
            borderColor: "#ddd",
            borderWidth: 1,
            bodyFont: { size: 12, family: "Arial, sans-serif" },
            padding: 10,
            displayColors: false,
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          legend: {
            display: false,
          },
        },
      },
    };

    const conversionChart = new Chart(ctx, config);
  };
  loadReport();
} else {
  loadReport();
}
