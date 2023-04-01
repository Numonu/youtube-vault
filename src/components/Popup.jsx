import { Action } from "./Action";
import styles from "./styles/Popup.module.scss";
export function Popup({children}) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}
Popup.Action = Action;
