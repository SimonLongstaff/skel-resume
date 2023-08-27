<script lang="ts">
    export let colour = '';
    export let icons: string[] = [];
</script>

<span class="flex flex-col overflow-hidden">
    <div class="scrolling-icon-cloud">
        {#each icons as icon}
             <span class="card variant-glass-{colour}">
            <i class="devicon-{icon}-plain"></i>
        </span>
        {/each}
    </div>
</span>

<style>
    span.card {
        height: 100%;
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        margin: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    i {
        font-size: 4rem;
    }

    .scrolling-icon-cloud {
        display: flex;
        width: 100vw;
        align-content: flex-end;
        justify-content: center;
        margin: 10px;
        overflow: hidden;
    }


    @media (max-width: 768px) {
        .scrolling-icon-cloud {
            margin: 0;
        }

        i {
            font-size: 3rem;
        }
    }

</style>