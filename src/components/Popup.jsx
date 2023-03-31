import { Action } from "./Action";
import styles from "./styles/Popup.module.scss";
export function Popup() {
	return (
		<div className={styles.container}>
			<Action fontAwesome="fa-solid fa-pencil" content="Edit title" />
			<Action fontAwesome="fa-solid fa-pencil" content="Edit description" />
			<Action fontAwesome="fa-solid fa-trash" content="Delete video" />
		</div>
	);
}
