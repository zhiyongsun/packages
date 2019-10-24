export default {
  entry: 'src/index.ts',
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/https://github.com/zhiyongsun/react-ui-tools'
  },
  cjs: {
    type: 'babel',
    minify: true
  },
  autoprefixer: {
    browsers: [
      'ie>8',
      'Safari >= 6',
    ],
  },
  cssModules: {
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  },
}
