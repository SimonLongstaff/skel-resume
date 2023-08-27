<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import {getModalStore, type ModalSettings} from "@skeletonlabs/skeleton";

    export let images: string[] = [];
    let currentImageIndex = 0;
    let showModal = false;

    let interval;

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
        getModalStore().trigger(modal)
    };

    const handleNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    const handlePrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    };

    const handleCloseModal = () => {
        showModal = false;
        interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 5000); // Change image every 5 seconds
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

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 100%;
        max-height: 100vh;
        text-align: center;
    }

    .modal-arrows {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .arrow-button,
    .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 32px;
        color: white;
        padding: 10px;
        transition: opacity 0.3s ease-in-out;
        outline: none;
    }

    .arrow-button:hover,
    .close-button:hover {
        opacity: 0.8;
    }

    .close-button {
        margin-top: auto;
        background: red;
        font-size: 24px;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 10px;
    }

    .modal-image {
        max-width: 100%;
        max-height: 100vh;
        object-fit: contain;
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

{#if showModal}
    <div class="modal-overlay">
        <div class="modal-content">
            <div class="modal-arrows">
                <button class="arrow-button" on:click={handlePrevImage}>&larr;</button>
                <button class="close-button" on:click={handleCloseModal}>
                    &times;
                </button>
                <button class="arrow-button" on:click={handleNextImage}>&rarr;</button>
            </div>
            <img class="modal-image" src={images[currentImageIndex]} on:click={handleCloseModal}
                 alt={`Image ${currentImageIndex}`}/>
        </div>
    </div>
{/if}
