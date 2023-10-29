<template>
  <button
    v-bind="attrs"
    class="baseButton"
    :class="{
      button__primary: props.variant === 'primary',
      button__secondary: props.variant === 'secondary',
    }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IBaseButtonProps } from './../types';

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  variant: 'primary',
});

defineSlots<{
  default(): any;
}>();

defineEmits<{
  (e: 'click', event: Event): void;
}>();

const attrs = computed(() => {
  return {
    type: props.attrs?.type ?? 'button',
    ...props.attrs,
  };
});
</script>

<style scoped></style>
