import { TiTick } from "react-icons/ti"
import Image from "next/image"
import CloudImage from '../../../public/cloudImage.png'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero} >

            <div className={styles.heroLeft} >
                <h1 className={styles.title} >Cloud hosting</h1>
                <p className={styles.desc} >the best hosting solution for your online success</p>

                <div className={styles.services} >
                    <div className={styles.e} >
                        <TiTick /> Easy to use Control Panel
                    </div>
                    <div className={styles.serviceItem} >
                        <TiTick /> Secure Hosting
                    </div>
                    <div className={styles.serviceItem} >
                        <TiTick />Website maintaince
                    </div>
                </div >
            </div>
            <div>
                <Image src={CloudImage} alt={"Cloud Image"} width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero