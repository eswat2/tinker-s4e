<script>
  import Radio from '../icons/Radio.svelte';
  import { colorKeys, colorFor, pick, actions } from '../utils';
</script>

<div class="flex flex-wrap" role="radiogroup">
  {#each colorKeys as key, i}
    <div
      aria-label={key}
      aria-checked={$pick === key}
      role="radio"
      tabindex="0"
      title={key}
      on:click={() => actions.updatePick(key)}
      on:keydown={e => e.key === 'Enter' && actions.updatePick(key)}
    >
      <Radio hex={colorFor(key)} selected={$pick === key} />
    </div>
  {/each}
</div>
