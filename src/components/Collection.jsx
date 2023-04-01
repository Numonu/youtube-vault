import styles from "./styles/Collection.module.scss";
export function Collection({title}){
    return <div className={styles.collection}>
        <h1 className={styles.title}>{title}</h1>
    </div>
}