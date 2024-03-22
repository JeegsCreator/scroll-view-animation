<script lang="ts">
  import { toast } from "svelte-sonner";
  import Copy from "./icons/copy.svelte";
  function copyInstall() {
    console.log("avocado");
    navigator.clipboard.writeText(
      "npm install @jeegscreator/scroll-view-animation",
    );

    toast("Copy to clipboard");
  }
</script>

<div class="bg-primary px-3 py-2 rounded-md flex gap-2 items-center">
  <span class="text-sm leading-none font-mono">
    npm install @jeegscreator/scroll-view-animation
  </span>
  <button on:click={copyInstall}><Copy /></button>
</div>
