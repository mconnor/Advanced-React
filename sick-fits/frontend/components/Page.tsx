import { PropsWithChildren } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type PropTypes = PropsWithChildren<{}>

export default function Page({ children }: PropTypes) {
    return <div>{children}</div>
}
