<template>
    <div>
        <div id="featured">
            <img class="background" src="/resources/HeroImagelg.png">
            <div class="float">
                <img src="/resources/CatwikiLogo.svg">
                <h4>Get to know more about your cat breed</h4>
                <div class="search-box input-group mb-3 bg-white">
                    <input type="text" class="form-control">
                    <button type="button" class="btn"><i class="bi bi-search"></i></button>
                </div>
            </div>
            <div class="more">
                <h2>Most Searched Breeds</h2>
                <div>
                    <h3>66+ Breeds For you to discover</h3>
                    <div class="see-more">
                        <a>See more <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="top-4">
                <div class="card" v-for="i in top4" :key="i.id">
                    <div class="img" :style="'background: url('+i.image.url+')'"></div>
                    <h4 class="title">{{i.name}}</h4>
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
                <a href="">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
            <div class="right">
                <img src="/resources/image2.png">
                <img src="/resources/image1.png">
                <img src="/resources/image3.png">
            </div>
        </div>
    </div>
</template>
<script>
import * as axios from "axios"

export default {
    name: "HomePage",
    data: () => ({
        top4: [],
    }),
    methods: {
        getTop4: function() {
            axios.get("http://host.docker.internal:8082/api/breeds/", {responseType: 'json'})
                .then((response) => {
                    console.log(response)
                    this.top4 = response.data.slice(0, 4)
                    let loadingEl = document.querySelectorAll(".top-4 .loading")
                    console.log(loadingEl)
                    for(let el of loadingEl) {
                        el.parentNode.removeChild(el);
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    created: function() {
        this.getTop4()
    },

}
</script>
<style lang="scss" scoped>
#featured {
    border-radius: 3rem;
    overflow: hidden;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background: #E3E1DC;
    .background {
        width: 100%;
    }
    .float {
        position: absolute;
        margin: 5%;
        display: flex;
        width: 30%;
        flex-direction: column;
        align-items: start;
        img {
            width: 75%;
            filter: grayscale(100%) brightness(10);
        }
        h4 {
            color: white;
            font-size: 2.5vw;
        }
        .search-box {
            border-radius: 1rem;
            overflow: hidden;
            button, input {
                outline: none!important;
                box-shadow: none!important;
                border: none!important;
            }
            butto i {
                color: black;
            }
        }
    }
    .more {
        margin: 5%;
        >h2 {
            color: #291507;
            font-weight: bold;
            width: 100%;
            margin-bottom: 3rem;
            font-size: calc(1rem + 1.5vw);
        }
        >h2:after {
            content: '';
            display: block;
            width: 10%;
            border-bottom: .3rem solid #291507;
        }
        >div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media only screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }
            >h3 {
                font-size: calc(1rem + 2.5vw);
                color: #291507;
                font-weight: bold;
            }
            .see-more {
                display: grid;
                align-items: end;
                justify-content: end;
                @media only screen and (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
    .top-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        padding: 5%;
        padding-top: 0;
        @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        .card {
            background-color: transparent;
            border: none;
            .img {
                // background: url("/resources/image1.png");
                background-size: cover!important;
                width: 100%;
                padding-top: 100%;
                border-radius: 2vw;
                overflow: hidden;
            }
            .title {
                font-size: 1rem;
                color: #291507;
                font-weight: bold;
                margin-top: 1rem;
            }
        }
        .loading {
            .img {
                background: #c0c0c0;
                background: linear-gradient(to right, #c0c0c0 0%,#acacac 50%, #c0c0c0 100%);
                animation: contentload 1.25s linear infinite;
                animation-fill-mode: forwards;
                background-size: 300% 100%;
            }
            @keyframes contentload {
                0% {background-position: 0 0}
                100% {background-position: -300% 0}
            }
        }
    }
}

.grid2 {
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    .left {
        color: #291507;
        h3 {
            font-size: calc(1rem + 3vw);
            font-weight: bold;
        }
        span {
            display: block;
            margin: 2rem 0;
        }
        a {
            color: #291507;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
        }
    }
    .right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        grid-template-rows: min-content;
        img {
            width: 100%;
        }
        img:nth-child(2) {
            grid-area: span 2;
        }
        img:nth-child(3) {
            width: 80%;
            justify-self: end;
        }
    }
}
</style>