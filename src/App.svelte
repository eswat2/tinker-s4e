<script>
  import ColorPicker from './components/ColorPicker.svelte';
  import Eswat2 from './components/Eswat2.svelte';
  import Header from './components/Header.svelte';
  import Sampler from './components/Sampler.svelte';
  import Values from './components/Values.svelte';
</script>

<main class="ds1-main">
  <Header label="tinker s4e" />
  <Eswat2 />
  <Sampler />
  <ColorPicker />
  <hr class="mr-0 ml-0" />
  <Values />
</main>
