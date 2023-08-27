<script lang="ts">
    import {onMount} from "svelte";
    import Technologies from "./Technologies.svelte";

    let yearsExperience = 0;

    onMount(() => {
        yearsExperience = ((new Date().getFullYear() - 2021) * 12 + new Date().getMonth()) / 12;
    });
</script>

<div class="hero-div">
    <img alt="" src="cityscape.jpg"/>

    <h1 class="gradient-heading text-5xl font-bold">
        Full Stack Developer with {yearsExperience.toFixed(1)} years experience
    </h1>
    <h2 class="text-3xl font-bold gradient-subheading">
        Tokyo based software engineer
    </h2>
    <Technologies/>
</div>

<style lang="postcss">
    .gradient-heading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-primary-500 via-primary-400 to-secondary-600;

        margin: 10px;
    }

    .gradient-subheading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-primary-300 via-primary-400 to-secondary-600;

        margin: 10px;
    }

    .hero-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        width: 100%;
    }

    img {
        object-fit: cover;
        height: 100vh;
        width: 200%;
        position: absolute;
        z-index: -1;
        filter: blur(5px) opacity(0.3);
        animation: panImage 60s linear infinite;
    }

    @media (max-width: 768px) {
        img {
            zoom: 1;
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        img {
            animation: panImage 60s linear infinite;
        }
    }

    @keyframes panImage {
        from {
            background-position: 0% 0%;
        }
        to {
            background-position: 100% 100%;
        }
    }
</style>
