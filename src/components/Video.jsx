import { useVideo } from "../hooks/useVideo";
import { getVideoCode } from "../javascript/getVideoCode";
import { Popup } from "./Popup";
import styles from "./styles/Video.module.scss";

export function Video({ order, videoLink, title, description }) {
	const video = useVideo({ order, title, description });
	const videoCode = getVideoCode(videoLink);
	
	if(!videoCode)return null;
	
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
				<EditingMode video={video} />
			) : (
				<NormalMode
					video={video}
					title={title}
					description={description}
				/>
			)}
		</div>
	);
}

function NormalMode({ video, title, description }) {
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
								onClick={video.deleteVideo}
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

function EditingMode({ video }) {
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
								onClick={video.updateVideoData}
								fontAwesome="fa-solid fa-pencil"
								content="Save"
							/>
						</Popup>
					)}
				</div>
			</div>
		</div>
	);
}
