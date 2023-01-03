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
}

const Layout = ({
	// @ts-ignore
	children,
	title,
	desc = `Champagne - the real social app for college students`,
	footer = true,
	college,
	shared,
	navbar = true,
}: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Champagne</title>
				<meta name="description" content={desc} />
				<meta property="og:type" content="website" />
				<meta
					name="og:title"
					property="og:title"
					content={
						shared
							? shared
							: "Connect, engage, and chat anonymously with friends"
					}
				/>
				<meta
					name="og:description"
					property="og:description"
					content={desc}
				/>
				<meta
					property="og:image"
					content="https://www.champagneapp.com/ogimage.jpeg"
				/>
				<meta
					property="snapchat:sticker"
					content={`https://joinchampagne.com/images/logos/logo.jpg`}
				/>
				<meta
					name="keywords"
					content="Dating, Champagne, College Dating"
				/>
				<meta name="author" content="Champagne" />
				<meta property="og:site_name" content="Champagne" />
				<meta property="og:url" content={`https://joinchampagne.com`} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={"Champagne"} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/android-chrome-512x512.png"
				/>
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
