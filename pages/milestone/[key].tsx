
import Image from "next/image";
import Layout from "../../components/index/Layout";
import {useState, useEffect, useRef, FC} from 'react'
import Link from "next/link";
import copy from 'copy-to-clipboard';

const MilestoneAchievement = ({total}: any)=>{
	//total = 74
	const getCurrentVerticalProgress = (value:number)=>{
		if(value<=3){
			return 206.557 * value/3;
		}
		else if(value>3 && value <= 10){
			return 206.557 + (425-206.557) * (value-3)/7; // 7 = 10-3 from 3 to 10
		}
		else if(value>10 && value <= 50){
			return 425 + (650-425) * (value-10)/40; // 40 = 50-10 from 10 to 50
		}
		else if(value>50 && value <= 100){
			return 650 + (886.91-650) * (value-50)/50; // 50 = 100-50 from 50 to 100
		}
		else if (value>100){
			return 886.91;
		}
		else{
			return 0;
		}
	}

	const getCurrentHorizontalProgress = (value:number)=>{
		if(value<=3){
			return 221.211 * value/3;
		}
		else if(value>3 && value <= 10){
			return 221.211 + (408-221.211) * (value-3)/7; // 7 = 10-3 from 3 to 10
		}
		else if(value>10 && value <= 50){
			return 408 + (608-408) * (value-10)/40; // 40 = 50-10 from 10 to 50
		}
		else if(value>50 && value <= 100){
			return 608 + (833.64-608) * (value-50)/50; // 50 = 100-50 from 50 to 100
		}
		else if (value>100){
			return 833.64;
		}
		else{
			return 0;
		}
	}
	return (
		<div className="w-full flex flex-col items-center">
			<svg className="portrait:hidden" xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox="0 0 885.272 104">
				<g id="Group_4124" data-name="Group 4124" transform="translate(-215.728 -808)">
					<path id="Path_14600" data-name="Path 14600" d="M-3856.974-12633.727h833.64" transform="translate(4076.202 13476.44)" fill="none" stroke="#d3d3d3" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14601" data-name="Path 14601" d={`M-3856.974-12633.727h${getCurrentHorizontalProgress(total)}`} transform="translate(4076.202 13476.44)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<circle id="Ellipse_1342" data-name="Ellipse 1342" cx="11.5" cy="11.5" r="11.5" transform="translate(617 808)" fill="#8d8d8d"/>
					<circle id="Ellipse_1347" data-name="Ellipse 1347" cx="11.5" cy="11.5" r="11.5" transform="translate(429 808)" fill="#8d8d8d"/>
					<circle id="Ellipse_1343" data-name="Ellipse 1343" cx="11.5" cy="11.5" r="11.5" transform="translate(815 808)" fill="#8d8d8d"/>
					<circle id="Ellipse_1344" data-name="Ellipse 1344" cx="11.5" cy="11.5" r="11.5" transform="translate(1039 808)" fill="#8d8d8d"/>
					<text id="_10" data-name="10" transform="translate(624 823)" fill="#fff" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">10</tspan></text>
					<text id="_3" data-name="3" transform="translate(438 823)" fill="#fff" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">3</tspan></text>
					<text id="Share_with_a_friend" data-name="Share with a friend" transform="translate(218 823)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Share with a friend</tspan></text>
					<text id="Exclusive_access_to_all_Champagne_products" data-name="Exclusive access to all 
				Champagne products" transform="translate(218 870)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Exclusive access to all </tspan><tspan x="0" y="13">Champagne products</tspan></text>
					<text id="_1_month_premium_free_value_10_._Full_access_of_all_premium_feature_1_hour_promo_of_your_account" data-name="1 month premium free 
				(value $10). Full access to all 
				premium features + 1 hour 
				promo of your account" transform="translate(579 870)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 month premium free </tspan><tspan x="0" y="13">(value $10). Full access to all </tspan><tspan x="0" y="26">premium features + 1 hour </tspan><tspan x="0" y="39">promo of your account</tspan></text>
					<text id="_15_day_premium_for_free_value_5_._Full_access_of_all_premium_feature_" data-name="15 days premium for free 
				(value $5). Full access to 
				all premium features " transform="translate(390 870)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">15 days premium for free </tspan><tspan x="0" y="13">(value $5). Full access to </tspan><tspan x="0" y="26">all premium features </tspan></text>
					<text id="_3_month_premium_free_value_30_._Full_access_of_all_premium_feature_5_hour_promo_of_your_account" data-name="3 months premium free 
				(value $30). Full access to all 
				premium features + 5 hour 
				promo of your account" transform="translate(780 870)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">3 months premium free </tspan><tspan x="0" y="13">(value $30). Full access to all </tspan><tspan x="0" y="26">premium features + 5 hour </tspan><tspan x="0" y="39">promo of your account</tspan></text>
					<text id="_5_month_premium_free_value_50_._Full_access_of_all_premium_feature_10_hour_promo_of_your_account" data-name="5 months premium free 
				(value $50). Full access to all 
				premium features + 10 hour 
				promo of your account" transform="translate(982 870)" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5 months premium free </tspan><tspan x="0" y="13">(value $50). Full access to all </tspan><tspan x="0" y="26">premium features + 10 hour </tspan><tspan x="0" y="39">promo of your account</tspan></text>
					<text id="_50" data-name="50" transform="translate(821 823)" fill="#fff" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">50</tspan></text>
					<text id="_100" data-name="100" transform="translate(1043 823)" fill="#fff" font-size="10" font-family="Anton-Regular, Anton"><tspan x="0" y="0">100</tspan></text>
				</g>
			</svg>
			<svg className="landscape:hidden flex self-center" xmlns="http://www.w3.org/2000/svg" width="60%" viewBox="0 0 280.74 1229">
				<g id="Group_4120" data-name="Group 4120" transform="translate(-39 -648)">
					<path id="Path_14602" data-name="Path 14602" d="M-3856.974-12633.728v886.91" transform="translate(3901.233 13475.318)" fill="none" stroke="#d3d3d3" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14601" data-name="Path 14601" d={`M-3856.974-12633.726v${getCurrentVerticalProgress(total)}`} transform="translate(3901.233 13475.316)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<circle id="Ellipse_1342" data-name="Ellipse 1342" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1027)" fill="#8d8d8d"/>
					<text id="_3" data-name="3" transform="translate(98.74 1056.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">3</tspan></text>
					<text id="Share_with_a_friend" data-name="Share with a friend" transform="translate(81.74 849)" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Share with a friend</tspan></text>
					<text id="Exclusive_access_to_all_Champagne_products" data-name="Exclusive access to all 
				Champagne products" transform="translate(81.74 930)" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Exclusive access to all </tspan><tspan x="0" y="25">Champagne products</tspan></text>
					{length>0 && (
						<>
							<path id="Path_14603" data-name="Path 14603" d={`M-13507.148-1986.5h21.492`} transform="translate(13551.408 2828.091)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
							<path id="Path_14604" data-name="Path 14604" d={`M-13507.148-1986.5h21.492`} transform="translate(13551.408 2909.485)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
							<path id="Path_14605" data-name="Path 14605" d={`M-13507.148-1986.5h21.492`} transform="translate(13551.408 3034.649)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
						</>
					)}
					<circle id="Ellipse_1346" data-name="Ellipse 1346" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1471)" fill="#8d8d8d"/>
					<circle id="Ellipse_1351" data-name="Ellipse 1351" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1707)" fill="#8d8d8d"/>
					<text id="_50" data-name="50" transform="translate(93.74 1500.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">50</tspan></text>
					<text id="_100" data-name="100" transform="translate(90.74 1736.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">100</tspan></text>
					<text id="_1_month_premium_free_value_10_._Full_access_of_all_premium_feature_1_hour_promo_of_your_account" data-name="1 month premium free 
				(value $10). Full access to all 
				premium features + 1 hour 
				promo of your account" transform="translate(81.74 1320)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 month premium free </tspan><tspan x="0" y="26">(value $10). Full access to all </tspan><tspan x="0" y="52">premium features + 1 hour </tspan><tspan x="0" y="78">promo of your account</tspan></text>
					<text id="_3_month_premium_free_value_30_._Full_access_of_all_premium_feature_5_hour_promo_of_your_account" data-name="3 months premium free 
				(value $30). Full access to all 
				premium features + 5 hour 
				promo of your account" transform="translate(81.74 1556)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">3 months premium free </tspan><tspan x="0" y="26">(value $30). Full access to all </tspan><tspan x="0" y="52">premium features + 5 hour </tspan><tspan x="0" y="78">promo of your account</tspan></text>
					<text id="_5_month_premium_free_value_50_._Full_access_of_all_premium_feature_10_hour_promo_of_your_account" data-name="5 months premium free 
				(value $50). Full access to all 
				premium features + 10 hour 
				promo of your account" transform="translate(81.74 1792)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5 months premium free </tspan><tspan x="0" y="26">(value $50). Full access to all </tspan><tspan x="0" y="52">premium features + 10 hour </tspan><tspan x="0" y="78">promo of your account</tspan></text>
					<circle id="Ellipse_1345" data-name="Ellipse 1345" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1236)" fill="#8d8d8d"/>
					<text id="_10" data-name="10" transform="translate(95.24 1265.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">10</tspan></text>
					<text id="_15_day_premium_for_free_value_5_._Full_access_of_all_premium_feature_" data-name="15 days premium for free 
				(value $5). Full access to 
				all premium features " transform="translate(81.74 1111)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">15 days premium for free </tspan><tspan x="0" y="26">(value $5). Full access to </tspan><tspan x="0" y="52">all premium features </tspan></text>
				</g>
				<text id="YOUR_BENEFIT_MILESTONE" data-name="YOUR BENEFIT 
				MILESTONE" transform="translate(0 58)" font-size="49" font-family="Anton-Regular, Anton"><tspan x="0" y="0">YOUR BENEFIT </tspan><tspan x="0" y="49">MILESTONE</tspan></text>
				<text id="YOUR_CURRENT_REFERRALS:_2" data-name="YOUR CURRENT REFERRALS:  2" transform="translate(108 155)" fill="#171717" font-size="20" font-family="Anton-Regular, Anton"><tspan x="-107.6" y="0" xmlSpace="preserve">YOUR CURRENT REFERRALS:  {total}</tspan></text>
				</svg>

		</div>
	)
}

const Milestone: FC = ({id}:any) => {
	const key = id
	const [copied, setCopied] = useState(false);
	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const imgBottomRef = useRef<any>(null)

	useEffect(()=>{
		fetch(`/api/get-milestone?key=${key}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		}).then((res) => {
			if(res.status==200){
				return res.json()
			}
			else{
				throw Error("Something went wrong")
			}
		})
		.then((d)=> {
			setData(d)
			setLoading(false)
		})
		.catch(err=>{
			window.location.href = window.location.href + "/_error"
		})
	},[key])

	useEffect(()=>{
		if(copied){
			setTimeout(()=>{
				setCopied(false)
			},4000) 
		}
	},[copied])

	//const style = `py-6 max-h-[37.40vh] portrait:pb-24 bg-white w-full landscape:absolute landscape:bottom-0 landscape:left-0 landscape:right-0 portrait:mt-[-${(imgBottomRef.current?.offsetHeight||0)*0.75}px] flex flex-col z-1000 lg:px-36 bg-[#FAFAFA]`
	

	if(loading){
		return (
			<div className="h-screen w-full flex items-center justify-center">
				<span className="font-anton text-[12px] lg1:text-[19px] text-black">LOADING...</span>
			</div>
		)
	}

	return (

		<Layout footer={false} navbar={false}>
			<div className="flex flex-row mt-[30px] lg:mt-[6.35vh] justify-center flex-1">
				<Image
					alt="Champagne app screens"
					src="/images/content/activate-phone.png"
					width="854"
					height="767"
					className="hidden w-[42%] lg:inline mr-4"
				/>
				<div className="mt-[40px] flex flex-col items-center">
					<p className="font-inter font-bold text-[13px] lg:text-[1.3vw] pt-0 block">DON’T LEAVE YOUR FRIENDS BEHIND</p>
					<p className="font-anton text-[49px] leading-[49px] lg:text-[4vw] lg:leading-[4vw] xl:text-[3.5vw] xl:leading-[3.5vw] pt-0 block text-center my-3">INVITE FRIENDS & <br/>EARN EXCLUSIVE BENEFITS</p>
					<span className="font-inter text-center text-center text-[15px] lg:text-[1.3vw] lg:leading-[1.5vw] xl:text-[1.2vw] xl:leading-[1.35vw] text-[#888888]">
						Share your unique link with your friends via <br/>
						email or socials & enjoy Champagne special <br/>
						goodies. You earn exclusive benefits for<br/> 
						each friend who signs up!  
					</span>
					<div className="w-[345px] h-[65px] lg:min-w-[550px] lg:h-[77px] flex flex-row items-center border-[3px] border-black mt-5 mb-[26px] rounded-full">
						<h1 className="outline-none text-[#aaaaaa] w-full truncate bg-transparent px-[31px] font-inter font-medium text-[15px] lg:text-[18px]">{"champagneapp.com/"+data?.fields?.Key}</h1>	
						<button onClick={()=>{
							copy("champagneapp.com/"+data?.fields?.Key)
							setCopied(true)
						}} className="font-anton text-[12px] lg:text-[19px] px-[15px] lg:truncate min-w-[105px] lg:min-w-[150px] text-white h-full bg-black rounded-full" style={{opacity: copied?0.8:1}}>{copied?"Copied":"Copy link"}</button>
					</div>
				</div>
			</div>
			{/* <h1 className="font-inter lg:hidden text-[12px] lg:text-[21px] m-auto mb-[20px] text-center max-w-[345px] lg:max-w-[600px] font-black">👆<br/>500+ currently typed their email. Checkout some young people are saying about it . 
				<Link href="" className="underline">
					Watch video
				</Link>
				<svg className="inline ml-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
					<g id="Group_4117" data-name="Group 4117" transform="translate(-329 -464)">
						<circle id="Ellipse_1340" data-name="Ellipse 1340" cx="6" cy="6" r="6" transform="translate(329 464)" fill="#030303"/>
						<path id="Polygon_1" data-name="Polygon 1" d="M2.636,1.481a1,1,0,0,1,1.728,0L6.123,4.5A1,1,0,0,1,5.259,6H1.741A1,1,0,0,1,.877,4.5Z" transform="translate(339 467) rotate(90)" fill="#fff"/>
					</g>
				</svg>
			</h1> */}
			<Image
				alt="Champagne app screens"
				src="/images/content/activate-phone.png"
				width="854"
				height="767"
				ref={imgBottomRef as any}
				className="landscape:hidden m-auto mb-[20px] mt-[40px] w-[80%]"
			/>
			<div style={{marginTop:-(imgBottomRef.current?.offsetHeight||0)*0.75}} className={`py-6 flex-1 landscape:max-h-[37.40vh] portrait:pb-24 bg-white w-full portrait:relative landscape:absolute landscape:bottom-0 landscape:left-0 landscape:right-0 flex flex-col z-1000 lg:px-36 bg-[#FAFAFA]`}>
				<div className="flex portrait:hidden flex-row justify-between mb-6">
					<span className="font-anton lg:inline portrait:text-[20px] landscape:text-[2vw] text-center lg:text-left text-[#171717]">YOUR BENEFIT MILESTONE</span>
					<span className="font-anton lg:inline portrait:text-[20px] landscape:text-[2vw] text-center lg:text-left text-[#171717]">YOUR CURRENT REFERRALS: {data?.fields?.Referrals || 0}</span>
				</div>
				<MilestoneAchievement total={data?.fields?.Referrals || 0}/>
			</div>
		</Layout>
	);
}

export default Milestone;

/* export async function getStaticPaths() {
	const data = await fetch(`http://192.168.1.67:3000/api/get-records`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
	}).then((res) => res.json())
	console.log(data.map((el:any)=>({params: {key:el?.fields?.Key}})))


	return {
	  paths: data.map((el:any)=>({params: {key:el?.fields?.Key}})),
	  fallback: false,
	}
  }

export async function getStaticProps(ctx: any) {
	// get url params
	const { key } = ctx.params;
	console.log(process.env.SERVER_URL)
	const data = await fetch(`http://192.168.1.67:3000/api/get-milestone?key=${key}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
	}).then((res) => res.json())

	// Pass data to the page via props
	return {
		props: {
			data
		},
	};
}
 */

export async function getServerSideProps(ctx: any) {
	return {
		props: {
			id: ctx?.query?.key || ""
		}
	}
}

