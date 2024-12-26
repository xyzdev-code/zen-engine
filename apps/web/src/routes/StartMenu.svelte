<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js"
  import {Button} from "$lib/components/ui/button/index.js"
  import {MenuType} from "./stores.svelte.js"
</script>
<style>
</style>
<div class="w-screen h-full flex flex-col gap-2 justify-center items-center">
      <Card.Root>
        <Card.Header>
          <Card.Title>A barebones, 3D Zen Engine project</Card.Title>
          <Card.Description>Perfect way to kickstart your 3D Zen Engine Experience</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Choose this option to initialize a new Zen Engine project in a working directory</p>
        </Card.Content>
        <Card.Footer>
          <Button>Select</Button> 
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Open a current Zen Engine project</Card.Title>
          <Card.Description>Continue working on an existing project</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Choose this option to open a existing Zen Engine project in a working directory</p>
        </Card.Content>
        <Card.Footer>
          <Button class="right-0">Select</Button>
        </Card.Footer>
      </Card.Root>
</div>
