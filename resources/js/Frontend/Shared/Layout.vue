<template>
    <Header/>
    <main>
        <slot/>
    </main>
    <Footer/>
</template>

<script setup>
import Header from './Header'
import Footer from "./Footer";
</script>
