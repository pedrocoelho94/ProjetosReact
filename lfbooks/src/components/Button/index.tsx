import styles from './styles.module.scss'

type ButtonProps = {
   color: string
   colorText: string
   children: React.ReactNode
}

export const Button = ({ children, color, colorText }: ButtonProps) => {
   return (
      <button
         className={styles.button}
         style={{ backgroundColor: color, color: colorText }}
      >
         {children}
      </button>
   )
}
