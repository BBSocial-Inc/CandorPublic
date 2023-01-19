import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row items-center justify-between my-4 px-6 md:px-10 lg:px-32 xl:px-44 2xl:px-72">
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[147.69px] md:w-[216.948px]" viewBox="0 0 89.449 26.037">
                    <text id="Candor_" data-name="Candor! " transform="translate(28.449 18.156)" font-size="15" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">Candor! </tspan></text>
                    <g id="Group_4166" data-name="Group 4166">
                        <rect id="Rectangle_2871" data-name="Rectangle 2871" width="25.301" height="26.037" rx="7" transform="translate(0 0)" fill="#1795f8"/>
                        <text id="C" transform="translate(7.34 17.536)" fill="#fff" font-size="14" font-family="FredokaOne-Regular, Fredoka One"><tspan x="0" y="0">C</tspan></text>
                    </g>
                </svg>
            </Link>
            <div className="lg:hidden inline-flex items-center">
                <Link href="https://giveaway.playcandor.com/1"><button className="bg-black  text-white font-fredoka rounded-full text-sm px-8 py-3">Giveaway</button></Link>
                <button className="ml-4" onClick={()=>setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.075" height="22.178" viewBox="0 0 26.075 22.178">
                        <g id="Group_3655" data-name="Group 3655" transform="translate(-332.925 -77.411)">
                            <path id="Path_3350" data-name="Path 3350" d="M12561.943,1221.888h22.075" transform="translate(-12227.019 -1142.477)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"/>
                            <path id="Path_3351" data-name="Path 3351" d="M12561.943,1221.888h22.075" transform="translate(-12227.019 -1133.388)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"/>
                            <path id="Path_3352" data-name="Path 3352" d="M12561.943,1221.888h22.075" transform="translate(-12227.019 -1124.299)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"/>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex flex-row items-center gap-8">
                <ul className="flex flex-row items-center gap-12">
                    <li className="text-fredoka hidden text-lg text-[#888888]">Brands</li>
                    <li className="text-fredoka hidden text-lg text-[#888888]">Parents</li>
                    <Link href="/safety"><li className="text-fredoka text-lg text-[#888888]">Safety</li></Link>
                    <a href="mailto:contact.candor@gmail.com"><li className="text-fredoka text-lg text-[#888888]">Contact</li></a>
                </ul>
                <Link href="https://giveaway.playcandor.com/1"><button className="bg-black text-white font-fredoka rounded-full text-lg px-8 py-3">Giveaway</button></Link>
            </div>
            
            {
                open && (
                    <>
                        <div className="flex lg:hidden flex-col justify-center gap-6 py-4 absolute z-50 top-0 left-0 right-0 bottom-0 bg-black opacity-50"/>
                        <div className="flex lg:hidden flex-col items-center justify-center gap-6 pt-10 pb-5 absolute z-50 bg-white top-0 left-0 right-0">
                            <ul className="flex flex-col items-center gap-3">
                                <li className="text-fredoka hidden text-lg text-black">Brands</li>
                                <li className="text-fredoka hidden text-lg text-black">Parents</li>
                                <Link href="/safety"><li className="text-fredoka text-lg text-black">Safety</li></Link>
                                <a href="mailto:contact.candor@gmail.com"><li className="text-fredoka text-lg text-black">Contact</li></a>
                            </ul>
                            <svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" className="absolute right-9 top-9" width="31.07" height="31.07" viewBox="0 0 31.07 31.07">
                                <g id="Group_3667" data-name="Group 3667" transform="translate(-11896.508 20031.854)">
                                    <circle id="Ellipse_1316" data-name="Ellipse 1316" cx="15.535" cy="15.535" r="15.535" transform="translate(11896.508 -20031.854)" fill="#e5e5e5"/>
                                    <line id="Line_54" data-name="Line 54" x2="9.922" y2="9.922" transform="translate(11907.146 -20021.141)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"/>
                                    <line id="Line_55" data-name="Line 55" x1="10.05" y2="10.198" transform="translate(11907.018 -20021.418)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"/>
                                </g>
                            </svg>

                            <Link href="https://giveaway.playcandor.com/1"><button className="bg-black text-white font-fredoka rounded-full w-[300px] text-lg px-8 py-3">Giveaway</button></Link>
                        </div>
                    </>
                )
            }
        </div>
    )
}