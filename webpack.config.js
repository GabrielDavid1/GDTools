module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
};