<script>
  import Radio from "../icons/Radio.svelte"
  import { colorKeys, colorFor, pick, actions } from "../utils"
</script>

<div class="flex flex-wrap" role="radiogroup">
  {#each colorKeys as key, i}
    <div
      aria-label={key}
      role="radio"
      title={key}
      on:click={() => actions.updatePick(key)}
    >
      <Radio hex={colorFor(key)} selected={$pick === key} />
    </div>
  {/each}
</div>
