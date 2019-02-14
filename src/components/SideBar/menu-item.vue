<template>
  <div class="sidebar-items-wrapper">
    <div class="sidebar-leader-wrapper">
      <span style="color:#fff;">产品与服务</span>
    </div>
    <draggable v-model="dataList">
      <transition-group>
    <ul class="sidebar-group" v-for="{name, title, url, id, icon} in dataList" :key="id">
      <li class="sidebar-group-items">
        <div class="sidebar-mask">
        <svg-icon :iconClass="icon" style="width:18px; height:18px;"></svg-icon>
        <span>
        <a class="sidebar-item-link" :title="title" :href="url">
          <span v-html="name"></span>
        </a>
        </span>
        <svg-icon class="close-status" iconClass="close" style="width:15px; height:15px;margin-right:5px;"></svg-icon>
        <svg-icon class="order-status" iconClass="order" style="width:15px; height:15px;"></svg-icon>
        </div>
      </li>
    </ul>
    </transition-group>
    </draggable>
  </div>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({
  components: {
    draggable
  }
})
export default class MenuItem extends Vue {
  public data() {
    return {
      dataList: [{
        name: '流浪地球',
        title: '流浪地球title',
        url: '#1',
        id: '11233543',
        icon: '1'
      }, {
        name: '飞驰人生',
        title: '流浪地球title',
        url: '#2',
        id: '112337656',
        icon: '2'
      }, {
        name: '疯狂的外星人',
        title: '疯狂的外星人title',
        url: '#3',
        id: '11236781',
        icon: '3'
      }, {
        name: '一出好戏',
        title: '一出好戏title',
        url: '#4',
        id: '11238901',
        icon: '4'
      }, {
        name: '阿甘正传',
        title: '阿甘正传title',
        url: '#5',
        id: '11267891',
        icon: '5'
      }, {
        name: '当幸福来敲门',
        title: '当幸福来敲门title',
        url: '#6',
        id: '1167896',
        icon: '6'
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
    padding-left: 0px;
    margin: 0;
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
        line-height: 40px;
        color: #fff;
        font-size: 12px;
        padding-right: 8px;
        user-select:none;
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
      width: 230px;
      height: 40px;
      :hover{
        background-color: #001528;
      }
    }

    // 关闭按钮样式
    .close-status{
      color: #ff4b4b;
      :hover{
        cursor: pointer;
      }
    }
  }
</style>
