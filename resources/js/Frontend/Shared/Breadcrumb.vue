<template>
    <section class="section section--head">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <h1 class="section__title section__title--head">{{ lastCrumbName() }}</h1>
                </div>

                <div class="col-12 col-xl-6">
                    <ul class="breadcrumb">
                        <li
                            class="breadcrumb__item"
                            v-for="(crum, index) in crums"
                            :class="{ 'breadcrumb__item--active': isLastCrumb(index) }"
                            :key="index"
                        >
                            <Link :href="crum.url" v-text="crum.name" v-if="!isLastCrumb(index)"/>
                            <span v-text="crum.name" v-if="isLastCrumb(index)"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {Link} from "@inertiajs/inertia-vue3";

const props = defineProps({
    crums: Array
});

const isLastCrumb = (index) => index === props.crums.length - 1
const lastCrumbName = () => props.crums[props.crums.length - 1].name
</script>
