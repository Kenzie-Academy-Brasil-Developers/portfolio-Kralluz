import styles from './styles.module.css';
import {user} from '../../data/user';
import linkedin from '../../assets/linkedin-icon.png';
import whatsapp from '../../assets/whatsapp-icon.png';
import github from '../../assets/github-icon.png';

export const FooterComponent = ()=>{
    return(
        <>
        <footer>
        <hr />
            <div className={styles.footer__content}>
            <div className={styles.footer__contact}>
                <h2>Contato</h2>
                <div className={styles.boxIcons}>
                    <a href="https://www.instagram.com/chenriqueal/" target='_blank'><img className={styles.icons} src={whatsapp} alt="" /></a>
                    <a href="https://www.linkedin.com/in/carlos-henrique-alves-2505a8249/" target='_blank'><img className={styles.icons} src={linkedin} alt="" /></a>
                    <a href="https://github.com/kralluz" target='_blank'><img className={styles.icons} src={github} alt="" /></a>
                    
                    
                </div>
            </div>
            <div>
                <p>&#169; Todos os direitos reservados - {user} </p>
            </div>
            </div>
        <hr />
        </footer>
        </>
    )
}