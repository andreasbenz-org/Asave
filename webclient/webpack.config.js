const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Startseite',
      filename: 'index.html',
      template: 'src/templates/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Revierstreife',
      filename: 'Revierstreife.html',
      template: 'src/templates/services/Revierstreife.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Objektschutz',
      filename: 'Objektschutz.html',
      template: 'src/templates/services/Objektschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Portierdienst',
      filename: 'Portierdienst.html',
      template: 'src/templates/services/Portierdienst.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Veranstaltungsschutz',
      filename: 'Veranstaltungsschutz.html',
      template: 'src/templates/services/Veranstaltungsschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Berufsdetektei',
      filename: 'Berufsdetektei.html',
      template: 'src/templates/services/Berufsdetektei.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Personenschutz',
      filename: 'Personenschutz.html',
      template: 'src/templates/services/Personenschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Ausbildung',
      filename: 'Ausbildung.html',
      template: 'src/templates/Ausbildung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Jetzt bewerben',
      filename: 'Bewerbung.html',
      template: 'src/templates/Bewerbung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Referenzen',
      filename: 'Referenzen.html',
      template: 'src/templates/Referenzen.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Galerie',
      filename: 'Galerie.html',
      template: 'src/templates/Galerie.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | ISO-Zertifizierung',
      filename: 'Zerzifizeirung.html',
      template: 'src/templates/Zertifizierung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Unternehmenssponsoring',
      filename: 'Unternehmenssponsoring.html',
      template: 'src/templates/Unternehmenssponsoring.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave Security Service | Partner',
      filename: 'Partner.html',
      template: 'src/templates/Partner.html'
    }),
  
  
  ]
}