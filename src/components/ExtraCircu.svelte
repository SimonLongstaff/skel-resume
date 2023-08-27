<script>
    import ProjectCard from "./ProjectCard.svelte";
</script>

<ProjectCard
        images={["extra/js1.jpg", "extra/js2.jpg", "extra/js3.jpg", "extra/js4.jpg", "extra/js5.jpg"]}
        subtitle="General Secretary (2018-2019) @ University of Bristol"
        title="Japanese Society"
>
    <ul>
        <li>
            Elected as General Secretary of the Japanese Society in my final year of undergraduate study
        </li>
        <li>
            Helped incoming Japanese students settle into life in Bristol
        </li>
        <li>
            Assisted temporary transfer students with the transition from Japanese to British university life
        </li>
        <li>
            Organised and hosted weekly language exchange events for Japanese and English speakers
        </li>
        <li>
            Helped organised weekly Japanese language lessons for beginners
        </li>
        <li>
            Organised trips to Japanese restaurants and cultural events
        </li>
        <li>
            Organised a trip to Japan for 10+ students
        </li>
    </ul>
</ProjectCard>


<style lang="postcss">
    ul {
        @apply list-disc list-inside pt-4;
    }

    li {
        @apply mb-2 text-xl;
    }
</style>