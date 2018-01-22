<!--文件命名规范请使用 "-" 隔开的写法命名，即 "demo-page" -->
<template>
  <!--模版的第一个class定义为文件名，且其他class不用驼峰命名法，皆用 "aaa-bbb" 定义 例如："example-wrapper"-->
  <!--模版内部尽量不要出现定义style属性，除非你给我个理由！！！-->
  <!--如果使用组件，标签也不要使用驼峰，同样通过 "-" 隔开， 例如 <aaa-bbb></aaa-bbb>-->
  <div class="demo">
    <div class="example-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * 重点！！！！！
   * 常量全部定义在外面，主体函数引用
   * 主体函数不要涉及到常量的定义
   * 用 "AAA_BBB" 定义常量
   * 例如: const DATA_TYPE = 'xxxxxx'
   */
  export default {
    /**
     * 主体内部排序规则！！！
     * 1、props
     * 2、data
     * 3、生命周期函数 (包括其他函数)
     * 4、methods
     * 5、watch
     * 6、components
     */
    /**
     * components 内部写法示例
     * components: {
     *  AaaBbb,
     *  BbbCcc
     * }
     */
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /**
   * 样式写法！！！
   * 层级的嵌套尽量跟template的层级嵌套一样
   * 不要出现直接定义标签样式的情况，例如直接定义  div p span img 的样式，尽量使用类去写样式
   */
</style>
