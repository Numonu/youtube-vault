import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import styles from "./styles/Search.module.scss";

export function Search() {
	const [link, setLink] = useState("");
	const fromProvider = useContext(AppContext);
	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				type="text"
				value={link}
				placeholder="Paste youtube video link..."
				onChange={(e) => setLink(e.target.value)}
			/>
			<button
				className={styles.button}
				onClick={() => {
					setLink("");
					fromProvider.addNewVideoInCollection(link)
				}}
			>
				Add Video
			</button>
		</div>
	);
}
