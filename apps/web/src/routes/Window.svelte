<script lang="ts">
  import {Button} from "$lib/components/ui/button";
  import {FolderSymlink} from "lucide-svelte"
    import FileTreeNode from "./FileTreeNode.svelte";
  let permission = $state(false)
  let DirHandle: FileSystemDirectoryHandle
  let Directories: Array<[string, FileSystemDirectoryHandle | FileSystemFileHandle]> = [];
  async function handleClick(): Promise<void>{
    DirHandle = await window.showDirectoryPicker() 
    permission = true
    for await(const [key, value] of DirHandle.entries()){
      Directories.push([key, value])
    }
  }
</script>
<div class="w-full h-full">
  {#if permission}
    <FileTreeNode _handles={Directories}/>
  {:else}
    <div class="grid place-content-center text-foreground h-full w-full">
      <Button on:click={handleClick}><FolderSymlink/>&nbsp &nbsp Import project</Button> 
    </div>
  {/if}
</div>
