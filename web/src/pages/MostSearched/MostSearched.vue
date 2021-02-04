<template>
    <div>
        <h2 class="title">Top 10 most searched breeds</h2>
        <div class="list">
            <div v-for="item in list" :key="item" class="item">
                <div class="img">
                    <div :style="'background-image: url(\''+item.img+'\')'"></div>
                </div>
                <div class="description">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MostSearched",
    data: () => ({
        list: [
            {
                title: 'Bengal',
                img: '/resources/image1.png',
                desc: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
            },
            {
                title: 'Bengal',
                img: '/resources/image1.png',
                desc: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
            },
            {
                title: 'Bengal',
                img: '/resources/image1.png',
                desc: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
            },
        ],
    }),
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
</style>