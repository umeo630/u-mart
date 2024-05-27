<script setup>
import { computed } from 'vue'
import store from "../store"

const test = computed(() => store.state.test)
</script>

<template>
  {{ test }}
</template>
