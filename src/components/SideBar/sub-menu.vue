<template>
  <div>
    <div class="slideInRight-enter">
      <div class="search-box">
        <svg-icon
          iconClass="search"
          style="width:20px; height:20px;"
        ></svg-icon>
        <el-input
          placeholder="请输入内容"
          v-model="searchInput"
          clearable
        >
        </el-input>
      </div>
      <div class="arr-info-wrapper">
        <div
          class="arr-groups"
          v-for="({name, id, title, url, status}, index) in dataList"
          :key="id"
        >
          <div class="arr-items">
            <span>
              <a
                class="arr-item-link"
                :title="title"
                :href="url"
              >
                <span v-html="name"></span>
              </a>
            </span>
            <label class="star-wrapper" @click="starStatusChange(index)">
              <svg-icon
                :iconClass="status ? 'star-active' : 'star-none'"
                style="width:18px; height:18px;"
              ></svg-icon>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject} from 'vue-property-decorator'
@Component({})
export default class SubMenu extends Vue {
  private searchInput?: string
  private dataList?: any[]
  public data() {
    return {
      searchInput: '',
      dataList: [
        {
          name: '流浪地球',
          title: '流浪地球title',
          url: '#1',
          id: '11233543',
          icon: '1',
          status: false
        },
        {
          name: '飞驰人生',
          title: '流浪地球title',
          url: '#2',
          id: '112337656',
          icon: '2',
          status: true
        },
        {
          name: '疯狂的外星人',
          title: '疯狂的外星人title',
          url: '#3',
          id: '11236781',
          icon: '3',
          status: false
        },
        {
          name: '一出好戏',
          title: '一出好戏title',
          url: '#4',
          id: '11238901',
          icon: '4',
          status: false
        },
        {
          name: '阿甘正传',
          title: '阿甘正传title',
          url: '#5',
          id: '11267891',
          icon: '5',
          status: true
        },
        {
          name: '当幸福来敲门',
          title: '当幸福来敲门title',
          url: '#6',
          id: '1167896',
          icon: '6',
          status: false
        },
        {
          name: '战狼1',
          title: '战狼1title',
          url: '#7',
          id: '116896',
          icon: '7',
          status: false
        },
        {
          name: '唐人街探案',
          title: '唐人街探案title',
          url: '#8',
          id: '167896',
          icon: '8',
          status: true
        },
        {
          name: '阿凡达',
          title: '阿凡达title',
          url: '#9',
          id: '116786',
          icon: '9',
          status: false
        }
      ]
    }
  }
  /**
   * starStatusChange
   */
  public starStatusChange(index: number) {
    (this as any).dataList[index].status = !(this as any).dataList[index].status
  }
}
</script>

<style lang="scss" scoped>
// search box
.search-box {
  display: inline-block;
  height: 40px;
  width: 100%;
}

.star-wrapper{
  cursor: pointer;
}
// 遍历的arr样式
.arr-info-wrapper {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 30px;
  .arr-items {
    margin: 2px 10px;
    padding: 3px 10px;
    height: 30px;
    line-height: 30px;
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
    .arr-item-link {
      text-decoration: none;
      &:visited {
        color: rgba(0, 0, 0, 0.65);
      }
      &:link {
        color: rgba(0, 0, 0, 0.65);
      }
      span {
        display: inline-block;
        vertical-align: middle;
        width: 140px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 13px;
        padding-right: 8px;
        user-select: none;
      }
    }
    .svg-icon {
      line-height: 30px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
