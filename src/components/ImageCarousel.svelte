<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import {getModalStore, type ModalSettings} from "@skeletonlabs/skeleton";

    export let images: string[] = [];
    let currentImageIndex = 0;

    let interval: any;

    onMount(() => {
        interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 5000); // Change image every 5 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    const handleImageClick = () => {
        const modal: ModalSettings = {
            type: 'alert',
            image: images[currentImageIndex],
            modalClasses: 'w-modal-wide',
        }
        getModalStore().set([modal]);
    };
</script>

<style>
    .image-gallery-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.5s ease-in-out;
    }

    .gallery-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: opacity 0.5s ease-in-out;
    }

    .dots-container {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 5px;
    }

    .dot {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;
        display: inline-block;
    }

    .dot.active {
        background-color: #008cff;
    }

</style>

<div class="image-gallery-container" on:click={handleImageClick}>
    <img alt={`Image ${currentImageIndex}`} class="gallery-image" src={images[currentImageIndex]}/>
    <div class="dots-container">
        {#each images as _, index (index)}
            <span class="dot {index === currentImageIndex ? 'active' : ''}"/>
        {/each}
    </div>
</div>

