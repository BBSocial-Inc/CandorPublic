import { FC, useEffect, useState } from "react";

export default function Current({textStyle}:any){
	const [count, setCount] = useState<number>(500);
    const [loading, setLoading] = useState(true)
	useEffect(()=>{
        let c = parseInt(localStorage.getItem('count') || "500")
		
		const timer = setInterval(()=>{
			setCount(co=> {
                let newCount = Math.max(co, c) + Math.floor(Math.random()*3)
                localStorage.setItem('count', newCount.toString())
                return newCount
            })
            if(loading)setLoading(false)

		}, Math.random()*7000+10000)
		return ()=> clearInterval(timer)
	},[])
	return (
		<span style={{...textStyle}} className="font-inter text:[25.20vw] text-center lg1:max-w-[600px] w-full font-black">{loading? "Loading..." : `👆 ${count} have entered the giveaway from Ghana. 👆`}
            
        </span>
	)
}

export function CurrentCountry({textStyle, country, loading, count=3}:any){
	const [countryData, setCountryData] = useState<any>({});
	useEffect(()=>{
		setCountryData(country)
	},[country])
	return (
		<span style={{...textStyle}} className="font-inter text:[25.20vw] text-center lg1:max-w-[600px] w-full font-black">{(loading || !countryData)? "Loading..." : `👆 ${!!count ? count : 3} people have entered the giveaway ${countryData?.countryName ? "from " + countryData?.countryName : ""}. 👆`}
            
        </span>
	)
}