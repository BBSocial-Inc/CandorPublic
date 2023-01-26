import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex flex-col relative md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 py-12 w-full px-6 md:px-10 lg:px-32 xl:px-44 2xl:px-72 bg-black">
            <div className="items-start md:items-center flex flex-col md:flex-row gap-4 md:gap-12">
                <Link href=""><span className="font-fredoka text-md lg:text-lg text-white">Privacy Policy</span></Link>
                <Link href=""><span className="font-fredoka text-md lg:text-lg text-white">Terms of Service</span></Link>
                <Link href=""><span className="font-fredoka text-md lg:text-lg text-white">FAQ</span></Link>
            </div>
            <div className="flex flex-row items-center gap-2">
                <span className="text-white font-fredoka text-3xl lg:text-4xl">&copy;</span> 
                <span className="text-white font-fredoka text-md lg:text-lg">
                    2023 BBSocial, Inc
                </span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-6 bottom-1 md:left-2 md:-bottom-7 opacity-25" width="68" height="73" viewBox="0 0 68 73">
                <text id="_" data-name="🎲" transform="translate(0 59)" fill="#fff" font-size="55" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🎲</tspan></text>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  className="absolute left-28 top-6  md:-right-7 md:top-1 md:left-auto opacity-25" width="76" height="73" viewBox="0 0 76 73">
                <text id="_" data-name="😎" transform="translate(0 59)" fill="#fff" font-size="55" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">😎</tspan></text>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-20 right-36 md:-bottom-7 md:right-[55%] opacity-25" width="53" height="73" viewBox="0 0 53 73">
                <text id="_" data-name="❔" transform="translate(0 59)" fill="#fff" font-size="55" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">❔</tspan></text>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-0 md:right-[35%] opacity-25" width="76" height="73" viewBox="0 0 76 73">
                <text id="_" data-name="📝" transform="translate(0 59)" fill="#fff" font-size="55" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">📝</tspan></text>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-8 md:right-[15%] opacity-25" width="61" height="73" viewBox="0 0 61 73">
                <text id="_" data-name="🔥" transform="translate(0 59)" fill="#fff" font-size="55" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="0">🔥</tspan></text>
            </svg>





        </div>
    )
}