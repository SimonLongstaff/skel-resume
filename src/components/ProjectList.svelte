<script>
    import ProjectCard from "./ProjectCard.svelte";
</script>

<ProjectCard
        images={["curatas/home.png", "curatas/Guidance.png", "curatas/Sequence.png", "curatas/sequence2.png", "curatas/results 2.png",]}
        subtitle={"A comprehensive suite of web applications for managing and tracking production data in factory settings."}
        title={"Curatas"}>
    <ul>
        <li>
            A comprehensive suite of web applications including a Windows service, a single page application, and a REST
            API.
        </li>
        <li>
            Microservice architecture
        </li>
        <li>
            Automated critical production information tracking in factory settings.
        </li>
        <li>
            Utilized C# and the .NET Framework, JavaScript / Typescript, REST API, and SQL relational databases.
        </li>
        <li>
            OpenAPI/Swagger Documentation
        </li>
    </ul>
</ProjectCard>
<ProjectCard
        images={["android/bt-app.jpg"]}
        reverseImage={true}
        subtitle="An Android application for controlling a custom Bluetooth device."
        title="Android Wrench Control">
    <ul>
        <li>
            Android application using React Native to establish Bluetooth connectivity with smart tools for efficient
            data recording and processing
        </li>
        <li>
            Streamlined fieldwork, such as wheel replacements on heavy goods vehicles, by ensuring precise lug nut
            tightening according to specifications and generating PDF reports.
        </li>
        <li>
            Utilized React Native, JavaScript, SQLite, and Java.
        </li>
    </ul>
</ProjectCard>
<ProjectCard
        images={["api-nest/api1.png", "api-nest/api2.png" ]}
        subtitle="Open source REST API to display my coding style and ability."
        title="Node.js REST API"
>
    <ul>
        <li>
            Node.js REST API for a web application that allows users to create, read, update, and delete data.
        </li>
        <li>
            Fully Documented with OpenAPI
        </li>
        <li>
            Authenticated users with JSON Web Tokens (JWT)
        </li>
        <li>
            Fully tested with Jest and Supertest. CI/CD with GitHub Actions.
        </li>
        <li>
            Utilized TypeScript, Node.js, Nest.js, and PostgreSQL.
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