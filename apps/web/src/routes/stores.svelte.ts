export const Menu = {
  start: "start",
  existing: "existing",
  new: "new"
} as const
export const MenuType: keyof typeof Menu =  $state(Menu.existing)
