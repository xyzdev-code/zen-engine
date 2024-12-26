<script lang="ts">
  import { type GameObject } from "@repo/zen";
  import {Box} from "lucide-svelte"
  import { type Light } from "three";
  type gameObject = GameObject | Light
  const gameObjects: gameObject[] = $state([])
</script>
<div class="w-full h-full">
  {#each gameObjects as gameObject}
    {#if gameObject?.isLight!==undefined}
      <div class="w-full h-4"><Box/></div>
    {:else}
    {/if}
  {/each}    
</div>
