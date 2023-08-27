<script lang="ts">
    import Icon from '@iconify/svelte';
    import SkillList from "./SkillList.svelte";
</script>

<div class="card variant-glass-secondary">
    <header class="card-header flex-1">
        <img alt="profile" class="card-header-image" src="profile.jpg">
    </header>


    <section class="p-4 flex-1">
        <h1>Simon Longstaff</h1>
        <h2>Software Engineer</h2>
        <div class="profile-details">
            <Icon icon="carbon:location"/>
            <span class="icon-text">Nakano, Tokyo</span>
        </div>
        <div class="profile-details">
            <Icon icon="carbon:email"/>
            <span class="icon-text">
                <a href="mailto:simonlngstaff@gmail.com">
                    simonlngstaff@gmail.com
                </a>
            </span>
        </div>


        <p class="profile">I am a software engineer with a passion for creating and building new
            things. I have a strong interest in the latest technologies and am always looking to learn new things. I
            have a strong background in JavaScript and TypeScript and have experience working with React, React
            Native
            and Node.js. I also have experience working with C#, SQL, and Python.
        </p>
        <p class="profile">
            I have proven experience working in an agile environment and have experience working with both Kanban
            and
            Scrum. My work has focused on building web solutions for IoT devices used in the industrial sector.

            I have recently moved to Tokyo and am looking for a new opportunity to grow and learn.
        </p>

        <SkillList/>
    </section>

</div>

<style lang="postcss">

    h1 {
        @apply text-6xl font-bold;
        @apply text-primary-300;
    }

    h2 {
        @apply text-4xl font-bold;
        @apply text-primary-400;
    }

    p {
        @apply text-3xl;
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    p.profile {
        font-size: 1rem;
        margin: 10px;
        @apply text-2xl;
    }

    div.profile-details {
        display: flex;
        margin: 5px;
        @apply text-2xl;
        @apply text-primary-400;
        align-items: center;

    }


    header.card-header {
        padding: 0;
        margin: 0;
    }

    div.card {
        display: flex;
        flex-direction: row;
    }

    .icon-text {
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        div.card {
            flex-direction: column;
            max-height: none;
            max-width: 95vw;
        }
    }


</style>