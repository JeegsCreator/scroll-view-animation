import { writable } from "svelte/store";

export const showAlert = writable(false);

showAlert.subscribe((prev) => {
  console.log(prev);
  if (prev) {
    setTimeout(() => {
      showAlert.set(false);
    }, 3000);
  }
});
