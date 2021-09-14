import styles from './styles.module.scss'

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <section className={`container`}>
            <h1>Footer da página</h1>
            <p>
               <a href="https://br.freepik.com/vetores/escola">
                  Escola vetor criado por pch.vector - br.freepik.com
               </a>
            </p>
         </section>
      </footer>
   )
}
