<svelte:options tag="my-component" />

<script lang="ts">
  // import Rating from 'flowbite-svelte/Rating.svelte'
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

<main class="grid grid-cols-3 gap-4">
  <div>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      />
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Toggle</span
      >
    </label>
  </div>

  <div>
    <!-- <Rating total={5} rating={4.66} /> -->
  </div>

  <span class="text-6xl text-red-600">
    {date || ''}
  </span>
</main>

<style src="./Clock.postcss"></style>
