<template>
    <div>
        <h2 class="title">Top 10 most searched breeds</h2>
        <div class="list" v-if="!loading && list">
            <div v-for="item in list" :key="item" class="item">
                <div class="img">
                    <div :style="'background-image: url(\''+item.image.url+'\')'"></div>
                </div>
                <div class="description">
                    <h3>{{item.name}}</h3>
                    <p>{{item.description}}</p>
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
        <div class="loading" v-if="!loading && !list">
            No data!
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
    name: "MostSearched",
    data: () => ({
        list: null,
        loading: true,
        toast: {
            obj: null,
            message: null,
        },
    }),
    methods: {
        getTop10: function() {
            axios.get("http://host.docker.internal:8082/api/breeds/", {responseType: 'json'})
                .then((response) => {
                    this.list = response.data.slice(0, 10)
                    console.log(this.list)
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
    },
    mounted: function() {
        this.getTop10()
    }
}
</script>
<style lang="scss" scoped>
h2.title {
    font-weight: bold;
    color: #291507;
    margin-top: 2rem;
}
.list {
    margin: 4rem 0;
    div.item {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: 3%;
        margin-bottom: 3rem;
        .img {
            div {
                width: 100%;
                padding-top: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 10%;
            }
        }
        .description {
            h3 {
                font-weight: bold;
            }
            color: #291507;
        }
    }
}

.loading {
    min-height: 75vh;
    display: flex;
    justify-content: center; 
    align-items: center;
}
</style>