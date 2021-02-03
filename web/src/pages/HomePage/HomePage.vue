<template>
    <div id="top">
        <img src="/src/assets/resources/CatWikiLogo.svg">
    </div>
    <div id="featured">
        <img class="background" src="/src/assets/resources/HeroImagelg.png">
        <div class="float">
            <img src="/src/assets/resources/CatwikiLogo.svg">
            <h4>Get to know more about your cat breed</h4>
            <div class="search-box input-group mb-3 bg-white">
                <input type="text" class="form-control">
                <button type="button" class="btn"><i class="bi bi-search"></i></button>
            </div>
        </div>
        <div class="more">
            <h3>66+ Breeds For you to discover</h3>
            <div class="see-more">
                <a>See more <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
        <div class="top-4">
            <div class="card">
                <div class="img"></div>
                <h4 class="title">Bengal</h4>
            </div>
            <div class="card">
                <div class="img"></div>
                <h4 class="title">Savannah</h4>
            </div>
            <div class="card">
                <div class="img"></div>
                <h4 class="title">Norwegian Forest Cat</h4>
            </div>
            <div class="card">
                <div class="img"></div>
                <h4 class="title">Selkirk Rex</h4>
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
            <div>
                <img src="\src\assets\resources\image 2.png">
                <img src="\src\assets\resources\image 1.png">
            </div>
            <div>
                <img src="\src\assets\resources\image 3.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomePage"
}
</script>
<style lang="scss" scoped>
.container {
    #top {
        display: flex;
        justify-content: start;
    }

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
            margin: 5rem;
            display: flex;
            width: 30%;
            flex-direction: column;
            align-items: start;
            img {
                width: 15rem;
                filter: grayscale(100%) brightness(10);
            }
            h4 {
                color: white;
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
            padding: 5rem;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            >h3 {
                width: 50%;
                font-size: 3rem;
                color: #291507;
            }
            .see-more {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                width: 50%;
            }
        }
        .top-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2rem;
            padding: 5rem;
            padding-top: 0;
            .card {
                background-color: transparent;
                border: none;
                .img {
                    background: url("/src/assets/resources/image 1.png");
                    background-size: cover;
                    width: 100%;
                    padding-top: 100%;
                    border-radius: 2rem;
                    overflow: hidden;
                }
                .title {
                    font-size: 1rem;
                    color: #291507;
                    font-weight: bold;
                    margin-top: 1rem;
                }
            }
        }
    }
    .grid2 {
        padding: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .left {
            color: #291507;
            padding-right: 2.5rem;
            h3 {
                font-size: 3.5rem;
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
            img {
                width: 100%;
            }
            div:first-child {
                display: grid;
                grid-gap: 1rem;
                align-items: end;
                img:last-child {
                    width: 80%;
                    justify-self: end;
                }
            }
        }
    }
}
</style>