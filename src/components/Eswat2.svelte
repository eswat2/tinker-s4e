<script>
  import Fingerprint from '../icons/Fingerprint.svelte';

  let url = 'https://eswat2.dev';
  let who = 'eswat2';
</script>

<a
  href={url}
  class="text-clrs-gray hover:text-clrs-navy absolute top-8 right-8"
  aria-label={who}
  target="blank"
  title={who}
>
  <Fingerprint />
</a>
