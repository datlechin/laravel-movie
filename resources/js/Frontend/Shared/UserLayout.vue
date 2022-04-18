<template>
    <Breadcrumb :crums="crums"/>
    <div class="catalog catalog--page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ProfileBar/>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="tab-content">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Link, usePage} from "@inertiajs/inertia-vue3";
import Breadcrumb from "./Breadcrumb";
import {computed} from "vue";
import ProfileBar from "./ProfileBar";

const crums = [
    {
        name: "Trang chủ",
        url: "/"
    },
    {
        name: "Thông tin cá nhân"
    }
];

const user = computed(() => usePage().props.value.auth.user);
</script>
