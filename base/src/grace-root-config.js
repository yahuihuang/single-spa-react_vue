import { registerApplication, start } from "single-spa";

// 註冊
registerApplication({
  name: "@single-spa/welcome", // 應用名稱(可自訂)
  app: () =>
    // 當路徑匹配到的時候，執行此方法
    System.import(
      // 加載一個遠程的模塊, 此模塊會expose: bootstrap、mount、unmount
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname == "/",
});

registerApplication({
  name: "@grace/vue-app",
  app: () => System.import("@grace/vue-app"),
  activeWhen: ["/vue"],
  customProps: { a: 1 },
});

start({
  // 啟動
  urlRerouteOnly: true,
});
