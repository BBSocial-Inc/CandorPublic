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
			if(left && cards?.scrollLeft >= cards?.scrollWidth - cards?.clientWidth){
				left = false;
			}
			else if(!left && cards?.scrollLeft <= 0){
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
		<div className="pl-6 md:pl-10 lg:pl-32 xl:pl-44 2xl:pl-72 flex flex-col lg:flex-row w-full h-full justify-between pb-24 pt-12">
			<div className="lg:h-full flex flex-col justify-end">
				<h1 className="font-fredoka text-black text-[44px] text-center lg:text-left md:text-[60px] lg:text-[65px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[95px]">Candor!</h1>
				<span className="font-inter text-[#888888] text-[17px] text-center lg:text-left font-medium md:text-[20px] lg:text-[23px] 2xl:text-[26px] 3xl:text-[34px]">
					Candor is an app for chatting,<br/>
					messaging, Q&A, polling, enjoying<br/>
					groups and making friends. All<br/>
					done anonymously
				</span>
			</div>
			<div id="cards-container" className="flex flex-1 lg:flex-none flex-row h-full gap-16 pt-16 w-full lg:w-1/2 overflow-y-hidden overflow-x-hidden hide-scrollbar">
				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#1795F8] rounded-[20px]">
					<span className="text-white stroke-black stroke-[2px] text-[174px] leading-[100%] font-fredoka">C</span>
					<span className="font-fredoka text-3xl text-white">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FFD548] rounded-[20px]">
					<span className="font-anton text-3xl text-black">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FA2675] rounded-[20px]">
					<span className="font-anton text-3xl text-white">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#27EEF7] rounded-[20px]">
					<span className="font-anton text-3xl text-black">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#FDA625] rounded-[20px]">
					<span className="font-anton text-3xl text-white">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#8B36F8] rounded-[20px]">
					<span className="font-anton text-3xl text-white">
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

				<div className="h-full min-h-[400px] p-8 relative aspect-[1/1.36] flex flex-col justify-end bg-[#1795F8] rounded-[20px]">
					<span className="font-anton text-3xl text-white">
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
				</div>
			</div>
		</div>
		<Footer/>
	  </div>
    </div>
  );
}
