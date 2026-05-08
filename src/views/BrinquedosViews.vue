<script setup>

import { ref } from 'vue';
import { listaProdutos } from '@/utils/produtos';
import { formataPreco } from '@/utils/produtosUtils';
const produtos = ref(listaProdutos)
produtos.value = produtos.value.filter(produto => produto.categoria === 'Brinquedos')


</script>

<template>

<div class="container">

    <h1>Brinquedos</h1>

    <div v-for="produto in produtos" :key="produto.id" class="produto-card">

        <div>

            <h2>{{ produto.nome }}</h2>
        <p>Preço: {{ formataPreco(produto.preco) }}</p>

        </div>

        <div>

            <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem">
        </div>
    </div>

</div>

</template>


<style scoped>

    .produto-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #c797e3;
        padding: 16px;
        margin-bottom: 16px;
    }

</style>