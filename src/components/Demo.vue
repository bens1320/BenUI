<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideToggleCode">隐藏代码</Button>

      <Button v-else  @click="showToggleCode">查看代码</Button>
    </div>
    <div v-if="codeVisible" class="demo-code">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {ref, computed} from 'vue';

const Prism = (window as any).Prism;
export default {
  props: {
    component: {
      type: Object
    }
  },
  components: {
    Button
  },
  setup(props) {
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const showToggleCode = () => {
      return codeVisible.value = true;
    };
    const hideToggleCode = () => {
      return codeVisible.value = false;
    };
    return {
      Prism,
      codeVisible,
      showToggleCode,
      hideToggleCode,
      html
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>