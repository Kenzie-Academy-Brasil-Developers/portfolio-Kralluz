import styles from "./styles.module.css";
import brand from "../../assets/portfolio.png";
import linkedin from '../../assets/linkedin-icon.png';
import instagram from '../../assets/instagram-svg.svg';
import github from '../../assets/github-icon.png';

export const HeaderComponent = () => {
    return (
        <>
            <header>
                <h1 className={styles.title1}>Portfólio</h1>
                <nav>
                    <a href="#about">Sobre min</a>
                    <a href="#stack">Stack</a>
                    <a href="#projects">Projects</a>
                </nav>
                    <div className={styles.boxIcons}>
                        <a
                            href="https://www.instagram.com/chenriqueal/"
                            target="_blank"
                        >
                            <img
                                className={styles.icons}
                                src={instagram}
                                alt=""
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/carlos-henrique-alves-2505a8249/"
                            target="_blank"
                        >
                            <img
                                className={styles.icons}
                                src={linkedin}
                                alt=""
                            />
                        </a>
                        <a href="https://github.com/kralluz" target="_blank">
                            <img className={styles.icons} src={github} alt="" />
                        </a>
                    </div>
            </header>
        </>
    );
};
