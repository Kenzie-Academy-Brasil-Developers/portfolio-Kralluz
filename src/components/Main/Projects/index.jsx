import styles from "./styles.module.css";
import img from "../../../assets/git-icon.png";
import { projects } from "../../../data/projects.js";

export const ProjectsComponent = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.title1}>Principais projetos</h2>
            <div className={styles.main__card}>
                {projects.map((item) => {
                    return (
                        <div className={styles.card}>
                            <div className={styles.header__card}>
                                <h6>{item.name}</h6>
                                <img
                                    className={styles.git__icon}
                                    src={img}
                                    alt=""
                                />
                            </div>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank">
                                Saiba mais
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
