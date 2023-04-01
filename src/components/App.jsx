import { useReducer } from "react";
import { exampleData } from "../database/data";
import { AppReducer } from "../Reducers/AppReducer";
import { Cascade } from "./Cascade";
import { Grid } from "./Grid";
import { Layout } from "./Layout";


export function App() {
    const [data , dispatch] = useReducer(AppReducer() , [...exampleData]);

    const collections = data.map(e => <Cascade.Collection key={e.collection} title={e.collection}/>);

	return (
		<Layout>
			<Layout.Nav>Soy el navegador</Layout.Nav>
			<Layout.Aside>
                <Cascade>
                    {collections}
                </Cascade>
            </Layout.Aside>
			<Layout.Body>
				<Grid>
					<Grid.Video
						title={"Vegetta y fargan en Golf it"}
						description={"En este capitulo fargan descubre todos los hackeos"}
                        videoLink={"https://www.youtube.com/watch?v=5MUKqtdiAj4"}
					/>
                    <Grid.Video
						title={"Vegetta y fargan en Golf it"}
						description={"En este capitulo fargan descubre todos los hackeos"}
                        videoLink={"https://www.youtube.com/watch?v=5MUKqtdiAj4"}
					/>
				</Grid>
			</Layout.Body>
		</Layout>
	);
}
