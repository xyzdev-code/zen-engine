<script lang="ts">
  import { type GameObject, scene } from "@repo/zen";
  import {Box, Lightbulb} from "lucide-svelte"
  import { PointLight, type Light } from "three";
  import * as Card from "$lib/components/ui/card/index.js";
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
  type gameObject = GameObject | Light
  const gameObjects: gameObject[] = $state([(new PointLight)])
  gameObjects[0].name = "1,2"
</script>
<div class="w-full h-full">
  <div class="w-full h-[5%]">
    <Button variant="ghost" class="h-full p-0 flex items-center justify-center">+</Button>
  </div>
  <ScrollArea orientation="vertical" class="w-full h-[95%]">
  {#each gameObjects as gameObject}
    <Card.Root>
    <Card.Content class="h-5 p-0">
    {#if gameObject?.isLight}
      <div class="w-full h-5 m-0"><Lightbulb class="h-4 -translate-y-1 inline"/>{gameObject.name}</div>
    {:else}
    {/if}
    </Card.Content>
    </Card.Root>
  {/each}    
  </ScrollArea>
</div>
