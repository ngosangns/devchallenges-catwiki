<template>
    <div>
        <div v-if="!loading && value">
            <div class="info">
                <div class="img">
                    <div :style="'background-image: url('+value.info.url+')'"></div>
                </div>
                <div class="detail">
                    <h2>{{value.info.breeds[0].name}}</h2>
                    <p>{{value.info.breeds[0].description}}</p>
                    <div>
                        <p><b>Temperament</b>: {{value.info.breeds[0].temperament}}</p>
                        <p><b>Origin</b>: {{value.info.breeds[0].origin}}</p>
                        <p><b>Life Span</b>: {{value.info.breeds[0].life_span}} years</p>
                    </div>
                </div>
            </div>

            <div class="other-photos">
                <h3>Other photos</h3>
                <div class="grid">
                    <div v-for="i in value.other_images" :key="i">
                        <div class="img" :style="'background-image: url('+i.url+')'"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div class="loading" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <!-- No data -->
        <div class="loading" v-if="!loading && !value">
            <div class="alert alert-danger" role="alert">
                No data!
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
import * as axios from 'axios'

export default {
    name: "InfoPage",
    props: ['id'],
    data: () => ({
        loading: true,
        value: null,
        toast: {
            obj: null,
            message: null,
        },
    }),
    mounted: function() {
        axios.get("/api/breeds/"+this.id, {responseType: 'json'})
            .then((response) => {
                if(response.data.info.length) {
                    this.value = response.data
                    this.value.info = this.value.info[0]
                }
                console.log(response.data)
            })
            .catch(() => {
                this.toast.obj = new bootstrap.Toast(document.getElementById("danger-toast"))
                this.toast.message = "Error while requesting"
                this.toast.obj.show()
            })
            .finally(() => {
                this.loading = false
            })
    },
}
</script>

<style lang="scss" scoped>
@import "./InfoPage.scss";
</style>