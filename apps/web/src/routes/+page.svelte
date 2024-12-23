<script lang="ts">
    import Scene from "./Scene.svelte";
    import Hierarchy from "./Hierarchy.svelte"
    import Inspector from "./Inspector.svelte";
    import Window from "./Window.svelte";
    import { Handle, Pane, PaneGroup } from "$lib/components/ui/resizable";
    const resizeEvent = new Event("_resize")
    function resize(){
      window.dispatchEvent(resizeEvent) 
      console.log('resize')
    }
</script>  
<PaneGroup direction="horizontal" onLayoutChange={resize}>
  <Pane defaultSize={83.33}>
    <PaneGroup direction="vertical" onLayoutChange={resize}>
      <Pane defaultSize={75}>
        <PaneGroup direction="horizontal" onLayoutChange={resize}>
          <Pane defaultSize={20}>
            <Hierarchy/>
          </Pane>
          <Handle withHandle/>
          <Pane defaultSize={80}>
            <Scene/>
          </Pane>
        </PaneGroup>
      </Pane>
      <Handle withHandle/>
      <Pane defaultSize={25}>
        <Window/>
      </Pane>
    </PaneGroup>
  </Pane>
  <Handle withHandle/>
  <Pane defaultSize={16.67}>
    <Inspector/> 
  </Pane>
</PaneGroup>
