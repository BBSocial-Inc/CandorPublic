import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/index/Layout";
import Headd from "../components/Head";
import Navbar from "../components/index/Navbar";
import Footer from "../components/index/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	useEffect(()=>{
		const cards = document.getElementById("cards-container");
		let left = false;
		const timer = setInterval(()=>{
			//check if the scroll is at the end and reverse the direction
			let scrollLeft = cards?.scrollLeft || 0;
			let clientWidth = cards?.clientWidth || 0;
			let scrollWidth = cards?.scrollWidth || 0;
			if(left && scrollLeft >= scrollWidth - clientWidth){
				left = false;
			}
			else if(!left && scrollLeft <= 0){
				left = true;
			}

			if(left){
				cards?.scrollBy({left:1})
			}
			else{
				cards?.scrollBy({left:-1})
			}
		},10)
		return ()=>clearInterval(timer)
	},[])
  return (
    <div className="min-h-screen">
      <Headd/>
	  <div className="flex flex-col min-h-screen lg:h-screen justify-between">
		<Navbar/>
		<div className="pl-0 md:pl-0 lg:pl-32 xl:pl-44 2xl:pl-72 flex flex-col lg:flex-row w-full h-full justify-between pb-24 pt-12">
			<div className="lg:h-full flex flex-col justify-end">
				<h1 className="font-fredoka text-black text-[44px] text-center lg:text-left md:text-[60px] lg:text-[65px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[95px]">Candor!</h1>
				<span className="font-inter text-[#888888] text-[17px] text-center lg:text-left font-medium md:text-[20px] lg:text-[23px] 2xl:text-[26px] 3xl:text-[34px]">
					Candor is an app for chatting,<br/>
					messaging, Q&A, polling, enjoying<br/>
					groups and making friends. All<br/>
					done anonymously
				</span>
			</div>
			<div id="cards-container" className="flex flex-1 lg:flex-none flex-row h-full pt-16 w-full lg:w-1/2 overflow-hidden hide-scrollbar">
				{/* <div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#1795F8] rounded-[20px]">
					<span className="text-white stroke-black stroke-[2px] text-[174px] leading-[100%] font-fredoka">C</span>
					<span className="font-fredoka text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-white">
						Only Truth, <br/>
						No Lies!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-2 -right-16" width="80%" viewBox="0 0 330.559 131.184">
						<g id="Rectangle_2876" data-name="Rectangle 2876" transform="translate(5.548 9) rotate(3)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
						</g>
						<g id="Rectangle_2877" data-name="Rectangle 2877" transform="translate(18.987) rotate(3)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
						</g>
						<text id="_" data-name="🤩" transform="translate(227.559 96.092)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						<text id="_2" data-name="😇" transform="translate(45.559 87.092)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">😇</tspan></text>
						<text id="_3" data-name="📝" transform="translate(136.559 88.092)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">📝</tspan></text>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FFD548] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-black">
						Get real with <br/>
						your friends. <br/>
						Chat <br/>
						anonymously<br/> 
						and say what’s <br/>
						on your mind!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 -right-16" width="80%" viewBox="0 0 335.519 139.304">
						<g id="Group_4144" data-name="Group 4144" transform="translate(-1748.561 -202.235)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>

				</div>

				<div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FA2675] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-white">
					Want to see<br/>
					your question <br/>
					in the spotlight? <br/>
					Submit it now <br/>
					for a chance to <br/>
					be featured!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 -right-16" width="80%" viewBox="0 0 341.229 170.625">
						<g id="Group_4145" data-name="Group 4145" transform="matrix(0.966, 0.259, -0.259, 0.966, -1607.725, -673.281)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>


				</div>

				<div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#27EEF7] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-black">
					Earn cash by <br/>
					sharing your<br/>
					best questions. <br/>
					Submit <br/>
					premium <br/>
					questions now!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 -right-16" width="80%" viewBox="0 0 335.519 139.304">
						<g id="Group_4144" data-name="Group 4144" transform="translate(-1748.561 -202.235)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>

				</div>

				<div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FDA625] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-white">
					Don’t hold <br/>
					back! Create a <br/>
					group and <br/>
					anonymously <br/>
					connect with <br/>
					friends and <br/>
					share your true <br/>
					thoughts and <br/>
					feelings.
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -right-16" width="80%" viewBox="0 0 341.229 170.625">
						<g id="Group_4147" data-name="Group 4147" transform="matrix(0.966, 0.259, -0.259, 0.966, -1607.725, -673.281)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#8B36F8] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-white">
					Feeling alone? <br/>
					Chat anonymously <br/>
					with friends and <br/>
					connect on a <br/>
					deeper level!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 -right-16" width="80%" viewBox="0 0 335.519 139.304">
						<g id="Group_4144" data-name="Group 4144" transform="translate(-1748.561 -202.235)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>

				</div>

				<div className="h-full min-h-[450px] p-5 3xl:p-12 relative aspect-[1/1.36] flex flex-col justify-end bg-[#1795F8] rounded-[20px]">
					<span className="font-anton text-3xl 2xl:text-4xl 3xl:text-6xl leading-[100%] text-white">
					Get your brand <br/>
					in front of our <br/>
					GenZ audience <br/>
					and gather <br/>
					valuable feedback <br/> 
					through <br/>
					anonymous <br/>
					surveys. <br/>
					Contact us now!
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -right-16" width="80%" viewBox="0 0 341.229 170.625">
						<g id="Group_4147" data-name="Group 4147" transform="matrix(0.966, 0.259, -0.259, 0.966, -1607.725, -673.281)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 1748.561, 235.797)" stroke="#000" stroke-width="1">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="0.5" y="0.5" width="311" height="105" rx="52.5" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 1760.803, 225.226)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="312" height="106" rx="53" stroke="none"/>
							<rect x="2.5" y="2.5" width="307" height="101" rx="50.5" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(1797.791 308.43) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(1888.234 298.332) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(1979.531 295.184) rotate(-7)" fill="#fff" font-size="75" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
						</g>
					</svg>
				</div> */}

				<div className="h-full min-h-[450px] p-0 aspect-[317.008/406.056]">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 317.008 406.056">
						<defs>
							<filter id="Rectangle_2873" x="0" y="0" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_6" data-name="Group 6" transform="translate(24 24)">
							<g transform="matrix(1, 0, 0, 1, -24, -24)" filter="url(#Rectangle_2873)">
							<rect id="Rectangle_2873-2" data-name="Rectangle 2873" width="262.535" height="358.056" rx="22" transform="translate(24 24)" fill="#1795f8"/>
							</g>
							<text id="Only_Truth_No_Lies_" data-name="Only Truth, 
						No Lies!" transform="translate(33.989 296.497)" fill="#fff" font-size="25" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">Only Truth, </tspan><tspan x="0" y="30">No Lies!</tspan></text>
							<g id="Rectangle_2876" data-name="Rectangle 2876" transform="translate(102.546 10.494) rotate(3)" stroke="#000" stroke-width="1">
							<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
							<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2877" data-name="Rectangle 2877" transform="translate(110.422 5.22) rotate(3)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
							<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
							<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="🤩" transform="translate(232.648 59.58)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							<text id="_2" data-name="😇" transform="translate(125.993 54.306)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">😇</tspan></text>
							<text id="_3" data-name="📝" transform="translate(179.321 54.892)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">📝</tspan></text>
							<text id="C" transform="translate(30.145 254.053)" fill="#fff" stroke="#000" stroke-width="6" font-size="100" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">C</tspan></text>
						</g>
					</svg>
				</div>
				
				<div className="h-full min-h-[450px] p-0 aspect-[326.178/406.056]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 326.178 406.056">
						<defs>
							<filter id="Rectangle_2874" x="0" y="0" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_7" data-name="Group 7" transform="translate(24 24)">
							<g transform="matrix(1, 0, 0, 1, -24, -24)" filter="url(#Rectangle_2874)">
							<rect id="Rectangle_2874-2" data-name="Rectangle 2874" width="262.535" height="358.056" rx="22" transform="translate(24 24)" fill="#ffd548"/>
							</g>
							<g id="Group_4144" data-name="Group 4144" transform="translate(108.155 3.201)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Get_real_with_your_friends._Chat_anonymously_and_say_what_s_on_your_mind_" data-name="Get real with 
						your friends. 
						Chat 
						anonymously 
						and say what’s 
						on your mind!" transform="translate(24.027 179.676)" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Get real with </tspan><tspan x="0" y="29">your friends. </tspan><tspan x="0" y="58">Chat </tspan><tspan x="0" y="87">anonymously </tspan><tspan x="0" y="116">and say what’s </tspan><tspan x="0" y="145">on your mind!</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-0 aspect-[329.036/406.056]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 32 9.036 406.056">
						<defs>
							<filter id="Rectangle_2881" x="0" y="0" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_1" data-name="Group 1" transform="translate(24 3.487)">
							<g transform="matrix(1, 0, 0, 1, -24, -3.49)" filter="url(#Rectangle_2881)">
							<rect id="Rectangle_2881-2" data-name="Rectangle 2881" width="262.535" height="383.056" rx="22" transform="translate(24 24)" fill="#fa2675"/>
							</g>
							<g id="Group_4145" data-name="Group 4145" transform="matrix(0.966, 0.259, -0.259, 0.966, 121.93, 0)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Want_to_see_your_question_in_the_spotlight_Submit_it_now_for_a_chance_to_be_featured_" data-name="Want to see
						your question 
						in the spotlight? 
						Submit it now 
						for a chance to 
						be featured!" transform="translate(24.027 200.189)" fill="#fff" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Want to see</tspan><tspan x="0" y="29">your question </tspan><tspan x="0" y="58">in the spotlight? </tspan><tspan x="0" y="87">Submit it now </tspan><tspan x="0" y="116">for a chance to </tspan><tspan x="0" y="145">be featured!</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-0 aspect-[326.178/406.056]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 326.178 406.056">
						<defs>
							<filter id="Rectangle_2882" x="0" y="0" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_2" data-name="Group 2" transform="translate(24 24)">
							<g transform="matrix(1, 0, 0, 1, -24, -24)" filter="url(#Rectangle_2882)">
							<rect id="Rectangle_2882-2" data-name="Rectangle 2882" width="262.535" height="358.056" rx="22" transform="translate(24 24)" fill="#27eef7"/>
							</g>
							<g id="Group_4146" data-name="Group 4146" transform="translate(108.155 3.201)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Earn_cash_by_sharing_your_best_questions._Submit_premium_questions_now_" data-name="Earn cash by 
						sharing your
						best questions. 
						Submit 
						premium 
						questions now!" transform="translate(24.027 179.676)" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Earn cash by </tspan><tspan x="0" y="29">sharing your</tspan><tspan x="0" y="58">best questions. </tspan><tspan x="0" y="87">Submit </tspan><tspan x="0" y="116">premium </tspan><tspan x="0" y="145">questions now!</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-0 aspect-[329.036/412.106]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 329.036 412.106">
						<defs>
							<filter id="Rectangle_2883" x="0" y="6.051" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_3" data-name="Group 3" transform="translate(24 -14.176)">
							<g transform="matrix(1, 0, 0, 1, -24, 14.18)" filter="url(#Rectangle_2883)">
							<rect id="Rectangle_2883-2" data-name="Rectangle 2883" width="262.535" height="358.056" rx="22" transform="translate(24 30.05)" fill="#fda625"/>
							</g>
							<g id="Group_4147" data-name="Group 4147" transform="matrix(0.966, 0.259, -0.259, 0.966, 121.93, 0)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Don_t_hold_back_Create_a_group_and_anonymously_connect_with_friends_and_share_your_true_thoughts_and_feelings." data-name="Don’t hold 
						back! Create a 
						group and 
						anonymously 
						connect with 
						friends and 
						share your true 
						thoughts and 
						feelings." transform="translate(24.027 132.485)" fill="#fff" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Don’t hold </tspan><tspan x="0" y="29">back! Create a </tspan><tspan x="0" y="58">group and </tspan><tspan x="0" y="87">anonymously </tspan><tspan x="0" y="116">connect with </tspan><tspan x="0" y="145">friends and </tspan><tspan x="0" y="174">share your true </tspan><tspan x="0" y="203">thoughts and </tspan><tspan x="0" y="232">feelings.</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-0 aspect-[326.178/406.056]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 326.178 406.056">
						<defs>
							<filter id="Rectangle_2884" x="0" y="0" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_4" data-name="Group 4" transform="translate(24 24)">
							<g transform="matrix(1, 0, 0, 1, -24, -24)" filter="url(#Rectangle_2884)">
							<rect id="Rectangle_2884-2" data-name="Rectangle 2884" width="262.535" height="358.056" rx="22" transform="translate(24 24)" fill="#8b36f8"/>
							</g>
							<g id="Group_4148" data-name="Group 4148" transform="translate(108.155 3.201)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Feeling_alone_Chat_anonymously_with_friends_and_connect_on_a_deeper_level_" data-name="Feeling alone? 
						Chat anonymously 
						with friends and 
						connect on a 
						deeper level!" transform="translate(24.027 210.149)" fill="#fff" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Feeling alone? </tspan><tspan x="0" y="29">Chat anonymously </tspan><tspan x="0" y="58">with friends and </tspan><tspan x="0" y="87">connect on a </tspan><tspan x="0" y="116">deeper level!</tspan></text>
						</g>
					</svg>
				</div>

				<div className="h-full min-h-[450px] p-0 aspect-[334.855/428.277]">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 334.855 428.277">
						<defs>
							<filter id="Rectangle_2885" x="0" y="22.221" width="310.535" height="406.056" filterUnits="userSpaceOnUse">
							{/* <feOffset input="SourceAlpha"/> */}
							<feGaussianBlur stdDeviation="8" result="blur"/>
							<feFlood flood-opacity="0.161"/>
							<feComposite operator="in" in2="blur"/>
							<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g id="Group_5" data-name="Group 5" transform="translate(24 -14.543)">
							<g transform="matrix(1, 0, 0, 1, -24, 14.54)" filter="url(#Rectangle_2885)">
							<rect id="Rectangle_2885-2" data-name="Rectangle 2885" width="262.535" height="358.056" rx="22" transform="translate(24 46.22)" fill="#1795f8"/>
							</g>
							<g id="Group_4149" data-name="Group 4149" transform="matrix(0.921, 0.391, -0.391, 0.921, 136.359, 0)">
							<g id="Rectangle_2880" data-name="Rectangle 2880" transform="matrix(0.998, -0.07, 0.07, 0.998, 0, 18.949)" stroke="#000" stroke-width="1">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="0.5" y="0.5" width="181.837" height="61.118" rx="30.559" fill="none"/>
							</g>
							<g id="Rectangle_2879" data-name="Rectangle 2879" transform="matrix(0.998, -0.07, 0.07, 0.998, 7.174, 12.754)" fill="#fff" stroke="#0d0d0d" stroke-width="5">
								<rect width="182.837" height="62.118" rx="31.059" stroke="none"/>
								<rect x="2.5" y="2.5" width="177.837" height="57.118" rx="28.559" fill="none"/>
							</g>
							<text id="_" data-name="👯‍♂️" transform="translate(28.612 59.576) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">👯‍♂️</tspan></text>
							<text id="_2" data-name="💬" transform="translate(81.613 53.659) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">💬</tspan></text>
							<text id="_3" data-name="🤩" transform="translate(135.115 51.814) rotate(-7)" fill="#fff" font-size="42" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🤩</tspan></text>
							</g>
							<text id="Get_your_brand_in_front_of_our_GenZ_audience_and_gather_valuable_feedback_through_anonymous_surveys._Contact_us_now_" data-name="Get your brand 
						in front of our 
						GenZ audience 
						and gather 
						valuable feedback 
						through 
						anonymous 
						surveys. 
						Contact us now!" transform="translate(18.166 149.022)" fill="#fff" font-size="25" font-family="Anton-Regular, Anton"><tspan x="0" y="0">Get your brand </tspan><tspan x="0" y="29">in front of our </tspan><tspan x="0" y="58">GenZ audience </tspan><tspan x="0" y="87">and gather </tspan><tspan x="0" y="116">valuable feedback </tspan><tspan x="0" y="145">through </tspan><tspan x="0" y="174">anonymous </tspan><tspan x="0" y="203">surveys. </tspan><tspan x="0" y="232">Contact us now!</tspan></text>
						</g>
					</svg>
				</div>

			</div>
		</div>
		<Footer/>
	  </div>
    </div>
  );
}
