import { type ReactNode } from 'react'

type BtnColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-link'
  | undefined

type NavbarPosition = 'fixed-top' | 'fixed-bottom'

type OffcanvasPosition = 'offcanvas-start' | 'offcanvas-end'

export interface BtnParam {
  className?: BtnColor
  onClick?: Function | undefined
  toggleId?: string | undefined
  label?: string | undefined
  icon?: string | undefined
}

export interface IconParam {
  id?:
    | string
    | 'none'
    | 'home'
    | 'specialties'
    | 'pin'
    | 'pinFill'
    | 'close'
    | undefined
  size?: number | undefined
}

export interface NavbarParam {
  position?: NavbarPosition
  startNodes?: ReactNode[] | undefined
  brand?: string | string[] | undefined
  endNodes?: ReactNode[] | undefined
}

export interface OffcanvasParam {
  id: string
  title?: string | undefined
  position?: OffcanvasPosition
  pushContent?: boolean
  children?: ReactNode
}
