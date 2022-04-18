<template>
    <div class="container py-4">
        <Breadcrumb :crums="crums"/>
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <PostItem v-for="post in posts.data" :post="post"/>
            </div>
        </div>
        <div class="mt-3">
            <Paginate :links="posts.links"/>
        </div>
    </div>
</template>

<script setup>
import Paginate from "../../Shared/Paginate";
import PostItem from "../../Shared/PostItem";
import Breadcrumb from "../../Shared/Breadcrumb";
import {defineProps} from "vue";

const props = defineProps({
    posts: Object
});

const crums = [
    {name: "Trang chủ", url: "/"},
    {name: "Tin tức"}
];
</script>
