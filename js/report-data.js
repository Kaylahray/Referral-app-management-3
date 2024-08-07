onMounted(() => {
  const ctx = document.getElementById("myChart");

  const datasets = [
    {
      label: "Motor",
      backgroundColor: "#1f77b4",
      data: [137, 181, 127, 169, 127, 80, 85],
    },
    {
      label: "Term Life",
      backgroundColor: "#ff7f0e",
      data: [83, 110, 185, 183, 111, 100, 61],
    },
    {
      label: "Group Life",
      backgroundColor: "#2ca02c",
      data: [70, 75, 39, 169, 111, 42, 21],
    },
    {
      label: "Leadway Savings",
      backgroundColor: "#d62728",
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
          align: innerWidth > 1023 ? "end" : "center",
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
          color: "white",
          display: function (context) {
            return context.dataset.data[context.dataIndex] > 15;
          },
          font: {
            weight: "bold",
          },
          formatter: Math.round,
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
          },
          title: {
            display: true,
            text: "Period",
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            borderDash: [5],
          },
          title: {
            display: true,
            text: "Amount (1000)",
          },
        },
      },
    },
  };

  Chart.register(ChartDataLabels);
  const getchat = new Chart(ctx, chatConfig);

  window.addEventListener("resize", function (e) {
    chatConfig.options.plugins.legend.position =
      innerWidth > 1023 ? "right" : "bottom";
    chatConfig.options.plugins.legend.align =
      innerWidth > 1023 ? "end" : "center";

    getchat.resize();
    getchat.update();
    console.log(chatConfig.options.plugins.legend.position);
  });
});
