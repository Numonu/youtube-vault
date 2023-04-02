import { createContext } from "react";
import { useApp } from "../hooks/useApp";
import { Cascade } from "./Cascade";
import { Create } from "./Create";
import { Grid } from "./Grid";
import { Layout } from "./Layout";
import { Search } from "./Search";

export const AppContext = createContext(null);

export function App() {
	const {
		collections,
		videos,
		collectionFocus,
		updateVideoData,
		changeCollectionFocus,
		addNewVideoInCollection,
		deleteVideo,
		createCollection
	} = useApp();

	return (
		<Layout>
			<Layout.Nav>
				Youtube Vault
			</Layout.Nav>
			<Layout.Aside>
				<Cascade>
					<AppContext.Provider
						value={{
							collectionFocus,
							changeCollectionFocus,
							createCollection
						}}
					>
						<Create/>
						{collections}
					</AppContext.Provider>
				</Cascade>
			</Layout.Aside>
			<Layout.Body>
				<AppContext.Provider value={{
					updateVideoData,
					addNewVideoInCollection,
					deleteVideo
				}}>
					<Search />
					<Grid>{videos}</Grid>
				</AppContext.Provider>
			</Layout.Body>
		</Layout>
	);
}
