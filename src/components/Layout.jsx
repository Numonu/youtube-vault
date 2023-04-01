import { Aside } from "./Aside";
import { Body } from "./Body";
import { Nav } from "./Nav";
import styles from "./styles/Layout.module.scss";
export function Layout({children}){
    return <div className={styles.layout}>
        {children}
    </div>
}

Layout.Aside = Aside;
Layout.Nav = Nav;
Layout.Body = Body;