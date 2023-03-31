import styles from "./styles/Action.module.scss";
export function Action({fontAwesome , content}) {
	return (
		<div className={styles.container}>
			<i className={`${styles.icon} ${fontAwesome}`}></i>
			<button className={styles.text}>{content}</button>
		</div>
	);
}
