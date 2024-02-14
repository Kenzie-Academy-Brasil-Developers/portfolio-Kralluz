import styles from './styles.module.css'
import {username} from '../../../data/user.js'
import {phrase} from '../../../data/user.js'
import img from '../../../assets/banner-img.png'

export const WelcomeComponent = ()=>{
    return(
        <section className={styles.mainContainerBox}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.username}>{username}</p>
                    <h1 className={styles.title1}>Bem vindo ao meu portifólio</h1>
                    <p className={styles.phrase}>{phrase}</p>
                    <button >Saiba mais</button>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.image} src={img}/>
                </div>
            </div>
        </section>
    )
}