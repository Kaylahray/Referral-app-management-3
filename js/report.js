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
          data: [120, 400, 210, 800, 300, 550, 550], // Example data
          fill: false,
          borderColor: "#1C64F2", // Line color similar to the image
          tension: 0.4, // Smoother curve
          pointBackgroundColor: "transparent", // Point color similar to the image
          pointBorderColor: "transparent", // White border for the points
          pointHoverBackgroundColor: "#1C64F2",
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
              stepSize: 500,
              font: {
                size: 11,
                family: "Circular Std, sans-serif",
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
                size: 11,
                family: "Circular Std, sans-serif",
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
            titleFont: {
              size: 14,
              family: "Circular Std, sans-serif",
            },
            bodyColor: "#000",
            borderColor: "#ddd",
            borderWidth: 1,
            bodyFont: {
              size: 12,
              family: "Circular Std, sans-serif",
            },
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

    new Chart(ctx, config);
  };
  loadReport();
} else {
  loadReport();
}
