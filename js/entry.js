async function loadPage(page) {
  return await fetch(page)
    .then((response) => response.text())
    .catch((error) => console.error("Error loading page:", error));
}

const getRoute = (path, routelist) => {
  let layout = {};
  let route = {};

  routelist ??= window.routes.filter((rl) => {
    if (rl.children) {
      return rl.children.some((e) => e.path === path);
    }
    return rl.path === path;
  });
  layout = routelist[0];

  let loaded = routelist.find((e) => e.path === path) || routelist[0];

  if (loaded) {
    if (loaded.children) {
      route = loaded.children.find((e) => e.path === path);
      list = loaded.children;
    } else {
      route = loaded;
    }
  }

  const page = route || routelist[0] || {};
  window.currentRoute = page;

  return [page, layout];
};

const handleRefresh = () => {
  window.addEventListener("hashchange", () => {
    setComponent(window.location.hash);
  });

  document.querySelectorAll("a").forEach((a) => {
    const link = a.getAttribute("href");
    if (!link.includes("http")) {
      a.addEventListener("click", (evt) => {
        evt.preventDefault();
        history.pushState(
          {
            title: "Link",
          },
          {},
          link
        );

        let filePath = link.replace("#", "").replace(".html", ""); // + ".html";

        if (filePath.substring(0, 1) === "/") {
          filePath = filePath.substring(1, filePath.length);
        }

        setComponent("/" + filePath);
      });
    }
  });
};

const setComponent = (path = "") => {
  [page, layout] = getRoute((path || "/").replace("#", ""));
  if (page && layout) {
    setPage(page.component, layout.component);
  }
};

const setPage = async (pagePath, layoutPath) => {
  const parser = new DOMParser();
  const main = document.getElementById("entry-point");

  const lHtml = await loadPage(layoutPath);
  const parsed = parser.parseFromString(lHtml, "text/html");

  const pHtml = await loadPage(pagePath);
  parsed.querySelector(".main-content").innerHTML = pHtml;

  const layout = parsed.querySelector("body").innerHTML;
  main.innerHTML = layout;

  main.querySelectorAll("a").forEach((a) => {
    const href = a
      .getAttribute("href")
      .replace("#/", "#")
      .replace("#", "/");
    const exact = a.getAttribute("exact");

    const grouped =
      currentRoute.group && href.includes(currentRoute.group);

    if ((href === currentRoute.path || grouped) && exact) {
      a.setAttribute("current", true);
      a.classList.add(exact);
    } else if (exact) {
      a.removeAttribute("current");
      a.classList.remove(exact);
    }
  });

  handleRefresh();
};

window.addEventListener("DOMContentLoaded", () => {
  const url = new URL(location);
  setComponent(url.hash);
  handleRefresh();
});
