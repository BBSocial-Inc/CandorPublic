import Head from "next/head";

export default function Headd({ title, image }: any) {
  const dash = title == "" ? "" : " |";
  return (
    <Head>
      <title>{dash + "Candor - Only Truths, No Lies!"} </title>
      <meta
        name="title"
        content={dash + "Candor - Only Truths, No Lies!"}
      ></meta>
      <meta
        name="og:title"
        content={dash + "Candor - Only Truths, No Lies!"}
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://playcandor.com/"></meta>
      <meta
        name="description"
        content="Connect, engage, and chat anonymously with friends - all in one app!"
      />
      <meta
        name="og:description"
        content="Connect, engage, and chat anonymously with friends - all in one app!"
      />
      <link rel="icon" href="/Logo.png" />
      <meta
        name="og:image"
        property="og:image"
        content={image ? image : "https://playcandor.com/Logo.png"}
      ></meta>

      <meta
        name="twitter:title"
        content={dash + "Candor - Only Truths, No Lies!"}
      ></meta>
      <meta
        content="Connect, engage, and chat anonymously with friends - all in one app!"
        name="twitter:description"
      ></meta>
      <meta
        name="twitter:image"
        content={image ? image : "https://playcandor.com/Logo.png"}
      ></meta>

      <script
        dangerouslySetInnerHTML={{
          __html: `    window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-Y5P4TVP212')`,
        }}
      />
    </Head>
  );
}
