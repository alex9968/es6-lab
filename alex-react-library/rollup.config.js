import babel  from 'rollup-plugin-babel'
export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'cjs' //CommonJS标准
  },
  plugins: [babel()], //添加编译插件
  external: ['react', 'styled-components'] //添加拓展库
}
