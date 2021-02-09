<template>
    <div>
        <div id="featured">
            <img class="background" src="/resources/HeroImagelg.png">
            <div class="float">
                <img src="/resources/CatwikiLogo.svg">
                <h4>Get to know more about your cat breed</h4>

                <!-- Search for mobile -->
                <div id="search-mobile">
                    <div class="search-trigger-mobile" v-on:click="displaySearchBoxMobile">
                        Search <i class="bi bi-search"></i>
                    </div>
                    <div id="search-dialog-mobile" class="modal fade" data-bs-backdrop="static" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem">
                                        <button type="button" class="btn-close" v-on:click="blurSearchBoxMobile"></button>
                                    </div>
                                    <div class="search-box-mobile input-group mb-3 bg-white">
                                        <input type="text" id="search-input-mobile" class="form-control"
                                            placeholder="Enter your breed"
                                            v-on:keyup.enter="search">
                                        <button type="button" class="btn" v-on:click="search">
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </div>
                                    <!-- Search results -->
                                    <div id="search-results" class="search-results card" v-if="searchResults.display">
                                        <div class="card-body">
                                            <ul v-if="!searchResults.loading && searchResults.values.length">
                                                <li v-for="i in searchResults.values" :key="i"
                                                    v-on:click="blurSearchBoxMobile">
                                                    <router-link :to="'/info/'+i.id">{{i.name}}</router-link>
                                                </li>
                                            </ul>
                                            <ul v-if="!searchResults.loading && !searchResults.values.length">
                                                <li>No data</li>
                                            </ul>
                                            <div v-if="searchResults.loading" style="display: flex; justify-content: center">
                                                <div class="spinner-border" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <!-- Search for desktop -->
                <div id="search-desktop">
                    <div class="search-box input-group mb-3 bg-white">
                        <input type="text" id="search-input" class="form-control"
                            placeholder="Enter your breed"
                            v-on:keyup.enter="search"
                            v-on:blur="blurSearchBox"
                            v-on:focus="displaySearchBox">
                        <button type="button" class="btn" v-on:click="search">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                    <div id="search-results" class="search-results card" v-if="searchResults.display">
                        <div class="card-body">
                            <ul v-if="!searchResults.loading && searchResults.values.length">
                                <li v-for="i in searchResults.values" :key="i">
                                    <router-link :to="'/info/'+i.id">{{i.name}}</router-link>
                                </li>
                            </ul>
                            <ul v-if="!searchResults.loading && !searchResults.values.length">
                                <li>No data</li>
                            </ul>
                            <div v-if="searchResults.loading" style="display: flex; justify-content: center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <h2>Most Searched Breeds</h2>
                <div>
                    <h3><router-link to="/most-searched">66+ Breeds For you to discover</router-link></h3>
                    <div class="see-more">
                        <router-link to="/most-searched">See more <i class="bi bi-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
            <div class="top-4">
                <div class="card" v-for="i in top4" :key="i.id">
                    <router-link :to="'/info/'+i.id">
                        <div class="img" :style="'background: url('+i.image.url+')'"></div>
                    </router-link>
                    <h4 class="title"><router-link :to="'/info/'+i.id">{{i.name}}</router-link></h4>
                </div>
                <div class="card loading" v-for="i in 4" :key="i">
                    <div class="img"></div>
                    <h4 class="title"></h4>
                </div>
            </div>
        </div>
        <div class="grid2">
            <div class="left">
                <h3>Why should you have a cat?</h3>
                <span>
                    Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                </span>
                <a>Read more <i class="bi bi-arrow-right"></i></a>
            </div>
            <div class="right">
                <img src="/resources/image2.png">
                <img src="/resources/image1.png">
                <img src="/resources/image3.png">
            </div>
        </div>

        <!-- Toast with danger message -->
        <div id="danger-toast" class="toast bg-danger"
            role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                {{toast.message}}
            </div>
            <button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</template>
<script>
import * as axios from "axios"
import * as bootstrap from "bootstrap"

export default {
    name: "HomePage",
    data: () => ({
        top4: [],
        searchResults: {
            display: false,
            loading: false,
            values: [],
        },
        searchBoxMobile: null,
        toast: {
            obj: null,
            message: null,
        },
    }),
    methods: {
        getTop4: function() {
            axios.get("/api/breeds/", {responseType: 'json'})
                .then((response) => {
                    this.top4 = response.data.slice(0, 4)
                })
                .catch(() => {
                    this.toast.obj = new bootstrap.Toast(document.getElementById("danger-toast"))
                    this.toast.message = "Error while requesting"
                    this.toast.obj.show()
                })
                .finally(() => {
                    let loadingEl = document.querySelectorAll(".top-4 .loading")
                    // Remove loading elements
                    for(let el of loadingEl) {
                        el.parentNode.removeChild(el);
                    }
                })
        },
        search(e) {
            // Get value
            let value
            if(e) {
                value = e.target.value
            }
            else {
                value = document.getElementById("search-input").value
            }

            // Catch null value
            if (value == "") {
                return;
            }

            // Search progress
            this.searchResults.display = true
            this.searchResults.loading = true
            axios.get("/api/search/?q="+value, {responseType: 'json'})
                .then((response) => {
                    this.searchResults.values = response.data
                })
                .catch(() => {
                    this.toast.obj = new bootstrap.Toast(document.getElementById("danger-toast"))
                    this.toast.message = "Error while requesting"
                    this.toast.obj.show()
                })
                .finally(() => {
                    this.searchResults.loading = false
                })
        },
        blurSearchBox: function(e) {
            setTimeout(() => {
                this.searchResults.display = false
            }, 100)
        },
        displaySearchBox: function() {
            if(this.searchResults.values.length) {
                this.searchResults.display = true
            }
        },
        displaySearchBoxMobile: function() {
            this.searchBoxMobile = new bootstrap.Modal(document.getElementById('search-dialog-mobile'), {
                backdrop: false
            })
            this.searchBoxMobile.show()
        },
        blurSearchBoxMobile: function() {
            if(this.searchBoxMobile) {
                this.searchBoxMobile.hide()
            }
        },
    },
    created: function() {
        this.getTop4()
    },

}
</script>
<style lang="scss" scoped>
@import "./HomePage.scss";
</style>