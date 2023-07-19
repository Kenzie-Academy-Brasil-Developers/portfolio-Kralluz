import styles from './styles.module.css'
import brand from '../../assets/portfolio.png'

export const HeaderComponent = ()=>{
    return(
        <>
            <header>
                <img className={styles.brand} src={brand} alt="" />
                <nav>
                    <p>Sobre</p>
                    <p>Stack</p>
                    <p>Projetos</p>
                </nav>
                <button>Contato</button>
            </header>
        </>
    )
}