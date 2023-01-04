import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/index/Layout";
import Headd from "../components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Headd/>
    </>
  );
}
