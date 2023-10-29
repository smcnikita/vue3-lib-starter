<template>
  <label v-bind="attrs" class="baseLabel">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IBaseLabelProps } from './../types';

const props = withDefaults(defineProps<IBaseLabelProps>(), {});

defineSlots<{
  default(): any;
}>();

const attrs = computed(() => {
  return { ...props.attrs };
});
</script>

<style scoped></style>
