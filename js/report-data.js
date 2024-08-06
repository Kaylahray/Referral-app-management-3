if (typeof loadDataReport === "undefined") {
  const loadDataReport = () => {
    const ctx = document.getElementById("myChart");

    let datasets = [
      {
        name: "motor",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "orange",
      },
      {
        name: "term-life",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "green",
      },
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "blue",
      },
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "red",
      },
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: "purple",
      },
    ];

    const getchat = new Chart(ctx, {
      type: "bar",
      data: {
        datasets,
        labels: [
          "Blue",
          "Yellow",
          "Purple",
          "Red",
          "Green",
          "Orange",
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };
  loadDataReport();
} else {
  loadDataReport();
}
