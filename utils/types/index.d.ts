import type { VerticalNavigationLink, DropdownItem } from '#ui/types'

export type QbFrontendDashboardType = {
  sidebar?: {
    width?: string
    padding?: string
    base?: string
  }
  main?: {
    padding?: string
    width?: string
    base?: string
  }
  base?: string
}

export type qbFrontendSidebarType = {
  links?: VerticalNavigationLink[]
  ui?: {
    padding?: string
    base?: string
    container?: string
    background?: string
    rounded?: string
    header?: {
      padding?: string
      base?: string
    }
    footer?: {
      padding?: string
      base?: string
    }
    body?: {
      padding?: string
      base?: string
      menu?: object
    }
  }
  user?: {
    image?: string
    name?: string
    position?: string
    userMenu?: DropdownItem[] | Array<DropdownItem[]>
  }
}
