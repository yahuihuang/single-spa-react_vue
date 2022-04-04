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
