onMounted((doc) => {
  const ctx = document.getElementById("myChart").getContext("2d");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
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
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
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
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});
