import { FC, useEffect, useState } from "react";
import { getRemainingTime } from "../utils/helpers";

export default function Counter({style={}}:any){
	const [count, setCount] = useState<any>({});
    const [loading, setLoading] = useState(true)
	useEffect(()=>{
        let c = parseInt(localStorage.getItem('count') || "500")
		const timer = setInterval(()=>{
			setCount(getRemainingTime())
            if(loading)setLoading(false)

		}, 500)
		return ()=> clearInterval(timer)
	},[])
	return (
		<span style={{
            ...style
        }}
        className="font-fredoka text-[#FB1D1A] text-center"
        >({count?.days || 0}D : {count?.hours || 0}HRS : {count?.minutes || 0}M : {count?.seconds || 0}S)</span>
	)
}