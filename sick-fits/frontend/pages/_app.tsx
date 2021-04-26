/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import type { AppProps } from 'next/app'
import Page from 'components/Page'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}
