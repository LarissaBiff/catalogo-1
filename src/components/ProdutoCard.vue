<script setup>
import ProdutoDialog from './ProdutoDialog.vue';
    defineProps((['id', 'nome', 'preco', 'imagem', 'categoria']))
    import ButtonChild from './ButtonChild.vue';
    import { formataPreco } from '@/utils/produtosUtils';
</script>
<template>
    <div class="produto-card">
        <div>
            <h2>
                {{ nome }}
            </h2>
            <p>
                Preço: {{ formataPreco(preco) }}
            </p>
        </div>
        <div>
            <img :src="imagem" :alt="nome" class="produto-image">
        </div>
        <ButtonChild>Editar</ButtonChild>
        <ProdutoDialog :nome="nome" :id="id" :categoria="categoria" :preco="preco"></ProdutoDialog>
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
.produto-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
}
</style>