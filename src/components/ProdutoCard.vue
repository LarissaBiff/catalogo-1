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
            <img :src="imagem" :alt="nome">
        </div>
    </div>
</template>
<style scoped>

</style>