<script>
  import Fingerprint from '../icons/Fingerprint.svelte';

  let url = 'https://eswat2.dev';
  let who = 'eswat2';
</script>

<a
  href={url}
  class="absolute right-8 top-8 text-clrs-gray hover:text-clrs-navy"
  aria-label={who}
  target="blank"
  title={who}
>
  <Fingerprint />
</a>
