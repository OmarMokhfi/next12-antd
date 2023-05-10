import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DatePicker } from "antd";

export default function Home() {
  return (
    <div className="space-y-5">
      <div>
        <DatePicker />
      </div>
      <button className="px-8 py-2 rounded-xl bg-green-500 text-white">
        Tailwind Test
      </button>
    </div>
  );
}
