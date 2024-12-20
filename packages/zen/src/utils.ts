export function assert(name: string, fn: ()=>boolean): void{
  if(!fn()){
    throw new Error(`[ERROR] Assert ${name} failed`)
  } 
}
export function assertType<T>(name:string, target: unknown, fn:()=>boolean): asserts target is T{
  if(!fn()){
    throw new Error(`[ERROR] Type assertion ${name} failed.`) 
  }
}
export function guard<T>(target:unknown, fn: ()=>boolean): target is T{
  return fn()
}
