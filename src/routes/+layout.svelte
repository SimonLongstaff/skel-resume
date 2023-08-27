<script lang="ts">
    import '../app.postcss';
    import {AppBar, AppShell, storeHighlightJs, storePopup} from '@skeletonlabs/skeleton';
    // Highlight JS
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    // Floating UI for Popups
    import {arrow, autoUpdate, computePosition, flip, offset, shift} from '@floating-ui/dom';
    import Icon from "@iconify/svelte";


    storeHighlightJs.set(hljs);

    storePopup.set({computePosition, autoUpdate, flip, shift, offset, arrow});
</script>

<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <!-- App Bar -->
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase">Simon Longstaff
                </strong>

            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a
                        class="btn btn-sm variant-ghost-surface"
                        href="https://www.linkedin.com/in/simon-longstaff/"
                        rel="noreferrer"
                        target="_blank"
                >
                    <Icon icon="akar-icons:linkedin-fill"/>
                </a>
                <a
                        class="btn btn-sm variant-ghost-surface"
                        href="https://github.com/SimonLongstaff"
                        rel="noreferrer"
                        target="_blank"
                >
                    <Icon icon="akar-icons:github-fill"/>
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <!-- Page Route Content -->
    <slot/>
</AppShell>

<style>
</style>