<template>
  <div
    class="group"
    :class="{
      group__primary: props.variant === 'primary',
      group__secondary: props.variant === 'secondary',
    }"
  >
    <base-label v-bind="props.laberAttrs">
      <slot name="label" />
    </base-label>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { BaseLabel } from '@/lib';
import type { IBaseProps } from './../types';

const props = withDefaults(defineProps<IBaseProps>(), {
  variant: 'primary',
});

defineSlots<{
  default(): any;
  label(): any;
}>();
</script>

<style scoped></style>
