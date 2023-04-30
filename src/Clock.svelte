<svelte:options tag="my-clock" />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  let date = new Date().toLocaleTimeString()
  let interval

  onMount(() => {
    interval = setInterval(() => {
      date = new Date().toLocaleTimeString()
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<span class="text-xl text-red-600">
  {date || ''}
</span>

<style src="./Clock.postcss"></style>
