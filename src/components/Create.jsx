import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./App";
import styles from "./styles/Create.module.scss";
export function Create() {
	const [value, setValue] = useState("");
	const fromContext = useContext(AppContext);
	return (
		<div className={styles.container}>
			<input
				type="text"
				className={styles.input}
				placeholder="Collection Title"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.button} onClick={() => {
				setValue("");
				fromContext.createCollection(value)
			}}>
				Add Collection
			</button>
		</div>
	);
}
