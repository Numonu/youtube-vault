import { useVideo } from "../hooks/useVideo";
import { getVideoCode } from "../javascript/getVideoCode";
import { Popup } from "./Popup";
import styles from "./styles/Video.module.scss";

export function Video({ order, videoLink, title, description }) {
	const video = useVideo({ title, description });
	const videoCode = getVideoCode(videoLink);

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
			{video.showEditing ? (
				<div className={styles.about}>
					<div>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.description}>{description}</p>
					</div>
					<div>
						<div
							className={styles.dottsBox}
							onClick={video.toogleActions}
						>
							<i
								className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
							></i>
							{video.showActions && (
								<Popup>
									<Popup.Action
										onClick={video.toogleMode}
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
							value={video.titleLocal}
							onChange={(e) =>
								video.setTitleLocal(e.target.value)
							}
						/>
						<input
							type="text"
							className={styles.inputDescription}
							value={video.descriptionLocal}
							onChange={(e) =>
								video.setDescriptionLocal(e.target.value)
							}
						/>
					</div>
					<div>
						<div
							className={styles.dottsBox}
							onClick={video.toogleActions}
						>
							<i
								className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
							></i>
							{video.showActions && (
								<Popup>
									<Popup.Action
										onClick={() =>
											video.updateVideoData(
												order,
												video.titleLocal,
												video.descriptionLocal
											)
										}
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

function NormalMode() {
	const video = useVideo();
	return (
		<div className={styles.about}>
			<div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
			</div>
			<div>
				<div className={styles.dottsBox} onClick={video.toogleActions}>
					<i
						className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
					></i>
					{video.showActions && (
						<Popup>
							<Popup.Action
								onClick={video.toogleMode}
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
	);
}

function EditingMode() {
	const video = useVideo();
	return (
		<div className={styles.about}>
			<div>
				<input
					type="text"
					className={styles.inputTitle}
					value={video.titleLocal}
					onChange={(e) => video.setTitleLocal(e.target.value)}
				/>
				<input
					type="text"
					className={styles.inputDescription}
					value={video.descriptionLocal}
					onChange={(e) => video.setDescriptionLocal(e.target.value)}
				/>
			</div>
			<div>
				<div className={styles.dottsBox} onClick={video.toogleActions}>
					<i
						className={`${styles.dotts} fa-solid fa-ellipsis-vertical`}
					></i>
					{video.showActions && (
						<Popup>
							<Popup.Action
								onClick={() =>
									video.updateVideoData(
										order,
										video.titleLocal,
										video.descriptionLocal
									)
								}
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
	);
}
