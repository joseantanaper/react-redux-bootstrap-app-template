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

export interface Btn {
  className?: BtnColor
  onClick?: Function | undefined
  toggleId?: string | undefined
  label?: string | undefined
}
