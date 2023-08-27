<script lang="ts">

    import ImageCarousel from "./ImageCarousel.svelte";

    export let title = ''
    export let subtitle = ''
    export let reverseImage = false
    export let images: string[] = []
</script>

<div class="card variant-glass-secondary">


    <div class="card-body {reverseImage ? 'reverse' : ''}">
        <div class="info">
            <h3 class="card-title">{title}</h3>
            <h4 class="card-subtitle mb-2 text-muted">{subtitle}</h4>
            <slot/>
        </div>
        <ImageCarousel {images}/>
    </div>

</div>

<style lang="postcss">

    h3 {
        @apply text-4xl font-bold text-primary-500;
    }

    h4 {
        @apply text-xl font-bold text-primary-300;
    }

    .card {
        margin: 2rem 0;
        width: 100%;
    }

    .card-header {
        padding: 0.5rem 1rem;
    }

    .card-title {
        margin-bottom: 0;
    }

    .card-body {
        display: flex;
        width: 100%;
    }

    .reverse {
        flex-direction: row-reverse;
    }

    .info {
        padding: 1rem;
        margin: 1rem;
    }

    @media (max-width: 768px) {
        .card-body {
            flex-direction: column;
        }
    }
</style>