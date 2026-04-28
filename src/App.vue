<script setup>
import { ref } from 'vue'
import ProdutoChild from './components/ProdutoChild.vue';
import ButtonChild from './components/icons/ButtonChild.vue';


const produtos = ref([
  { id: 1, nome: 'Ração Premium Cães', preco: 120, categoria: 'Alimentos' },
  { id: 2, nome: 'Ração Gatos Castrados', preco: 95, categoria: 'Alimentos' },
  { id: 3, nome: 'Petisco Natural', preco: 18, categoria: 'Alimentos' },
  { id: 4, nome: 'Brinquedo Bola', preco: 22, categoria: 'Brinquedos' },
  { id: 5, nome: 'Mordedor de Corda', preco: 30, categoria: 'Brinquedos' },
  { id: 6, nome: 'Shampoo Pet', preco: 35, categoria: 'Higiene' },
  { id: 7, nome: 'Tapete Higiênico', preco: 42, categoria: 'Higiene' },
  { id: 8, nome: 'Coleira Azul', preco: 28, categoria: 'Acessórios' },
  { id: 9, nome: 'Guia de Passeio', preco: 40, categoria: 'Acessórios' }

])

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
