import { useState } from "react";
import { getVideoCode } from "../javascript/getVideoCode";
import { Popup } from "./Popup";
import styles from "./styles/Video.module.scss";

export function Video({ videoLink, title, description }) {
	const [showActions , setShowActions] = useState(false);
	const videoCode = getVideoCode(videoLink);

	function toogleActions(){
		setShowActions(!showActions);
	}


	return (
		<div className={styles.container} >
			<iframe
                className={styles.video}
				src={`https://www.youtube.com/embed/${videoCode}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			<div className={styles.about}>
				<div>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
				</div>
				<div>
					<div className={styles.dottsBox} onClick={toogleActions}>
						<i className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}></i>
						{
							showActions && <Popup/>
						}
					</div>
				</div>
			</div>
		</div>
	);
}
