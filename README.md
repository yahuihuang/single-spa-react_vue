1.install single-spa
  npm install create-single-spa -g
2.create-single-spa base
    ? Select type to generate single-spa root config
    ? Which package manager do you want to use? npm
    ? Will this project use Typescript? No
    ? Would you like to use single-spa Layout Engine No
    ? Organization name (can use letters, numbers, dash or underscore) grace
    Initialized empty Git repository in E:/react_microweb/single-spa-react/base/.git/
    ...
3.create-single-spa react-app
    ? Select type to generate single-spa application / parcel
    ? Which framework do you want to use? react
    ? Which package manager do you want to use? npm
    ? Will this project use Typescript? No
    ? Organization name (can use letters, numbers, dash or underscore) grace
    ? Project name (can use letters, numbers, dash or underscore) react
    Initialized empty Git repository in E:/react_microweb/single-spa-react/react-app/.git/
    ...
4.create-single-spa vue-app
    ? Select type to generate single-spa application / parcel
    ? Which framework do you want to use? vue
    ? Organization name (can use letters, numbers, dash or underscore) grace
    Vue CLI v5.0.4
    ? Please pick a preset: Default ([Vue 3] babel, eslint)
5.C:\Users\USER\.npmrc
    registry=https://registry.npmjs.org/
    這是npm registry路徑
6.啟動base proj
    cd base
    npm run start
    http://localhost:9000/
7.啟動vue3
    cd vue-app
    
    vue add router

    add vue.config.js 
    (Ref.https://stackoverflow.com/questions/71486686/cannot-read-properties-of-undefined-reading-meta-in-vue-3-single-spa-app)
        module.exports = {
        devServer: {
            port: 3000,
        },
        configureWebpack: {
            output: {
            libraryTarget: "system",
            },
        },
        };

    modify grace-root-config.js & index.ejs

    npm run serve:standalone
        => http://127.0.0.1:3000/
    npm run start
        =>  http://127.0.0.9000/
            http://127.0.0.9000/vue
8.啟動react