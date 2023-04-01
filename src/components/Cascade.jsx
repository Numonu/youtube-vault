import { Collection } from "./Collection";
import styles from "./styles/Cascade.module.scss";
export function Cascade({children}){
    return <div className={styles.cascade}>
        {children}
    </div>
}
Cascade.Collection = Collection;