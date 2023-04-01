import { useState } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { exampleData } from "../database/data";
import { AppReducer } from "../Reducers/AppReducer";
import { Cascade } from "./Cascade";
import { Grid } from "./Grid";
import { Layout } from "./Layout";

export const AppContext = createContext(null);

export function App() {
	const [data, dispatch] = useReducer(AppReducer(), [...exampleData]);
	const [collectionFocus, setCollectionFocus] = useState(0);

	const collections = data.map((e, i) => (
		<Cascade.Collection order={i} key={e.collection} title={e.collection} />
	));
	const videos = data[collectionFocus].videos.map((e,i) => (
		<Grid.Video
            order={i}
            key={e.title}
			title={e.title}
			description={e.description}
			videoLink={e.link}
		/>
	));

	function changeCollectionFocus(order) {
		setCollectionFocus(order);
	}
    function editVideoTitle(content , order){
        dispatch({
            type : "edit-video-title",
            value : {
                collectionFocus,
                order,
                content
            }
        })
    }

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
                        editVideoTitle
                    }}>
                        {videos}
                    </AppContext.Provider>
				</Grid>
			</Layout.Body>
		</Layout>
	);
}
