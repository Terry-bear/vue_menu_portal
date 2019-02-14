<template>
  <div class="sidebar-items-wrapper">
    <ul class="sidebar-group" v-for="{name, title, url, id} in dataList" :key="id">
      <li class="sidebar-group-items">
        <div class="sidebar-mask">
        <svg-icon iconClass="bk-box" style="width:18px; height:18px;"></svg-icon>
        <span>
        <a class="sidebar-item-link" :title="title" :href="url">
          <span v-html="name"></span>
        </a>
        </span>
        <svg-icon iconClass="close" style="width:15px; height:15px;margin-right:5px;"></svg-icon>
        <svg-icon iconClass="order" style="width:15px; height:15px;"></svg-icon>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({})
export default class MenuItem extends Vue {
  public data() {
    return {
      dataList: [{
        name: '流浪地球',
        title: '流浪地球title',
        url: 'www.baidu.com',
        id: '11233543'
      }, {
        name: '飞驰人生',
        title: '流浪地球title',
        url: 'www.baidu.com',
        id: '112337656'
      }, {
        name: '疯狂的外星人',
        title: '疯狂的外星人title',
        url: 'www.baidu.com',
        id: '11236781'
      }, {
        name: '一出好戏',
        title: '一出好戏title',
        url: 'www.baidu.com',
        id: '11238901'
      }, {
        name: '阿甘正传',
        title: '阿甘正传title',
        url: 'www.baidu.com',
        id: '11267891'
      }, {
        name: '当幸福来敲门',
        title: '当幸福来敲门title',
        url: 'www.baidu.com',
        id: '1167896'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
// ul-li标签处理
  .sidebar-group{
    list-style: none;
    font-size: 12px;
    color: #fff;
    padding-left: 10px;
    width: 210px;
    .svg-icon{
      width: 50px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
    }
    // a标签处理
    .sidebar-item-link{
      text-decoration: none;
      &:visited{
        color: #fff
      }
      &:link{
        color: #fff
      }
      span {
        display: inline-block;
        vertical-align: middle;
        width: 140px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 21px;
        color: #fff;
        font-size: 12px;
        padding-right: 8px;
        &:hover{
          color: #00c1de;
        }
      }
    }
    // li样式
    .sidebar-group-items{
      :hover{
        background-color: #001528;
      }
    }
    .sidebar-mask{
      :hover{
        background-color: #001528;
      }
    }
  }
</style>
