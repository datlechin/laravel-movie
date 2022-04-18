<template>
    <div class="blog-item mb-4">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                <Link :href="`/blog/${post.slug}`">
                    <img :src="post.image" :alt="post.title" class="img-fluid rounded">
                </Link>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                <Link :href="`/blog/${post.slug}`" class="text-decoration-none fs-5"
                      v-text="post.title"/>
                <div class="mt-1">
                    <span class="text-muted small">
                        <i class="far fa-calendar-alt me-1"></i>
                        <span v-text="new Date(post.created_at).toLocaleDateString('vi')"/>
                    </span>
                    <span class="mx-3">|</span>
                    <span class="text-muted small">
                        <i class="far fa-folder-open me-1"></i>
                        Danh mục: <span v-text="post.category.name"/>
                    </span>
                    <p class="mt-2 fs-1-2 text-muted small" v-text="post.excerpt"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {defineProps} from "vue";

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped>
.blog-item {
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
}

.blog-item img {
    transition: 0.4s;
}

.blog-item img:hover {
    transform: scale(1.1);
}
</style>
