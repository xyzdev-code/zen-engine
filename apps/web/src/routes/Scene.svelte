<script lang="ts">
  import { Controller, initializeScene, type GameObject } from "@repo/zen";
  import { onMount } from "svelte";
  onMount(()=>{
    initializeScene(undefined,undefined,document.getElementById("mainCanvas") as HTMLElement)
  }) 
</script>
<div id="mainCanvas" class="h-full w-full"></div>
