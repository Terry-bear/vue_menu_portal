<template>
  <div>
    <div class="side-bar-wrapper">
      <div class="sidebar-container">
        <div class="sidebar-list">
          <menu-item/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
import MenuItem from './menu-item.vue'
@Component({
  components: {
    MenuItem
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
@import '~@/styles/side-bar-varibles.scss'
</style>
