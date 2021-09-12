import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Button = styled.button``;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar></Sidebar>
    </div>
  );
}
