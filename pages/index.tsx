import Image from "next/image";
import Layout from "../components/index/Layout";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useGesture } from "react-use-gesture";
import Current from "../components/Current";


const getRelativeWidth = (w:number)=>{
	return (w/1920) * 100;
}

const TitleComponent:FC = ()=>{
	const [index, setIndex] = useState(1);
	/* useEffect(()=>{
		const timer = setInterval(()=>{
			setIndex((i)=>1-i)
		},10000)
		return ()=>clearInterval(timer)
	},[index]) */

	/* const bind = useGesture({
		onMove: ({ event, delta: [xDelta], velocity }) => {
		  if(event.pointerType=="mouse") return;
		  // Check if the swipe is to the left or right
		  if (xDelta < 0) {
			// Swipe to the left, update index
			setIndex(0);
		  } else if (xDelta > 0) {
			// Swipe to the right, update index
			setIndex(1);
		  }
		}
	  }); */

	return (
		<div /*  {...bind()} */ >
			<div id="title-bar" className="flex flex-col lg1:flex-row">
				{/* index==0 ?(
					<svg xmlns="http://www.w3.org/2000/svg" className="landscape:hidden w-[75%] mx-auto h-auto md:w-[550px]" viewBox="0 0 242 139.393">
						<defs>
							<linearGradient id="linear-gradient-small" x1="-0.071" y1="0.557" x2="1.077" y2="0.361" gradientUnits="objectBoundingBox">
							<stop offset="0" stop-color="#f646b2"/>
							<stop offset="0.531" stop-color="#0deef7"/>
							<stop offset="1" stop-color="#7fff10"/>
							</linearGradient>
						</defs>
						<g id="Group_4123" data-name="Group 4123" transform="translate(-67 -133.083)">
							<text id="CHAMPAGNE" transform="translate(76 200.083)" fill="#fff" stroke="#000" stroke-width="9" font-size="49" font-family="Anton-Regular, Anton"><tspan x="0" y="0">CHAMPAGNE</tspan></text>
							<text id="_IS_COMING" data-name=" IS COMING" transform="translate(87.5 256.475)" font-size="49" font-family="Anton-Regular, Anton"><tspan x="0" y="0" xmlSpace="preserve"> IS COMING</tspan></text>
							<path id="Intersection_1" data-name="Intersection 1" d="M157.1,39.975q-2.23-3.209-2.229-9.726V12.119q0-5.831,2.6-8.82T165.21.31a10.884,10.884,0,0,1,6.467,1.666,8.567,8.567,0,0,1,3.185,4.851,31.431,31.431,0,0,1,.882,8.183h-8.232V11.237a5.375,5.375,0,0,0-.416-2.352,1.524,1.524,0,0,0-1.495-.833q-2.4,0-2.4,3.137V31.572a6.677,6.677,0,0,0,.49,2.891,1.99,1.99,0,0,0,3.43,0,6.678,6.678,0,0,0,.49-2.891V25.545h-2.254V18.292h10.29v24.5h-3.381l-1.42-3.528a7.482,7.482,0,0,1-6.958,3.92A7.7,7.7,0,0,1,157.1,39.975ZM2.75,40.294A11,11,0,0,1-.018,32.356v-19.4q0-6.272,2.5-9.457T10.321.31a10.81,10.81,0,0,1,7.5,2.548q2.842,2.549,2.841,7.35V17.46H12.281V11.237a4.977,4.977,0,0,0-.441-2.5,1.663,1.663,0,0,0-1.518-.687,1.588,1.588,0,0,0-1.543.784,5.034,5.034,0,0,0-.417,2.3V32.258a4.609,4.609,0,0,0,.49,2.425,1.633,1.633,0,0,0,1.471.76q1.959,0,1.959-3.185v-7.6h8.477V32.6q0,10.584-10.633,10.584A9.738,9.738,0,0,1,2.75,40.294Zm200.631,2.5V.7h16.856V8.835h-8.281v8.184h7.938v7.938h-7.938V34.61h8.82v8.183Zm-11.956,0-4.214-21.07v21.07h-8.232V.7h8.673l3.871,20.138V.7h8.134v42.09Zm-46.746,0-.588-6.81H139l-.49,6.81h-8.183L134.389.7h14.259l4.019,42.09Zm-5.047-13.523h3.822L141.592,7.856H141.2ZM108.32,42.792V.7h11.123q5.048,0,7.2,3.258t2.155,9.531q0,6.272-1.911,9.456t-6.86,3.185H116.6v16.66ZM116.6,18.537h.49a3.574,3.574,0,0,0,2.229-.563,2.678,2.678,0,0,0,.931-1.616,15.685,15.685,0,0,0,.221-3.014,9.1,9.1,0,0,0-.589-3.821,2.369,2.369,0,0,0-2.352-1.176H116.6ZM96.9,42.792V12.461L92.053,42.792H84.506L79.362,12.461V42.792h-7.6V.7H84.6l3.528,25.676L91.66.7H104.6v42.09Zm-35.672,0-.588-6.81h-5.1l-.49,6.81H46.875L50.942.7H65.2l4.019,42.09ZM56.185,29.269h3.821L58.145,7.856h-.391ZM35.9,42.792V23.683H31.93v19.11H23.551V.7H31.93V15.745H35.9V.7h8.379v42.09Z" transform="translate(77.539 157.291)" fill="url(#linear-gradient-small)"/>
						</g>
					</svg>
				):  */
				index==1 && (
					<svg xmlns="http://www.w3.org/2000/svg" className="landscape:hidden w-[75%] mx-auto h-auto md:w-[550px]" viewBox="0 0 280 125.284">
						<g id="Group_4128" data-name="Group 4128" transform="translate(-77.5 -126.666)">
							<text id="_IS_COMING" data-name=" IS COMING" transform="translate(87.5 235.95)" font-size="49" font-family="Anton-Regular, Anton"><tspan x="0" y="0" xmlSpace="preserve"> IS COMING</tspan></text>
							<g id="Group_4126" data-name="Group 4126" transform="translate(-274 -119.473)">
							<text id="Candor_" data-name="Candor! " transform="translate(410.5 285.139)" font-size="40" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">Candor! </tspan></text>
							<rect id="Rectangle_2740" data-name="Rectangle 2740" width="51.776" height="53.284" rx="19" transform="translate(351.5 246.139)" fill="#1795f8"/>
							<text id="C" transform="translate(365.246 281.855)" fill="#fff" font-size="32" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">C</tspan></text>
							</g>
						</g>
					</svg>
				)}
				{/* index==0 ?(
					<svg xmlns="http://www.w3.org/2000/svg"  className="portrait:hidden w-[25vw]" viewBox="0 0 505.656 173.5">
						<defs>
							<linearGradient id="linear-gradient" x1="-0.071" y1="0.557" x2="1.077" y2="0.361" gradientUnits="objectBoundingBox">
							<stop offset="0" stop-color="#f646b2"/>
							<stop offset="0.531" stop-color="#0deef7"/>
							<stop offset="1" stop-color="#7fff10"/>
							</linearGradient>
						</defs>
						<g id="Group_4122" data-name="Group 4122" transform="translate(-376.607 -294.5)">
							<text id="_IS_COMING" data-name=" IS 
						COMING" transform="translate(674.264 379)" fill="#171717" font-size="66" font-family="Anton-Regular, Anton"><tspan x="0" y="0" xmlSpace="preserve"> IS </tspan><tspan x="0" y="67" xmlSpace="preserve"> COMING</tspan></text>
							<g id="Group_4121" data-name="Group 4121">
							{index==0 && <text id="CHAMPAGNE" transform="translate(385.607 378.5)" fill="#fff" stroke="#000" stroke-width="9" font-size="64" font-family="Anton-Regular, Anton"><tspan x="0" y="0">CHAMPAGNE</tspan></text>}
							<path id="Intersection_1" data-name="Intersection 1" d="M205.186,51.4q-2.912-4.192-2.911-12.7V15.017q0-7.615,3.392-11.52t10.112-3.9q5.44,0,8.448,2.175a11.192,11.192,0,0,1,4.16,6.336,41.048,41.048,0,0,1,1.152,10.688H218.786V13.865a7.012,7.012,0,0,0-.544-3.072A1.989,1.989,0,0,0,216.29,9.7q-3.136,0-3.136,4.1V40.425a8.722,8.722,0,0,0,.64,3.776,2.6,2.6,0,0,0,4.48,0,8.722,8.722,0,0,0,.64-3.776V32.553H215.97V23.08h13.44v32h-4.416l-1.856-4.608a9.773,9.773,0,0,1-9.088,5.12Q208.1,55.593,205.186,51.4Zm-201.6.416Q-.03,48.041-.03,41.449V16.1q0-8.192,3.263-12.352t10.24-4.16a14.116,14.116,0,0,1,9.792,3.327q3.713,3.329,3.712,9.6v9.473H16.034V13.865a6.5,6.5,0,0,0-.576-3.263,2.173,2.173,0,0,0-1.984-.9,2.073,2.073,0,0,0-2.016,1.024,6.58,6.58,0,0,0-.544,3.008V41.321a6.02,6.02,0,0,0,.64,3.168,2.132,2.132,0,0,0,1.92.992q2.56,0,2.56-4.16V31.4H27.106V41.769q0,13.824-13.888,13.824A12.718,12.718,0,0,1,3.586,51.817Zm262.048,3.264V.105H287.65V10.729H276.834V21.417H287.2V31.785H276.834V44.393h11.52V55.081Zm-15.616,0-5.5-27.52v27.52H233.762V.105H245.09l5.056,26.3V.105H260.77V55.081Zm-61.056,0-.769-8.9h-6.656l-.64,8.9H170.21L175.522.105h18.625l5.248,54.976ZM182.37,37.417h4.992L184.93,9.449h-.512Zm-40.9,17.664V.105H156q6.592,0,9.409,4.255t2.816,12.449q0,8.192-2.5,12.352t-8.959,4.16h-4.48v21.76ZM152.29,23.4h.64a4.677,4.677,0,0,0,2.912-.736,3.5,3.5,0,0,0,1.216-2.111,20.48,20.48,0,0,0,.288-3.937,11.889,11.889,0,0,0-.769-4.991,3.094,3.094,0,0,0-3.072-1.536H152.29Zm-25.728,31.68V15.465l-6.336,39.616H110.37L103.65,15.465V55.081H93.73V.105H110.5l4.608,33.536L119.714.105h16.9V55.081Zm-46.592,0-.768-8.9H72.546l-.641,8.9H61.218L66.53.105H85.154L90.4,55.081ZM73.378,37.417H78.37L75.938,9.449h-.511Zm-26.5,17.664V30.121H41.7v24.96H30.754V.105H41.7V19.753h5.184V.105H57.826V55.081Z" transform="translate(387.624 323.419)" fill="url(#linear-gradient)"/>
							</g>
						</g>
					</svg>
				):  */
				index==1 && (
					<svg xmlns="http://www.w3.org/2000/svg" className="portrait:hidden w-[25vw]" viewBox="0 0 590 167">
						<g id="Group_4127" data-name="Group 4127" transform="translate(-351.5 -235)">
							<text id="_IS_COMING" data-name=" IS 
						COMING" transform="translate(660.5 313)" fill="#171717" font-size="66" font-family="Anton-Regular, Anton"><tspan x="0" y="0" xmlSpace="preserve"> IS </tspan><tspan x="0" y="67" xmlSpace="preserve"> COMING</tspan></text>
							<text id="Candor_" data-name="Candor! " transform="translate(436.926 305.139)" font-size="61" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">Candor! </tspan></text>
							<rect id="Rectangle_2740" data-name="Rectangle 2740" width="74.967" height="77.15" rx="19" transform="translate(351.5 246.139)" fill="#1795f8"/>
							<text id="C" transform="translate(371.402 299.967)" fill="#fff" font-size="48" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">C</tspan></text>
						</g>
					</svg>
				)}
			</div>
			{/* index==0? (
				<span className="mb-3 font-inter text-center lg1:text-left text-[2.1vh] lg1:text-[1.2vw] text-[#888888] ml-2 mt-2 block">
					The hot new friendship, dating, gaming,<br/>
					hot gossips, hot campus news, social<br/>
					and banking app app for young <br/>
					people
				</span>
			):  */
			index==1 && (
				<span className="mb-3 font-inter text-center lg:text-left text-[2.1vh] lg1:text-[1.2vw] text-[#888888] ml-2 mt-2 block">
					The new app for chatting, <br/>
					messaging, Q&A, polling, enjoying <br/>
					groups and making friends - all <br/>
					done anonymously
				</span>
			)}
			
			{/* <div className="portrait:justify-center lg1:px-3 flex flex-row gap-2">
				<div style={{opacity:index==1? 1: .32}} className={`w-3 h-3 rounded-full bg-black`}></div>
				<div style={{opacity:index==0? 1: .32}} className={`w-3 h-3 rounded-full bg-black`}></div>
			</div> */}
		</div>
	)
}

const TextInputLarge:FC<any> = ({loading, onSubmit})=>{
	const [value, setValue] = useState("")
	const [value1, setValue1] = useState("")
	const [index, setIndex] = useState(0)
	const toggleIndex = ()=>{
		setIndex(1-index)
	}
	return (
		<>
			<span className="font-anton hidden lg1:inline text-[25px] text-[#171717]">{index==0? "JOIN THE EXPERIENCE": "CHECK YOUR REFERRAL"}</span>
			<div className="flex portrait:hidden flex-row h-[65px] lg1:h-[19.06%] gap-3 mt-[19px] mb-[26px]">
				
				{index==0? (
					<div className="w-[345px] lg:flex h-full lg1:w-[686px] flex-row items-center border-[3px] border-black rounded-full">
						<input placeholder="Enter your email" value={value} onChange={(e)=>setValue(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
						<button onClick={()=>onSubmit(value)} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{(loading && index==0)? "LOADING..." : "ENTER THE EXPERIENCE"}</button>
					</div>
				): (
					<button onClick={toggleIndex} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-black h-full border-black border-4 rounded-full">ENTER THE EXPERIENCE</button>
				)}
				{index==1?(
					<div className="w-[345px] lg:flex h-full lg1:w-[686px] flex-row items-center border-[3px] border-black rounded-full">
						<input placeholder="Enter your email" value={value1} onChange={(e)=>setValue1(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
						<button onClick={()=>onSubmit(value1)} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{(loading && index==1)? "LOADING..." : "REFERRAL MILESTONE"}</button>
					</div>
				): (
					<button onClick={toggleIndex} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-black h-full border-black border-4 rounded-full">REFERRAL MILESTONE</button>
				)}
			</div>
		</>
	)
}

const TextInputPortrait:FC<any> = ({loading, onSubmit})=>{
	const [value, setValue] = useState("")
	const [value1, setValue1] = useState("")
	const [index, setIndex] = useState(0)
	const toggleIndex = ()=>{
		setIndex(1-index)
	}
	return (
		<div className="flex landscape:hidden flex-row gap-2 mt-[19px] mb-[26px]">
			<div className="flex flex-col w-full  md:w-[600px] lg1:w-[686px] mx-auto">
				{
					index == 0 ? (
						<>
							<div className="w-full h-[65px] flex flex-row items-center border-[3px] border-black mt-[19px] mb-[10px] rounded-full">
								<input placeholder="Enter your email" value={value} onChange={(e)=>setValue(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
							</div>
							<div className="grid h-[65px] grid-cols-2 gap-2">
								<button onClick={()=>onSubmit(value)} className="font-anton text-[15px] lg1:text-[19px] px-[15px] min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{loading && index==0? "LOADING..." : "ENTER THE EXPERIENCE"}</button>
								<button onClick={toggleIndex} className="font-anton text-[15px] lg1:text-[19px] px-[15px] min-w-[105px] lg1:min-w-[230px] text-black h-full bg-white border-[3px] border-black rounded-full">REFERRAL MILESTONE</button>
							</div>
						</>
					) : (
						<>
							<div className="w-full h-[65px] flex flex-row items-center border-[3px] border-black mt-[19px] mb-[12px] rounded-full">
								<input placeholder="Enter your email" value={value1} onChange={(e)=>setValue1(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
							</div>
							<div className="grid h-[65px] grid-cols-2 gap-2">
								<button onClick={toggleIndex} className="font-anton text-[15px] lg1:text-[19px] px-[15px] min-w-[105px] lg1:min-w-[230px] text-black h-full bg-white border-[3px] border-black rounded-full">ENTER THE EXPERIENCE</button>
								<button onClick={()=>onSubmit(value1)} className="font-anton text-[15px] lg1:text-[19px] px-[15px] min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{loading && index==1? "LOADING..." : "REFERRAL MILESTONE"}</button>
							</div>
						</>
					)
				}
				{/* {index==0? (
					<>
						<div className="w-full h-[65px] md:w-[500px] h-[65px] lg1:w-[686px] flex flex-row items-center border-[3px] border-black mt-[19px] mb-[26px] rounded-full">
							<input placeholder="Enter your email" value={value} onChange={(e)=>setValue(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
						</div>
						<button onClick={onSubmit} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{loading? "LOADING..." : "ENTER THE EXPERIENCE"}</button>
					</>
				): (
					<button onClick={toggleIndex} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-black h-full border-black border-4 rounded-full">ENTER THE EXPERIENCE</button>
				)}
				{index==1?(
					<div className="w-[345px] hidden lg:flex h-full lg1:w-[686px] flex-row items-center border-[3px] border-black rounded-full">
						<input placeholder="Enter your email" value={value1} onChange={(e)=>setValue1(e.target.value)} className="outline-none w-full bg-transparent px-[31px] font-inter font-medium text-[15px] lg1:text-[18px]"/>	
						<button onClick={()=>onSubmit(value1)} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-white h-full bg-black rounded-full">{(loading && index==1)? "LOADING..." : "REFERRAL MILESTONE"}</button>
					</div>
				): (
					<button onClick={toggleIndex} className="font-anton text-[12px] lg1:text-[19px] px-[15px] lg1:truncate min-w-[105px] lg1:min-w-[230px] text-black h-full border-black border-4 rounded-full">REFERRAL MILESTONE</button>
				)} */}
			</div>
		</div>
	)
}


const IsComing: FC = ({_referrer}:any) => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false)
	const onSubmit = (val:string)=>{
		if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val))){
			alert("Enter a valid email address")
			return
		}
		setLoading(true)
		fetch("/api/create-record", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email:val, _referrer}),
		})
			.then((res) => res.json())
			.then((data) => {
				window.location.href = "/milestone/"+data?.fields?.Key
			})
			.catch((err) => {
				console.log("error",err?.message)
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<Layout footer={false} navbar={false}>
			<div className="px-6">
				<div className="flex flex-row pt-[50px] lg:pt-[9.35vh] justify-center flex-1">
					<div className="lg:mt-[13.89vh] mr-8">
						<TitleComponent/>
					</div>
					<Image
						alt="Champagne app screens"
						src="/images/content/phone-view.png"
						width="854"
						height="767"
						className="portrait:hidden w-[34%]"
					/>
				</div>
				<TextInputPortrait loading={loading} onSubmit={onSubmit}/>
				<div className="landscape:bg-[#FAFAFA] w-full lg1:mt-[-17.6vh] h-[37.41vh] landscape:absolute landscape:bottom-0 landscape:left-0 landscape:right-0 flex flex-col landscape:justify-center items-center z-1000">
					<TextInputLarge loading={loading} onSubmit={onSubmit}/>
					<Current />

					<Image
						alt="Champagne app screens"
						src="/images/content/phone-view.png"
						width={345}
						height={120}
						className="landscape:hidden mt-[40px] w-[80%]"
					/>
				</div>
			</div>
		</Layout>
	);
}

export default IsComing;
