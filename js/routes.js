const routes = [
  {
    path: "/",
    component: "/layout/layout.html",
    children: [
      {
        path: "/dashboard-page",
        component: "/pages/dashboardPage.html",
      },
      //   ----------prospect---
      {
        path: "/prospect",
        group: "prospect",
        component: "/pages/prospect.html",
      },
      {
        path: "/prospect/create-prospect",
        group: "prospect",
        component: "/pages/create-prospect.html",
      },
      {
        path: "/prospect/create-prospect-upload",
        group: "prospect",
        component: "/pages/create-prospect-upload.html",
      },
      {
        path: "/prospect/ongoing-prospect",
        group: "prospect",
        component: "/pages/ongoing-prospect.html",
      },

      //   ------------------------report
      {
        path: "/report",
        group: "report",
        component: "/pages/report.html",
      },
      {
        path: "/report/report-data",
        group: "report",
        component: "/pages/report-data.html",
      },
      {
        path: "/report/report-table",
        group: "report",
        component: "/pages/report-table.html",
      },
      //   --------settings
      {
        path: "/settings",
        group: "settings",
        component: "/pages/settings.html",
      },
      {
        path: "/settings-account",
        group: "settings",
        component: "/pages/settings-account.html",
      },
      {
        path: "/settings-change-password",
        group: "settings",
        component: "/pages/settings-change-password.html",
      },
    ],
  },
  {
    path: "/",
    component: "/layout/plain.html",
    children: [
      {
        path: "/",
        component: "/pages/main.html",
      },
    ],
  },
];

window.routes = routes;
window.currentRoute = {};
