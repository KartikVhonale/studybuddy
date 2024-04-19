import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import Base from "./component/Base";
import Login from "./component/Login";

export default function Home() {
  return (
   <>
    <Login/>
    {/* <Header/>
    <Base/> */}
   </>
  );
}
