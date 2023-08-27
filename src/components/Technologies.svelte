<script>
    import SkillRow from "./SkillRow.svelte";
</script>

<div class="">
    <SkillRow colour="primary" icons={["javascript", "typescript","python", "csharp"]}/>
    <SkillRow colour="secondary" icons={["redux", "svelte", "react"]}/>
    <SkillRow colour="tertiary" icons={["nodejs", "dotnetcore", "docker", "fastapi"]}/>
</div>