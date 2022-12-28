import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
function makeid(length: any) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // retrieve
    var myValue = localStorage.getItem("user_special_id");

    if (!myValue) {
      // store
      localStorage.setItem(makeid(16).toString(), "user_special_id");
    }
  }, []);
  return <Component {...pageProps} />;
}
