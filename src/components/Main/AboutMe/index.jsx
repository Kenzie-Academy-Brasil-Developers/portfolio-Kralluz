import styles from "./styles.module.css";

export const AboutMeComponent = () => {
    return (
        <section id="about" className={styles.aboutMe}>
            <h2 className={styles.title1}>Sobre mim</h2>
            <p className={styles.phrase}>
                Olá, meu nome é Carlos, sou um desenvolvedor Full Stack formado
                pela Kenzie Academy, com uma sólida experiência na resolução de
                problemas lógicos e identificação precisa de bugs. Minha
                especialização abrange as linguagens JavaScript, TypeScript e
                Python, e meu histórico inclui o desenvolvimento de aplicações
                web utilizando tecnologias modernas e eficientes como React JS,
                Next JS, Bootstrap, Styled Components, Sass e Tailwind CSS. No
                âmbito do back-end, destaco minha proficiência em Node.js com
                Express e Nest, bem como minha experiência em Python utilizando
                Django Rest Framework. Possuo uma sólida familiaridade e
                expertise em frameworks como Express e Django, contribuindo para
                a construção de soluções robustas. Adoto a metodologia ágil
                Scrum, aplicando conceitos colaborativos e de entregas
                iterativas. Além disso, tenho experiência comprovada em
                integração de APIs, complementada por uma abordagem de
                aprendizado rápido que aprimora minha habilidade de resolução de
                problemas.
            </p>
        </section>
    );
};
