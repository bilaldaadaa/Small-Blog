
export interface navProps {
    logo: string
    items: Array<itemsType>
    btn: string
}
export interface itemsType {
    name: string
    href: string
}
export interface editProps {
    params: Promise<{ id: string }>
}
export interface errorProps {
    error: Error
    reset: () => void
}
export interface showPostProps {
    params: Promise<{ id: string }>
}
export interface FormAddEditProps {
    submit: String
    rows: number
    response?: {
        id: number
        title: string
        description: string
        createdAt: string
        updatedAt: string
    }
}
export interface add {
    title: string
    desc: string
}
export interface posts {
    id: number
    title: string
    description: string
    createdAt: string
    updatedAt: string
}