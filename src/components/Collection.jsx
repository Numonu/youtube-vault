import { useContext } from "react";
import { AppContext } from "./App";
import styles from "./styles/Collection.module.scss";

export function Collection({ order, title }) {
	const fromContext = useContext(AppContext);
	const isTarget = fromContext.collectionFocus == order;
	return (
		<div
			className={`${styles.collection} ${isTarget && styles.target}`}
			onClick={() => fromContext.changeCollectionFocus(order)}
		>
			<i className={`${styles.icon} fa-regular fa-folder`}></i>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
}
