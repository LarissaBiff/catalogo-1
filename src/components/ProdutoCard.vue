<script setup>
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
    </div>
</template>
<style scoped>
.produto-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
</style>