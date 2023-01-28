import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mg-4 justify-center">
      <h1 className="text-3xl font-bold">Ayivugwe Kabemba</h1>
      <div className="flex mg-4 content-center">
        <p className="">
          Welcome. My name is Ayivugwe Kabemba. I am from DRCongo. I am building
          multiple websites, most of them are in Kifuliiru my mother language. I
          decided to do so because my language does not have many written
          resources online.
        </p>
        <div className="center">
          <p className="">
            Image goes here.
          </p>
        </div>
      </div>
      <div class="center">
        <h2>My projects</h2>
        <p>Learn more about my projects here</p>
        <ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
        </ul>
      </div>
    </div>
  );
}
