<template>
  <input
    :value="modelValue"
    v-bind="attrs"
    class="baseInput"
    :class="{
      input__primary: props.variant === 'primary',
      input__secondary: props.variant === 'secondary',
    }"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IBaseInputProps, TBaseInputValue } from './../types';

const props = withDefaults(defineProps<IBaseInputProps>(), {
  variant: 'primary',
  modelModifiers: () => ({}),
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: TBaseInputValue): void;
  (e: 'input', event: Event): void;
}>();

const attrs = computed(() => {
  return {
    type: props.attrs?.type ?? 'text',
    ...props.attrs,
  };
});

const onInput = (event: Event) => {
  let value = (event.target as HTMLInputElement).value;

  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }

  emit('update:modelValue', value);
  emit('input', event);
};
</script>

<style scoped></style>
