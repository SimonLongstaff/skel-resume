<script>
    import Icon from "@iconify/svelte";
</script>

<div class="flex w-full">
    <div class="card w-full variant-glass-secondary">
        <div class="card-header">
            <h1 class="card-title">Fullstack Software Engineer</h1>
        </div>
        <div class="p-4 pt-2">
            <div class="profile-details">
                <Icon icon="carbon:at"/>
                <span class="icon-text">Crane  Electronics</span>
            </div>
            <div class="profile-details">
                <Icon icon="carbon:calendar"/>
                <span class="icon-text">March 2021 - August 2023</span>
            </div>
            <div class="profile-details">
                <Icon icon="carbon:location"/>
                <span class="icon-text">West Midlands, UK</span>
            </div>

            <ul>
                <li> Collaborated as part of a small Agile development team, working primarily on IoT devices and
                    locally installed web apps utilized by Toyota, Aston Martin, Norton Motorcycles, and other
                    high-profile clients.
                </li>
                <li>
                    Design and develop software solutions across diverse platforms, including mobile apps, responsive
                    web apps, web APIs on embedded hardware, and server/client software with data synchronization
                    functionality.
                </li>
                <li>Leveraged JavaScript, TypeScript, C#, and Python within frameworks such as React and Microsoft .Net.
                </li>
                <li>Spearhead initiatives to modernize the production process, including transitioning from SVN to Git,
                    introducing Git-flow, and implementing CI/CD processes.
                </li>
                <li>Advocate for the adoption of modern technologies such as TypeScript and standardized unit testing
                    methodologies
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="postcss">
    .card {
        @apply p-4;
    }

    .card-title {
        @apply font-bold text-primary-500;
    }

    .profile-details {
        @apply flex items-center text-primary-400 text-2xl;
    }

    .icon-text {
        @apply ml-2;
    }

    h1 {
        @apply text-4xl;
    }

    ul {
        @apply list-disc list-inside;
        @apply p-5;
    }

    li {
        @apply mb-2 text-xl;
    }
</style>