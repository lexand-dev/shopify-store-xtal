import Image from 'next/image';
import styles from './Hero.module.scss';
const Hero = () => {
  return ( 
    <div className={styles.hero}>
      <div className={styles.hero__image}>
        <Image 
          src="/images/description.jpeg" 
          alt="" 
          fill
        />
      </div>
      <div className={styles.hero__content}>
        <h2 className={styles.hero__content__title}>Bring the future today</h2>
        <p className={styles.hero__content__text}>Future World: Your Gateway to Tomorrows Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </div>
   );
}
 
export default Hero;