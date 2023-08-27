<script>
    import HeroHeading from "../components/HeroHeading.svelte";
    import Profile from "../components/Profile.svelte";
    import Education from "../components/Education.svelte";
    import WorkHistory from "../components/WorkHistory.svelte";
    import ProjectList from "../components/ProjectList.svelte";
    import {initializeStores, Modal} from "@skeletonlabs/skeleton";
    import ExtraCircu from "../components/ExtraCircu.svelte";

    initializeStores();

    const GetYear = () => {
        const date = new Date();
        return date.getFullYear();
    }
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<Modal/>
<div class="container h-full mx-auto flex justify-center items-center">
    <a id="top">
        <HeroHeading/>
    </a>

    <a id="profile">
        <Profile/>
        <Education/>
    </a>

    <h1 id="work">Work History</h1>
    <WorkHistory/>

    <h1 id="projects">Projects</h1>
    <ProjectList/>

    <h1 id="extra">Extra Curricular</h1>
    <ExtraCircu/>
    <div class="footer">
        Simon Longstaff © {GetYear()}
    </div>
</div>

<style lang="postcss">
    h1 {
        padding: 2rem 0;
        @apply text-6xl font-extrabold text-tertiary-300;
    }

    .container {
        flex-direction: column;
    }

    .footer {
        padding: 2rem 0;
        @apply text-sm font-extrabold text-gray-50;
    }
</style>
