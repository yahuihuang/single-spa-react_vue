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
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@grace/navbar",
//   app: () => System.import("@grace/navbar"),
//   activeWhen: ["/"]
// });

start({
  // 啟動
  urlRerouteOnly: true,
});
