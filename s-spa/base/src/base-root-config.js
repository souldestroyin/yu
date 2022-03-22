import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen(location) {
    return location.pathname === '/app/index'
  },
});

registerApplication({
  name: "@app/vue3",
  app: () => System.import("@app/vue3"),
  activeWhen: ["/app"]
});

registerApplication({
  name: "@app/vue1",
  app: () => System.import("@app/vue3"),
  activeWhen: ["/app"]
});

start({
  urlRerouteOnly: true,
});

System.import("@app/vue3").then(res => {
  console.log(res);
})
