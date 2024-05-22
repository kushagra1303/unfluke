import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>In partnership with</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <h1 className=" mt-5 mb-3 object-contain text-white font-bold text-[30px]">TradingView</h1>- is a widely recognized and highly regarded platform among traders and investors, with a vast user base spanning the globe.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button className = "ml-5"/>
    </div>
  </section>
);

export default CTA;
