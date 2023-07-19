import styles from './styles.module.css'

export const AboutMeComponent = ()=>{
    return(
        <section className={styles.aboutMe}>
            <h2 className={styles.title1}>Sobre mim</h2>
            <p className={styles.phrase}>Olá, meu nome é Carlos e estudo na Kenzie Academy, onde estou adquirindo habilidades para me tornar um desenvolvedor Fullstack. Minhas habilidades técnicas incluem a criação de aplicativos web incríveis e a solução de problemas complexos de programação, mas também estou desenvolvendo soft skills importantes para ter sucesso na indústria de tecnologia.
            Uma das soft skills que estou aprendendo é a colaboração em equipe. Na Kenzie, trabalhamos em projetos com outros estudantes, o que me ajuda a aprimorar minhas habilidades de comunicação e trabalho em equipe. Além disso, estou aprendendo a resolver problemas de forma eficiente e a pensar fora da caixa para encontrar soluções criativas.</p>
        </section>
    )
}