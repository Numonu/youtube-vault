import styles from "./styles/Action.module.scss";
export function Action({fontAwesome , content , onClick}) {
	return (
		<div className={styles.container} onClick={onClick}>
			<i className={`${styles.icon} ${fontAwesome}`}></i>
			<button className={styles.text}>{content}</button>
		</div>
	);
}
