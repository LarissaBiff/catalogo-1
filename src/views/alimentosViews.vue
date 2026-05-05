<script setup>

import { ref } from 'vue';
import { listaProdutos } from '@/utils/produtos';
const produtos = ref(listaProdutos)
produtos.value = produtos.value.filter(produto => produto.categoria === 'Alimentos')


</script>

<template>


</template>


<style scoped>

</style>
