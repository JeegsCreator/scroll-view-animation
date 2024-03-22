<script lang="ts">
  import {
    Toaster as Sonner,
    type ToasterProps as SonnerProps,
  } from "svelte-sonner";
  // import { mode } from "mode-watcher";

  type $$Props = SonnerProps;
</script>

<Sonner
  class="toaster group dark"
  position="top-center"
  toastOptions={{
    classes: {
      toast:
        "group toast group-[.toaster]:bg-neutral-950 group-[.toaster]:text-white group-[.toaster]:border-border group-[.toaster]:shadow-lg",
    },
  }}
  {...$$restProps}
/>