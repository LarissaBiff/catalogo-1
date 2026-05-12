<script setup>
import { ref } from 'vue';
const props = defineProps(['nome', 'preco', 'categoria', 'id'])
import ButtonChild from './ButtonChild.vue';
import { formataPreco } from '@/utils/produtosUtils';
const novoPreco = ref(0)
novoPreco.value = props.preco
defineEmits(['fechar'])
</script>

<template>
<div class="overlay">
    <div class="produto-dialog">
        <h2>
            {{ props.nome }}
        </h2>
        <p>
            Preço: {{ formataPreco(props.preco) }}
        </p>
        <p>
            Categoria: {{ props.categoria }}
        </p>
        <input type="number" v-model.number="novoPrecopreco"/>
        <ButtonChild>Corrigir preço</ButtonChild>
        <ButtonChild @clique="$emit('fechar')">Fechar</ButtonChild>
    </div>
</div>
</template>

<style scoped>
.produto-dialog{
    border: 1px solid #c797e3;
    padding: 24px;
    background-color: whitesmoke;
    border-radius: 8px;
    min-width: 320px;
}
.overlay{
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #280a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
</style>