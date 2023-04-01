import { useState } from "react";
import { getVideoCode } from "../javascript/getVideoCode";
import { Popup } from "./Popup";
import styles from "./styles/Video.module.scss";

export function Video({ order, videoLink, title, description }) {
	const [titleLocal, setTitleLocal] = useState(title);
	const [descriptionLocal, setDescriptionLocal] = useState(description);

	const [normalMode, setNormalMode] = useState(false);
	const [showActions, setShowActions] = useState(false);

	const videoCode = getVideoCode(videoLink);

	const toogleActions = () => setShowActions(!showActions);
	const toogleMode = () => setNormalMode(!normalMode);

	return (
		<div className={styles.container}>
			<iframe
				className={styles.video}
				src={`https://www.youtube.com/embed/${videoCode}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			{normalMode ? (
				<div className={styles.about}>
					<div>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.description}>{description}</p>
					</div>
					<div>
						<div
							className={styles.dottsBox}
							onClick={toogleActions}
						>
							<i
								className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
							></i>
							{showActions && (
								<Popup>
									<Popup.Action
										onClick={toogleMode}
										fontAwesome="fa-solid fa-pencil"
										content="Edit content"
									/>
									<Popup.Action
										fontAwesome="fa-solid fa-trash"
										content="Delete video"
									/>
								</Popup>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className={styles.about}>
					<div>
						<input
							type="text"
							className={styles.inputTitle}
							value={titleLocal}
							onChange={e => setTitleLocal(e.target.value)}
						/>
						<input
							type="text"
							className={styles.inputDescription}
							value={descriptionLocal}
							onChange={e => setDescriptionLocal(e.target.value)}
						/>
					</div>
					<div>
						<div
							className={styles.dottsBox}
							onClick={toogleActions}
						>
							<i
								className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
							></i>
							{showActions && (
								<Popup>
									<Popup.Action
										onClick={toogleMode}
										fontAwesome="fa-solid fa-pencil"
										content="Save"
									/>
									<Popup.Action
										fontAwesome="fa-solid fa-trash"
										content="Restart"
									/>
								</Popup>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
