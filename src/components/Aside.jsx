import styles from "./styles/Aside.module.scss";
export function Aside({children}){
    return <div className={styles.aside}>
        {children}
    </div>
}