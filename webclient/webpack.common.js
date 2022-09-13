const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/main.js',
 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Asave | Startseite',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Revierstreife',
      filename: 'Revierstreife.html',
      template: 'src/Revierstreife.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Objektschutz',
      filename: 'Objektschutz.html',
      template: 'src/Objektschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Portierdienst',
      filename: 'Portierdienst.html',
      template: 'src/Portierdienst.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Veranstaltungsschutz',
      filename: 'Veranstaltungsschutz.html',
      template: 'src/Veranstaltungsschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave  | Berufsdetektei',
      filename: 'Berufsdetektei.html',
      template: 'src/Berufsdetektei.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Personenschutz',
      filename: 'Personenschutz.html',
      template: 'src/Personenschutz.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Ausbildung',
      filename: 'Ausbildung.html',
      template: 'src/Ausbildung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Jetzt bewerben',
      filename: 'Bewerbung.html',
      template: 'src/Bewerbung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Jetzt anfragen',
      filename: 'Anfragen.html',
      template: 'src/Anfragen.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Referenzen',
      filename: 'Referenzen.html',
      template: 'src/Referenzen.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Galerie',
      filename: 'Galerie.html',
      template: 'src/Galerie.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | ISO-Zertifizierung',
      filename: 'Zertifizierung.html',
      template: 'src/Zertifizierung.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Unternehmenssponsoring',
      filename: 'Unternehmenssponsoring.html',
      template: 'src/Unternehmenssponsoring.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Partner',
      filename: 'Partner.html',
      template: 'src/Partner.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Anfrageformular',
      filename: 'Anfrageformular.html',
      template: 'src/Anfrageformular.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Asave | Bewerbungsformular',
      filename: 'Bewerbungsformular.html',
      template: 'src/Bewerbungsformular.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
        type: 'asset/resource',
      },
    ]
  },
}