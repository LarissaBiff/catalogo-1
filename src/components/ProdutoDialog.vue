<script setup>
defineProps(['nome', 'preco', 'categoria', 'id'])
import ButtonChild from './ButtonChild.vue';
import { formataPreco } from '@/utils/produtosUtils';
</script>

<template>
<div class="overlay">
    <div class="produto-dialog">
        <h2>
            {{ nome }}
        </h2>
        <p>
            Preço: {{ formataPreco(preco) }}
        </p>
        <p>
            Categoria: {{ categoria }}
        </p>
        <input type="number" v-model.number="preco"/>
        <ButtonChild>Corrigir preço</ButtonChild>
        <ButtonChild>Fechar</ButtonChild>
    </div>
</div>
</template>

<style scoped>
.produto-dialog{
    border: 1px solid #c797e3;
    padding: 16px;
    margin-top: 16px;
}
.overlay{
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #c797e3;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
</style>