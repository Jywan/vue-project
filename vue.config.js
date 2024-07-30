const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//prefetch 옵션 비활성화
// module.exports = {
//   chainWebpack : config => {
//     config.plugin.delete('prefetch'); //prefetch 삭제
//   }
// }
