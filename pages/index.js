import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import houses from "../houses";
import House from "../components/house";

export default function Home() {
  return (
    <div>
      <h2> Places to stay</h2>

      <div className="houses">
        {houses.map((house, index) => {
          return <House key={index} {...house} />;
        })}
      </div>
    </div>
  );
}
