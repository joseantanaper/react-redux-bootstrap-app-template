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
    toggle: (sidebarObj: HTMLDivElement) => {
      if (sidebarObj) {
        const push = Boolean(sidebarObj?.dataset?.appPush === 'true')
        const isShow = Boolean(sidebarObj?.classList?.contains('show'))
        const position = sidebarObj?.classList?.contains('offcanvas-start')
          ? 'offcanvas-start'
          : 'offcanvas-end'
        if (push) {
          document.documentElement?.setAttribute(
            `data-app-${position}-show`,
            String(!isShow)
          )
        }
        console.log(push, isShow, position)
      }
    },
    toggleMode: (sidebarObj: HTMLDivElement) => {
      if (sidebarObj) {
        const isShow = Boolean(sidebarObj?.classList?.contains('show'))
        const position = sidebarObj?.classList?.contains('offcanvas-start')
          ? 'offcanvas-start'
          : 'offcanvas-end'
        document.documentElement?.setAttribute(
          `data-app-${position}-mode`,
          document.documentElement?.getAttribute(
            `data-app-${position}-mode`
          ) === '0'
            ? '1'
            : '0'
        )
        document.documentElement?.setAttribute(
          `data-app-${position}-show`,
          'true'
        )
        console.log('app', 'sidebar', 'toggleMode', `data-app-${position}-show`)
      }
    },
    collapse: (sidebarObj: HTMLDivElement) => {
      if (sidebarObj) {
        const isShow = Boolean(sidebarObj?.classList?.contains('show'))
        const position = sidebarObj?.classList?.contains('offcanvas-start')
          ? 'offcanvas-start'
          : 'offcanvas-end'
        document.documentElement?.setAttribute(`data-app-${position}-show`, '0')
        sidebarObj?.classList?.remove('show')
        sidebarObj?.removeAttribute('aria-modal')
        sidebarObj?.removeAttribute('role')
      }
    },
    collapseOld: (sidebarCollapsed: string, position: string) => {
      console.log('app', 'sidebar.collapse', sidebarCollapsed)
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-collapsed',
        sidebarCollapsed
      )
    },
    mode: (sidebarMode: string, position: string) => {
      document.documentElement?.setAttribute(
        `data-app-${position || 'offcanvas-start'}-mode`,
        sidebarMode
      )
    },
  },
  locale: {},
}

export default app
