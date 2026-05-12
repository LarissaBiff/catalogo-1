<script setup>

import { ref } from 'vue';
import { listaProdutos } from '@/utils/produtos';
import ProdutoCard from '@/components/ProdutoCard.vue';
const produtos = ref(listaProdutos)
produtos.value = produtos.value.filter(produto => produto.categoria === 'Higiene')


</script>

<template>

<div class="container">

    <h1>Higiene</h1>

    <div class="produtos">
        <ProdutoCard v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" :imagem="produto.imagem">

        </ProdutoCard>

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