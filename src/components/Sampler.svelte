<script>
  import ChevronDoubleLeft from '../icons/ChevronDoubleLeft.svelte';
  import Close from '../icons/Close.svelte';
  import Refresh from '../icons/Refresh.svelte';
  import { actions, count } from '../utils';
</script>

<div class="mb-10px mt-3 flex items-center">
  <button
    class="ds1-button data-button bg-clrs-blue"
    aria-label="Refresh"
    title="Refresh"
    onclick={() => actions.refresh()}
  >
    <Refresh />
  </button>
  <button
    class="ds1-button data-button bg-clrs-red"
    aria-label="Reset"
    title="Reset"
    onclick={() => actions.reset()}
  >
    <Close />
  </button>
  <div class="flex items-center">
    <ChevronDoubleLeft size={28} />
    <span class="italic">
      click a button...
      <sup>{$count}</sup>
    </span>
  </div>
</div>
