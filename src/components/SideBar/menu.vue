<template>
  <div>
    <div class="slideInRight-enter">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({})
export default class Menu extends Vue {
  
}
</script>

<style lang="scss" scoped>
</style>
