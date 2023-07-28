import styles from './styles.module.css';
import { technologies } from '../../../data/technologies';


export const TecnologiesComponent = () =>{
    return(
        <section className={styles.tecnologiesSection}>
            <h2 className={styles.title1}>Tecnologias</h2>
            <div className={styles.mainCard}>
                {technologies.map(item =>{
                    return(
                        <div className={styles.card}>
                        <img className={styles.icons} src={item.img} alt="" />
                        <p>{item.name}</p>  
                    </div>
                    )
                })}
            </div>
        </section>
    )
}