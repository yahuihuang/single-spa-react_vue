1.install single-spa<br>
  npm install create-single-spa -g<br>
2.create-single-spa base<br>
    ? Select type to generate single-spa root config<br>
    ? Which package manager do you want to use? npm<br>
    ? Will this project use Typescript? No<br>
    ? Would you like to use single-spa Layout Engine No<br>
    ? Organization name (can use letters, numbers, dash or underscore) grace<br>
    Initialized empty Git repository in E:/react_microweb/single-spa-react/base/.git/<br>
    ...
3.create-single-spa react-app<br>
    ? Select type to generate single-spa application / parcel<br>
    ? Which framework do you want to use? react<br>
    ? Which package manager do you want to use? npm<br>
    ? Will this project use Typescript? No<br>
    ? Organization name (can use letters, numbers, dash or underscore) grace<br>
    ? Project name (can use letters, numbers, dash or underscore) react<br>
    Initialized empty Git repository in E:/react_microweb/single-spa-react/react-app/.git/<br>
    ...<br>
4.create-single-spa vue-app<br>
    ? Select type to generate single-spa application / parcel<br>
    ? Which framework do you want to use? vue<br>
    ? Organization name (can use letters, numbers, dash or underscore) grace<br>
    Vue CLI v5.0.4<br>
    ? Please pick a preset: Default ([Vue 3] babel, eslint)<br>
5.C:\Users\USER\.npmrc<br>
    registry=https://registry.npmjs.org/<br>
    這是npm registry路徑<br>
6.啟動base proj<br>
    cd base<br>
    npm run start<br>
    http://localhost:9000/<br>
7.啟動vue3<br>
    cd vue-app<br>
    
    vue add router<br>

    add vue.config.js <br>
    (Ref.https://stackoverflow.com/questions/71486686/cannot-read-properties-of-undefined-reading-meta-in-vue-3-single-spa-app)<br>
        module.exports = {<br>
        devServer: {<br>
            port: 3000,<br>
        },<br>
        configureWebpack: {<br>
            output: {<br>
            libraryTarget: "system",<br>
            },<br>
        },<br>
        };<br>

    modify grace-root-config.js & index.ejs<br>

    npm run serve:standalone<br>
        => http://127.0.0.1:3000/<br>
    npm run start<br>
        =>  http://127.0.0.9000/<br>
            http://127.0.0.9000/vue<br>
8.啟動react<br>
  Ref.https://single-spa.js.org/docs/ecosystem-react<br>
  1) npm install react-router-dom<br>
  2) package.json<br>
        "start": "webpack serve --port 4000",<br>
  3) modify grace-root-config.js & index.ejs<br>
    這個也要加上<br>
        "react": "https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js",<br>
        "react-dom": "https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js",<br>
        "react-router-dom": "https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js"<br>
 4) modify grace-react.js<br>
 5) react-app / webpack.config.js<br>
        externals: ["react-router-dom"],<br>
 6) http://localhost:9000/react<br>
    http://localhost:9000/react/about<br>