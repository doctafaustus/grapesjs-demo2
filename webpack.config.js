module.exports = ({ config }) => {
  // This is how you can distinguish the `build` command from the `serve`
  const isBuild = config.mode === 'production';

  return {
      ...config,
      module: {
          rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            }, 
            {
              test: /\.scss$/,
              type: "asset/source",
              use: ["postcss-loader", "sass-loader"],
            },
          ...config.module.rules
        ],
      },
  };
}