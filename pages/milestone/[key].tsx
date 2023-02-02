
import Image from "next/image";
import Layout from "../../components/index/Layout";
import {useState, useEffect, useRef, FC} from 'react'
import Link from "next/link";
import copy from 'copy-to-clipboard';

const MilestoneAchievement = ({total}: any)=>{
	//total = 74
	const getCurrentVerticalProgress = (value:number)=>{
		if(value<=5){
			return 206.557 * value/5;
		}
		else if(value>5 && value <= 25){
			return 206.557 + (420-206.557) * (value-5)/20; // 20 = 25-5 from 5 to 25
		}
		else if(value>25 && value <= 50){
			return 420 + (655-420) * (value-25)/25; // 25 = 50-25 from 25 to 50
		}
		else if (value>50 && value <= 100){
			return 655 + (886.91-655) * (value-50)/50; // 50 = 100-50 from 50 to 100
		}
		else if (value>100){
			return 886.91;
		}
		else{
			return 0;
		}
	}

	const getCurrentHorizontalProgress = (value:number)=>{
		if(value<=5){
			return 174 * value/5;
		}
		else if(value>5 && value <= 25){
			return 174 + (325-174) * (value-5)/20; // 20 = 25-5 from 5 to 25
		}
		else if(value>25 && value <= 50){
			return 325 + (480-325) * (value-25)/25; // 25 = 50-25 from 25 to 50
		}
		else if (value>50 && value <= 100){
			return 480 + (665-480) * (value-50)/50; // 50 = 100-50 from 50 to 100
		}
		else if (value>100){
			return 665;
		}
		else{
			return 0;
		}
	}
	return (
		<div className="w-full flex flex-col items-center">
			<svg className="portrait:hidden" xmlns="http://www.w3.org/2000/svg"  width="100%"  viewBox="0 0 705.512 82">
				<g id="Group_4172" data-name="Group 4172" transform="translate(-216.488 -808)">
					<path id="Path_14600" data-name="Path 14600" d="M-3856.974-12633.727h670.322" transform="translate(4076.961 13469.64)" fill="none" stroke="#d3d3d3" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14601" data-name="Path 14601" d={`M-3856.974-12633.727h${getCurrentHorizontalProgress(total)}`} transform="translate(4076.961 13469.64)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<ellipse id="Ellipse_1342" data-name="Ellipse 1342" cx="9" cy="9.5" rx="9" ry="9.5" transform="translate(539 808)" fill="#8d8d8d"/>
					<ellipse id="Ellipse_1347" data-name="Ellipse 1347" cx="9" cy="9.5" rx="9" ry="9.5" transform="translate(388 808)" fill="#8d8d8d"/>
					<circle id="Ellipse_1343" data-name="Ellipse 1343" cx="9.5" cy="9.5" r="9.5" transform="translate(698 808)" fill="#8d8d8d"/>
					<ellipse id="Ellipse_1344" data-name="Ellipse 1344" cx="9" cy="9.5" rx="9" ry="9.5" transform="translate(878 808)" fill="#8d8d8d"/>
					<text id="_25" data-name="25" transform="translate(544 821)" fill="#fff" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">25</tspan></text>
					<text id="_5" data-name="5" transform="translate(395 821)" fill="#fff" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5</tspan></text>
					<text id="Share_with_a_friend" data-name="Share with a friend" transform="translate(218 819)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Share with a friend</tspan></text>
					<text id="Exclusive_access_to_all_Candor_Pro_features" data-name="Exclusive access to all 
				Candor Pro features" transform="translate(218 857)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Exclusive access to all </tspan><tspan x="0" y="10">Candor Pro features</tspan></text>
					<text id="_1_month_premium_free_value_30_._Full_access_to_all_the_Candor_Pro_features" data-name="1 month premium free 
				(value $30). Full access to all 
				the Candor Pro features" transform="translate(508 857)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 month premium free </tspan><tspan x="0" y="10">(value $30). Full access to all </tspan><tspan x="0" y="20">the Candor Pro features</tspan></text>
					<text id="_1_week_premium_for_free_value_7_._Full_access_to_all_the_Candor_pro_features_" data-name="1 week premium for free 
				(value $7). Full access to 
				all the Candor pro 
				features " transform="translate(356 857)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 week premium for free </tspan><tspan x="0" y="10">(value $7). Full access to </tspan><tspan x="0" y="20">all the Candor pro </tspan><tspan x="0" y="30">features </tspan></text>
					<text id="_2_months_premium_free_value_60_._Full_access_to_all_the_Candor_Pro_features" data-name="2 months premium free 
				(value $60). Full access to all 
				the Candor Pro features" transform="translate(670 857)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">2 months premium free </tspan><tspan x="0" y="10">(value $60). Full access to all </tspan><tspan x="0" y="20">the Candor Pro features</tspan></text>
					<text id="_5_months_premium_free_value_150_._Full_access_to_all_the_Candor_Pro_features_" data-name="5 months premium free 
				(value $150). Full access to 
				all the Candor Pro features " transform="translate(833 857)" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5 months premium free </tspan><tspan x="0" y="10">(value $150). Full access to </tspan><tspan x="0" y="20">all the Candor Pro features </tspan></text>
					<text id="_50" data-name="50" transform="translate(704 821)" fill="#fff" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">50</tspan></text>
					<text id="_100" data-name="100" transform="translate(880.5 820.5)" fill="#fff" font-size="8" font-family="Anton-Regular, Anton"><tspan x="0" y="0">100</tspan></text>
				</g>
			</svg>

			<svg className="landscape:hidden flex self-center" xmlns="http://www.w3.org/2000/svg" width="70%" viewBox="0 0 381.74 1203">
				<g id="Group_4173" data-name="Group 4173" transform="translate(-39 -728)">
					<g id="Group_4120" data-name="Group 4120" transform="translate(0 80)">
					<path id="Path_14602" data-name="Path 14602" d="M-3856.974-12633.728v886.91" transform="translate(3901.233 13475.318)" fill="none" stroke="#d3d3d3" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14601" data-name="Path 14601" d="M-3856.974-12633.726v206.557" transform="translate(3901.233 13475.316)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<circle id="Ellipse_1342" data-name="Ellipse 1342" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1027)" fill="#8d8d8d"/>
					<text id="_5" data-name="5" transform="translate(98.74 1056.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5</tspan></text>
					<text id="Share_with_a_friend" data-name="Share with a friend" transform="translate(81.74 849)" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Share with a friend</tspan></text>
					<text id="Exclusive_access_to_all_Candor_Pro_features" data-name="Exclusive access to all 
				Candor Pro features" transform="translate(81.74 930)" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Exclusive access to all </tspan><tspan x="0" y="25">Candor Pro features</tspan></text>
					<path id="Path_14603" data-name="Path 14603" d="M-13507.148-1986.5h21.492" transform="translate(13551.408 2828.091)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14604" data-name="Path 14604" d="M-13507.148-1986.5h21.492" transform="translate(13551.408 2909.485)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<path id="Path_14605" data-name="Path 14605" d="M-13507.148-1986.5h21.492" transform="translate(13551.408 3034.649)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-width="7"/>
					<circle id="Ellipse_1346" data-name="Ellipse 1346" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1471)" fill="#8d8d8d"/>
					<circle id="Ellipse_1351" data-name="Ellipse 1351" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1707)" fill="#8d8d8d"/>
					<text id="_50" data-name="50" transform="translate(93.74 1500.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">50</tspan></text>
					<text id="_100" data-name="100" transform="translate(90.74 1736.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">100</tspan></text>
					<text id="_1_month_premium_free_value_30_._Full_access_to_all_the_Candor_Pro_features" data-name="1 month premium free 
				(value $30). Full access to all 
				the Candor Pro features" transform="translate(81.74 1320)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 month premium free </tspan><tspan x="0" y="26">(value $30). Full access to all </tspan><tspan x="0" y="52">the Candor Pro features</tspan></text>
					<text id="_2_months_premium_free_value_60_._Full_access_to_all_the_Candor_Pro_features" data-name="2 months premium free 
				(value $60). Full access to all 
				the Candor Pro features" transform="translate(81.74 1556)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">2 months premium free </tspan><tspan x="0" y="26">(value $60). Full access to all </tspan><tspan x="0" y="52">the Candor Pro features</tspan></text>
					<text id="_5_months_premium_free_value_150_._Full_access_to_all_the_Candor_Pro_features_" data-name="5 months premium free 
				(value $150). Full access to 
				all the Candor Pro features " transform="translate(81.74 1792)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">5 months premium free </tspan><tspan x="0" y="26">(value $150). Full access to </tspan><tspan x="0" y="52">all the Candor Pro features </tspan></text>
					<circle id="Ellipse_1345" data-name="Ellipse 1345" cx="21.5" cy="21.5" r="21.5" transform="translate(81.74 1236)" fill="#8d8d8d"/>
					<text id="_25" data-name="25" transform="translate(93.74 1265.5)" fill="#fff" font-size="19" font-family="Anton-Regular, Anton"><tspan x="0" y="0">25</tspan></text>
					<text id="_1_week_premium_for_free_value_7_._Full_access_to_all_the_Candor_pro_features_" data-name="1 week premium for free 
				(value $7). Full access to 
				all the Candor pro 
				features " transform="translate(81.74 1111)" font-size="20" font-family="Anton-Regular, Anton"><tspan x="0" y="0">1 week premium for free </tspan><tspan x="0" y="26">(value $7). Full access to </tspan><tspan x="0" y="52">all the Candor pro </tspan><tspan x="0" y="78">features </tspan></text>
					</g>
					<text id="YOUR_CANDOR_MILESTONE" data-name="YOUR CANDOR 
				MILESTONE" transform="translate(39 786)" font-size="49" font-family="Anton-Regular, Anton"><tspan x="0" y="0">YOUR CANDOR </tspan><tspan x="0" y="49">MILESTONE</tspan></text>
					<text id="YOUR_CURRENT_REFERRALS:_2" data-name="YOUR CURRENT REFERRALS:  2" transform="translate(147 883)" fill="#171717" font-size="20" font-family="Anton-Regular, Anton"><tspan x="-107.6" y="0" xmlSpace="preserve">YOUR CURRENT REFERRALS:  {total}</tspan></text>
				</g>
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
					src="/images/content/phone-view2.png"
					width="584"
					height="737"
					className="hidden w-[30%] lg:inline mr-7"
				/>
				<div className="mt-[40px] flex flex-col items-center">
					<p className="font-inter font-bold text-[13px] lg:text-[1.3vw] pt-0 block">DON’T LEAVE YOUR FRIENDS BEHIND</p>
					<p className="font-anton text-[49px] leading-[49px] lg:text-[4vw] lg:leading-[4vw] xl:text-[3.5vw] xl:leading-[3.5vw] pt-0 block text-center my-3"> EXCLUSIVE ACCESS<br/>TO ALL CANDOR PRODUCTS</p>
					<span className="font-inter text-center text-center text-[15px] lg:text-[1.3vw] lg:leading-[1.5vw] xl:text-[1.2vw] xl:leading-[1.35vw] text-[#888888]">
					Share your unique link with your friends via <br/>
					email or socials & enjoy Candor special goodies. <br/>
					You earn exclusive benefits for each friend <br/>
					who signs up! 
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
				src="/images/content/phone-view2.png"
				width="584"
				height="737"
				ref={imgBottomRef as any}
				className="landscape:hidden m-auto mb-[20px] mt-[40px] w-[70%]"
			/>
			<div style={{marginTop:-(imgBottomRef.current?.offsetHeight||0)*0.65}} className={`py-6 flex-1 landscape:max-h-[37.40vh] portrait:pb-24 bg-white w-full portrait:relative landscape:absolute landscape:bottom-0 landscape:left-0 landscape:right-0 flex flex-col z-1000 lg:px-36 bg-[#FAFAFA]`}>
				<div className="flex portrait:hidden flex-row justify-between mb-6">
					<span className="font-anton lg:inline portrait:text-[20px] landscape:text-[2vw] text-center lg:text-left text-[#171717]">YOUR CANDOR MILESTONE</span>
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

