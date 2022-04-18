<template>
    <div class="container py-4">
        <breadcrumb :crums="crums" />
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                <h1 v-text="post.title" class="fw-normal"/>
                <div class="mt-3">
                    <span class="text-muted small">
                        <i class="far fa-calendar-alt me-1"></i>
                        <span v-text="new Date(post.created_at).toLocaleDateString('vi')"/>
                    </span>
                    <span class="mx-3">|</span>
                    <span class="text-muted small">
                        <i class="far fa-folder-open me-1"></i>
                        Danh mục: <span v-text="post.category.name"/>
                    </span>
                </div>
                <div class="mt-3">
                    {{ post.content }}
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12"></div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "../../Shared/Breadcrumb";
export default {
    name: "Show",
    components: {Breadcrumb},
    props: {
        post: Object
    },
    data() {
        return {
            crums: [
                {
                    name: "Trang chủ",
                    url: "/",
                },
                {
                    name: "Tin tức",
                    url: "/blog",
                },
                {
                    name: this.post.title,
                }
            ],
        }
    }
}
</script>

<style scoped>
</style>
