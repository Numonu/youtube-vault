import { Video } from "./Video";
import styles from "./styles/Grid.module.scss";
export function Grid({children}) {
	return (
		<div className={styles.grid}>
			{children}
		</div>
	);
}

Grid.Video = Video;
