const app = {
  sidebar: {
    restore: (sidebar: any) => {
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-mode',
        sidebar.mode
      )
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-collapsed',
        sidebar.collapsed
      )
    },
    collapse: (sidebarCollapsed: string) => {
      console.log('app', 'sidebar.collapse', sidebarCollapsed)
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-collapsed',
        sidebarCollapsed
      )
    },
    mode: (sidebarMode: string) => {
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-mode',
        sidebarMode
      )
    },
  },
  locale: {},
}

export default app
