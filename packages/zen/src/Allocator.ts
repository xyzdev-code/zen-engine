import { Controller, type GameObject, scene } from "./Controller.js";

export class Allocator<T extends Controller, U extends GameObject>{
  available: number[] = []
  all: T[] = []
  count = 0
  temp!: T;
  constructor(readonly object: {new(args: U): T}){}
  alloc(args: U): T{
    if(this.available.length > 0){
      console.log('reused')
      this.temp = this.all[(this.available.pop() as number)]
      this.temp._updateIndex = Controller._updateIndex
      Controller._updateIndex++
      console.log(`reused with index ${this.temp._updateIndex}`)
      this.temp.gameObject = args
      this.temp.Init()
      Controllers.push(this.temp)
      scene.add(args)
      console.log(`The controoler len is ${Controllers.length}`)
    }else{
      console.log('allocated')
      this.temp = new this.object(args)
      this.temp._memoryLocation = this.count
      this.count++
      this.all.push(this.temp)
    }
    return this.temp
  }
  free(item: T){
    item._reset()
    this.available.push(item._memoryLocation)
  }
}
