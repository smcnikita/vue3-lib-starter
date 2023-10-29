<template>
  <main class="main">
    <h1>Home</h1>
    <section>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis quaerat,
        excepturi magni harum suscipit quam officiis, nulla, quasi adipisci unde aspernatur eum nemo
        rerum quidem cum? Enim, ex ad?
      </p>
      <p>
        <base-input-group :laber-attrs="{ for: 'test-input' }">
          <template #label>💜 Label</template>
          <base-input v-model="value" :attrs="{ id: 'test-input', placeholder: 'Value' }" />
        </base-input-group>

        <br />

        <base-button>Test button</base-button>
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { BaseInputGroup, BaseButton, BaseInput } from '@/lib';
import { ref } from 'vue';

const value = ref(null);
</script>

<style scoped>
.main {
  max-width: 500px;
  margin: 0 auto;
}
</style>
