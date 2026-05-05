<script setup>
import { ref } from 'vue'
import ProdutoChild from './components/ProdutoChild.vue';
import ButtonChild from './components/ButtonChild.vue';
import { listaProdutos } from './utils/produtos';
const produtos = ref(listaProdutos)



const preco = ref(0)
const posicaoProduto = ref(-1)
const alterando = ref(false)

function corrigirpreco(id){
  posicaoProduto.value = produtos.value.findIndex(produto => produto.id === id)
  preco.value = produtos.value[posicaoProduto.value].preco;
  alterando.value = true;
}

function salvarPreco(){
  produtos.value[posicaoProduto.value].preco = preco.value;
  alterando.value = false;
}

</script>

<template>

  <div class="container">
    <ul>
      <ProdutoChild v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.nome"
        :preco="produto.preco" :categoria="produto.categoria" @corrigirpreco="corrigirpreco">

      </ProdutoChild>
    </ul>

    <div v-show="alterando">
      <label>Preço</label>
      <input type="number" v-model.number="preco">
      <ButtonChild @clique="salvarPreco">Salvar Preço</ButtonChild>
    </div>
  </div>
</template>

<style scoped>

.container{
  color: #FF1493;
  margin: 10px;
}



</style>
