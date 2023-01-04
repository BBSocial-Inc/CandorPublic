import { Router, useRouter } from "next/router"
import { useEffect } from "react"
import Headd from "../../components/Head"

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
            pathname: "/giveaway/iphone",
            query: { _referrer: props._referrer }
        })
    }, [])
    return <>
        <Headd image="https://playcandor.com/blue.png"/>
    </>
}
