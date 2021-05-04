<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2"/>
  <Button @click="toggle">切换</Button>

</template>

<script lang="ts">
import {ref} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false
    };

    const f2 = () => {
    };
    return {x, toggle, f1, f2};
  }
};

</script>