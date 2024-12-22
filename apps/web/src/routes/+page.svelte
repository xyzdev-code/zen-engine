<script lang="ts">
    import Scene from "./Scene.svelte";
    import Hierarchy from "./Hierarchy.svelte"
    import Inspector from "./Inspector.svelte";
    import Window from "./Window.svelte";
</script>  
<style>
  #mainGrid{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .window{
    grid-area: 4/1/5/3;
  }
  .inspector{
    grid-area: 1/3/5/4;
  } 
  .scene{
    grid-area: 1/2/4/3;
  }
  .hierarchy{
    grid-area: 1/1/4/2;
  }
  .horizontal{
    background: #444857;
    cursor: col-resize;
    height: 100%;
    width: 1px
  }
  .vertical{
    background: #444857;
    cursor: row-resize;
    height: 1px;
    width: 100%;
  }
</style>
<div class="h-full w-full m-0 p-0" id="mainGrid">
  <div class="scene flex">
    <Scene/>
    <div class="horizontal justify-end">

    </div>
    <div class="vertical">

    </div>
  </div>
  <div class="hierarchy">
    <Hierarchy/>
    <div class="horizontal">

    </div>
    <div class="vertical">

    </div>
  </div>
  <div class="inspector">
    <Inspector/>
    <div class="horizontal">

    </div>
    <div class="vertical">

    </div>
  </div>
  <div class="window">
    <Window/>
    <div class="horizontal">

    </div>
    <div class="vertical">

    </div>
  </div>
</div>
