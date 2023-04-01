import { createContext } from "react";
import { useApp } from "../hooks/useApp";
import { Cascade } from "./Cascade";
import { Grid } from "./Grid";
import { Layout } from "./Layout";

export const AppContext = createContext(null);

export function App() {
	
    const {
        collections,
        videos,
        collectionFocus,
        updateVideoData,
        changeCollectionFocus
    } = useApp();

	return (
		<Layout>
			<Layout.Nav>Soy el navegador</Layout.Nav>
			<Layout.Aside>
				<Cascade>
					<AppContext.Provider value={{
                        collectionFocus,
                        changeCollectionFocus
                    }}>
						{collections}
					</AppContext.Provider>
				</Cascade>
			</Layout.Aside>
			<Layout.Body>
				<Grid>
					<AppContext.Provider value={{
                        updateVideoData
                    }}>
                        {videos}
                    </AppContext.Provider>
				</Grid>
			</Layout.Body>
		</Layout>
	);
}
