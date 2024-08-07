onMounted((doc) => {
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
    const sel = document.querySelector(
      "#report-data .chart-flex .settings"
    );
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

    div.onclick = () => el.click();

    div.appendChild(el);
    div.insertAdjacentHTML(
      "beforeend",
      `<label>${set.label}</label>`
    );
    sel.appendChild(div);
  });

  const getchat = new Chart(ctx, {
    data,
    type: "bar",
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "right",
          align: "center",
          labels: {
            usePointStyle: true,
            boxWidth: 5,
          },
        },
        tooltip: {
          enabled: true,
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
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: (value) => value, // Display the data value
            font: {
              weight: "bold",
            },
          },
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
  });
});
