const routes = [
  {
    path: "/",
    component: "/layout/layout.html",
    children: [
      {
        path: "/dashboard-page",
        component: "/pages/dashboardPage.html",
      },
      {
        path: "/prospect",
        component: "/pages/prospect.html",
      },
      {
        path: "/report",
        component: "/pages/report.html",
      },
      {
        path: "/settings",
        component: "/pages/settings.html",
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
