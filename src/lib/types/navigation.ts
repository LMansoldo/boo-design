export interface NAVIGATION_OPTIONS {
    label: string
    route: string
    icon: string
    clickEvent(e: unknown): unknown
}

export interface MAIN_NAVIGATION_OPTIONS {
    path: string
    title: string
    icon: string
    redirect(e: unknown): unknown
}