<script>
  import TwLabel from './TwLabel.svelte';
  import { count, pick, values } from '../utils';
</script>

<div class="flex">
  <div class="flex flex-col">
    <div class="flex">
      <span class="mr-10px font-bold">color:</span>
      <span class="text-clrs-slate4 italic">{$pick}</span>
    </div>
    <div class="mt-5px flex">
      <span class="mr-10px font-bold">sample:</span>
      <span class="text-clrs-slate4 italic">{$count > 0 ? $values : '...'}</span
      >
    </div>
  </div>
  <TwLabel />
</div>
