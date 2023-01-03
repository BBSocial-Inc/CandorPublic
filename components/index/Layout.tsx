/* eslint-disable @next/next/inline-script-id */
import Head from "next/head";
import Script from "next/script";

interface LayoutProps {
	children: any;
	title?: string;
	desc?: string;
	pt?: boolean;
	college?: string;
	footer?: boolean;
	shared?: string;
	navbar?: boolean;
	ogImage?: string;
}

const Layout = ({
	// @ts-ignore
	children,
	title,
	desc = `Connect, engage, and chat anonymously 
	with friends - all in one app!`,
	footer = true,
	college,
	navbar = true,
	ogImage = "Logo.png",
}: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Candor - Only Truths, No Lies!</title>
				<meta name="description" content={desc} />
				<meta property="og:type" content="website" />
				<meta
					name="og:title"
					property="og:title"
					content="Candor - Only Truths, No Lies!"
				/>
				<meta
					name="og:description"
					property="og:description"
					content={desc}
				/>
				<meta
					property="og:image"
					content={"https://www.playcandor.com/"+ogImage}
				/>
				<meta
					property="snapchat:sticker"
					content={`https://playcandor/Logo.png`}
				/>
				<meta
					name="keywords"
					content="Candor"
				/>
				<meta name="author" content="Candor" />
				<meta property="og:site_name" content="Candor" />
				<meta property="og:url" content={`https://playcandor.com`} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={"Candor"} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
			</Head>

			<Script>
				{`(function (d, s, id) {
					var js,
						sjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) return;
						js = d.createElement(s);
						js.id = id;
						js.src = "https://sdk.snapkit.com/js/v1/create.js";
						sjs.parentNode.insertBefore(js, sjs);
					})(document, "script", "snapkit-creative-kit-sdk");
					
					window.snapKitInit = function () {
						snap.creativekit.initalizeShareButtons(
							document.getElementsByClassName("snapchat-share-button")
						);
					};
					`}
			</Script>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-Q2KH8H5GV6"
				strategy="afterInteractive"
			/>
			<Script>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-Q2KH8H5GV6');
				`}
			</Script>

			<div className="flex-grow overflow-hidden">{children}</div>
		</div>
	);
};

export default Layout;
