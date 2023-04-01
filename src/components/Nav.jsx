import styles from "./styles/Nav.module.scss";
export function Nav({children}){
    return <div className={styles.nav}>
        {children}
    </div>
}