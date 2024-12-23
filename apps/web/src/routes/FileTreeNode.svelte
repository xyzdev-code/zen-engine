<script lang="ts">
  import FileTreeNode from "./FileTreeNode.svelte"
  import {File} from "lucide-svelte"
  import { onMount } from "svelte";
  import * as Accordion from "$lib/components/ui/accordion";
  const {_handles}: {_handles: Array<[string, FileSystemFileHandle|FileSystemDirectoryHandle]>} = $props()
  async function flattenDir(handle: FileSystemDirectoryHandle){
    let ret: Array<[string, FileSystemFileHandle|FileSystemDirectoryHandle]> = [];
    for await(const [k,v] of handle.entries()){
      ret.push([k,v])
    }
    console.log("flatten")
    return ret
  }
  function resolveAwait<T>(x: Promise<T>){
    let value: T;
    x.then((val)=>{
      value = val
    })
    console.log('flattend')
    // @ts-ignore
    return value
  }
  onMount(()=>{
    console.log(_handles)
  })
</script>
<div class="w-full h-full">
<Accordion.Root type="multiple">
  {#each _handles as [key, _handle]}
      {#if _handle.kind==="file"}
        <File/>&nbsp{key}  
      {:else}
        <Accordion.Item value={key}>
          <Accordion.Trigger>
            {key}
          </Accordion.Trigger>
          <Accordion.Content>
            <FileTreeNode _handles={resolveAwait(flattenDir(_handle))}/>
          </Accordion.Content>
        </Accordion.Item> 
      {/if}
  {/each}
</Accordion.Root>
</div>
