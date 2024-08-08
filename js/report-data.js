onMounted(() => {
  Chart.register(ChartDataLabels);
  const ctx = document.getElementById("myChart");
  document.querySelectorAll("[data-toggle]")?.forEach((e) => {
    e.onclick = ({ target }) => {
      const parent = document.getElementById(target.dataset.parent);
      const section = document.getElementById(target.dataset.toggle);

      console.log(section, parent, target.dataset);

      if (section.hasAttribute("k-show")) {
        section.removeAttribute("k-show");
        parent.setAttribute("k-show", true);
      } else {
        section.setAttribute("k-show", true);
        parent.removeAttribute("k-show");
      }
    };
  });

  const datasets = [
    {
      label: "Motor",
      backgroundColor: "#8DD3C7",
      data: [137, 181, 127, 169, 127, 80, 85],
    },
    {
      label: "Term Life",
      backgroundColor: "#FFFFB3",
      data: [83, 110, 185, 183, 111, 100, 61],
    },
    {
      label: "Group Life",
      backgroundColor: "#BEBADA",
      data: [70, 75, 39, 169, 111, 42, 21],
    },
    {
      label: "Leadway Savings",
      backgroundColor: "#FB8072",
      data: [68, 113, 154, 150, 153, 153, 127],
    },
  ];

  let data = {
    datasets,
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  };

  data.datasets.forEach((set, i) => {
    const sel = document.querySelector("#report-data .settings");
    const div = document.createElement("div");
    div.classList.add("chart-toggle");
    const el = document.createElement("input");
    el.checked = true;
    el.type = "checkbox";
    el.class = "chart-toggle";

    el.onclick = () => {
      if (datasets[i]) {
        datasets[i].checked = el.checked;
        data.datasets = datasets.filter((e) => e.checked !== false);
      }
      getchat.update();
    };

    // div.onclick = (e) => e.target.tagName === "LABEL" && el.click();

    div.appendChild(el);
    div.insertAdjacentHTML(
      "beforeend",
      `<label>${set.label}</label>`
    );
    sel.appendChild(div);
  });

  const chatConfig = {
    data,
    type: "bar",
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: innerWidth > 1023 ? "right" : "bottom",
          align: innerWidth > 1023 ? "center" : "center",

          labels: {
            usePointStyle: true,
            boxWidth: 10,
          },
        },
        tooltip: {
          enabled: true,
        },
        datalabels: {
          anchor: "end",
          align: "start",
          color: "#333333",

          display: function (context) {
            return context.dataset.data[context.dataIndex] > 15;
          },
          font: {
            weight: "450",
            size: "11",
            family: "Circular Std, sans-serif",
          },
          formatter: Math.round,
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
          },
          border: {
            display: false, // Remove x-axis line
          },
          title: {
            display: true,
            text: "Period",
          },
        },
        y: {
          beginAtZero: true,
          border: {
            display: false, // Remove x-axis line
          },
          grid: {
            display: true,
            drawTicks: true,
            tickColor: "#1f2021",
            tickLength: 7,
          },

          title: {
            display: true,
            text: "Amount (1000)",
          },
        },
      },
    },
  };

  const getchat = new Chart(ctx, chatConfig);

  window.addEventListener("resize", function (e) {
    chatConfig.options.plugins.legend.position =
      innerWidth > 1023 ? "right" : "bottom";
    chatConfig.options.plugins.legend.align =
      innerWidth > 1023 ? "end" : "center";

    getchat.resize();
    getchat.update();
  });

  const ctx2 = document
    .getElementById("reportChart")
    .getContext("2d");
  const reportChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Motor", "Term Life", "Group Life", "Leadway Savings"],
      datasets: [
        {
          label: "Probate Fee", //purple
          data: [0, 10000, 10000, 10000],
          backgroundColor: "#8DA0CB",
          borderColor: "#8DA0CB",
          borderWidth: 1,
          barThickness: 36,
          order: 3,
        },
        {
          label: "VAT @ 7.5% of Fee", //orange
          data: [750, 2438.2, 4876.74, 12697.67],
          backgroundColor: "#FC8D62",
          borderColor: "#FC8D62",
          borderWidth: 1,
          barThickness: 36,
          order: 2,
        },

        {
          label: "Fee (Net of Probate)", //green
          data: [10000, 30000, 65023.26, 169302.33],
          backgroundColor: "#66C2A5",
          borderColor: "#66C2A5",
          borderWidth: 1,
          barThickness: 36,
          order: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          // suggestedMax: 190000,
          // max: 200000,
          border: {
            display: false, // Remove x-axis line
          },
          stacked: true,
          beginAtZero: true,
          grid: {
            display: true,
            drawTicks: true,
            tickColor: "#1f2021",
            tickLength: 7,
          },
          title: {
            font: {
              size: 7,
            },
            display: true,
            text: "Amount (₦)",
          },
        },
        x: {
          stacked: true,
          grid: {
            display: false,
          },

          title: {
            font: {
              size: 7,
            },
            display: true,
            text: "Products",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "right",
          labels: {
            usePointStyle: true,

            generateLabels: (chart) => {
              const labels = chart.data.datasets.map(
                (dataset, index) => ({
                  text: dataset.label,
                  fillStyle: dataset.backgroundColor,
                  datasetIndex: index,
                })
              );
              return labels.reverse(); // Reverse the labels order for the legend
            },
          },
        },
        datalabels: {
          anchor: "end",
          align: "start",
          color: "#002",
          display: function (context) {
            return context.dataset.data[context.dataIndex] > 15;
          },
          font: {
            size: 6,
            weight: "normal",
          },
          formatter: Math.round,
        },
      },
    },
  });

  const settingsOptions = document.querySelectorAll(
    ".settings-option"
  );
  const contentSections = document.querySelectorAll(
    ".content-section"
  );

  settingsOptions.forEach((option) => {
    option.addEventListener("click", function () {
      console.log("Option clicked:", this.id);

      // Remove 'active' class from all options
      settingsOptions.forEach((opt) =>
        opt.classList.remove("active")
      );

      // Hide all content sections
      contentSections.forEach(
        (section) => (section.style.display = "none")
      );

      // Add 'active' class to the clicked option
      this.classList.add("active");

      // Display the corresponding content section
      const contentClass = `${this.id}-content`;
      const contentSection = document.querySelector(
        `.${contentClass}`
      );
      console.log("Content section:", contentSection);

      if (contentSection) {
        contentSection.style.display = "block";
      } else {
        console.error(
          `Content section with class ${contentClass} not found.`
        );
      }
    });
  });
});
