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
  app: () => System.import("@app/vue1"),
  activeWhen: ["/app"]
});

registerApplication({
  name: "@app/vue2",
  app: () => System.import("@app/vue2"),
  activeWhen: ["/app"]
});

start({
  urlRerouteOnly: true,
});

// System.import("@app/vue3").then(res => {
//   console.log(res);
// })


let eventObjs = {}
export const eventBus = {
	on(eventName,callback){
		eventObjs[eventName] = callback
	},
	emit(eventName,msg){
		if(eventObjs[eventName]){
			eventObjs[eventName](msg)
		}
	}
}
