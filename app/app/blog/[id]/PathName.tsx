'use client'
import { useRouter } from 'next/navigation'

import { usePathname } from 'next/navigation'

export default function PathName() {

    const router = useRouter();

    return (

        <>

            <br />
            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard Link
            </button>
            <br />

            <ul>
                path name: {usePathname()}
            </ul>
        </>

    )
}

