<template>
    <div class="catalog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="catalog__nav">
                        <div class="catalog__select-wrap">
                            <select class="catalog__select" v-model="form.genres">
                                <option value="">Thể loại</option>
                                <option value="Action/Adventure">Action/Adventure</option>
                                <option value="Animals">Animals</option>
                                <option value="Animation">Animation</option>
                                <option value="Biography">Biography</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Dance">Dance</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Education">Education</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="History">History</option>
                                <option value="Horror">Horror</option>
                                <option value="Independent">Independent</option>
                                <option value="International">International</option>
                                <option value="Kids & Family">Kids & Family</option>
                                <option value="Medical">Medical</option>
                                <option value="Military/War">Military/War</option>
                                <option value="Music">Music</option>
                                <option value="Mystery/Crime">Mystery/Crime</option>
                                <option value="Nature">Nature</option>
                                <option value="Paranormal">Paranormal</option>
                                <option value="Politics">Politics</option>
                                <option value="Racing">Racing</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi/Horror">Sci-Fi/Horror</option>
                                <option value="Science">Science</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Science/Nature">Science/Nature</option>
                                <option value="Travel">Travel</option>
                                <option value="Western">Western</option>
                            </select>
                            <select class="catalog__select" v-model="form.countries">
                                <option value="">Quốc gia</option>
                                <option value="1">Mỹ</option>
                                <option value="2">Pháp</option>
                                <option value="3">Đức</option>
                                <option value="4">Anh</option>
                                <option value="5">Nhật Bản</option>
                                <option value="6">Hàn Quốc</option>
                                <option value="7">Trung Quốc</option>
                                <option value="8">Nga</option>
                                <option value="9">Thái Lan</option>
                                <option value="10">Úc</option>
                                <option value="11">Malaysia</option>
                                <option value="12">Singapore</option>
                                <option value="13">Australia</option>
                                <option value="14">Canada</option>
                            </select>
                            <select class="catalog__select" v-model="form.years">
                                <option value="">Năm phát hành</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                            </select>
                        </div>
                        <div class="slider-radio">
                            <input type="radio" v-model="form.grade" id="featured" value="featured">
                            <label for="featured">Nổi bật</label>
                            <input type="radio" v-model="form.grade" id="popular" value="popular">
                            <label for="popular">Phổ biến</label>
                            <input type="radio" v-model="form.grade" id="newest" value="newest">
                            <label for="newest">Mới nhất</label>
                        </div>
                    </div>

                    <div class="row row--grid">
                        <VideoItem v-for="(movie) in movies" :movie="movie"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Paginate :links="[]"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Paginate from '../Shared/Paginate';
import VideoItem from '../Shared/VideoItem';
import {pickBy} from "lodash";

export default {
    components: {
        Paginate,
        VideoItem
    },
    props: {
        movies: Array,
        filters: Object
    },
    data() {
        return {
            form: {
                genres: this.filters.genres || '',
                countries: this.filters.countries || '',
                years: this.filters.years || '',
                grade: this.filters.grade || 'newest'
            },
        }
    },
    watch: {
        form: {
            handler() {
                this.$inertia.get('/', pickBy(this.form), { preserveState: true })
            },
            deep: true
        }
    }
}
</script>
