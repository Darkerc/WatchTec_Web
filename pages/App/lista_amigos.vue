<template>
<div>
    <div class="something">
        <img src="http://placekitten.com/400/200" alt="">
        <div class="arrow-right">
            <span>{{ title }}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: "Application",
    async asyncData(contex) {
        const {
            title
        } = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    title: "Tera 1"
                })
            }, 3000);
        });

        return {
            title
        }
    }
}
</script>

<style lang="scss">
.something {
    height: 200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 400px;
}

.arrow-right {
    background-color: #444;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.8);
    height: 100px;
    left: -50px;
    position: absolute;
    top: -50px;
    width: 100px;
    transform: rotate(-45deg);
}

.arrow-right span {
    color: #f5f5f5;
    font-family: sans-serif;
    font-size: 1.005em;
    left: 28px;
    top: 78px;
    position: absolute;
    width: 80px;
}
</style>
