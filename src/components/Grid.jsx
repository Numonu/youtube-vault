import { Video } from "./Video";
import styles from "./styles/Grid.module.scss";
export function Grid() {
	return (
		<div className={styles.grid}>
			<Video
				videoLink={"https://www.youtube.com/watch?v=nbk66Yw3UKk"}
				title="Video sobre planetas xd"
				description="Este es un video sobre planetas , fue animado por el estudio de animacion gatsby"
			/>
		</div>
	);
}
