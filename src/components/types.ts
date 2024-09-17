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

type IconId =
  | string
  | 'none'
  | 'home'
  | 'menu'
  | 'menux'
  | 'menuxx'
  | 'specialties'
  | 'pin'
  | 'pinFill'
  | 'close'

export interface BtnParam {
  className?: BtnColor
  onClick?: Function | undefined
  mode?: 'btn' | 'toggle'
  toggleId?: string | undefined
  togglePosition?: 'start' | 'end' | undefined
  label?: string | undefined
  iconId?: IconId
  iconSize?: 16 | 24 | 32 | 64
}

export interface IconParam {
  id?: IconId
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
  backdrop?: boolean
  children?: ReactNode
}
