import styles from "./styles/Body.module.scss";
export function Body({children}){
    return <div className={styles.body}>
        {children}
    </div>
}