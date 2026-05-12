<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/alimentos">Alimentos</RouterLink>
            <RouterLink to="/brinquedos">Brinquedos</RouterLink>
            <RouterLink to="/higiene">Higiene</RouterLink>
            <RouterLink to="/acessorios">Acessórios</RouterLink>
        </nav>
    </header>

</template>

<style scoped>
</style>