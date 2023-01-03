import { Router, useRouter } from "next/router"
import { useEffect } from "react"

export async function getServerSideProps(ctx:any){
	console.log(ctx.query)
	return{
		props: {
			_referrer: ctx?.query?.key || null
		}
	}
}

// get props and redirect to index.tsx using next js router
export default function Index(props:any){
    const router = useRouter()
    console.log(props)
    useEffect(() => {
        router.push({
            pathname: "/g/1",
            query: { _referrer: props._referrer }
        })
    }, [])
    return null
}
