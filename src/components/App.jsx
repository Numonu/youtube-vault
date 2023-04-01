import { Cascade } from "./Cascade";
import { Grid } from "./Grid";
import { Layout } from "./Layout";

const exampleData = [
	{
		collection: "Mi coleccion de videos",
		videos: [
			{
				title: "Noticias del mundo",
				description: "Una descripcion acertada",
				link: "https://google.com",
			},
			{
				title: "Info sobre economia",
				description: "Aqui se excplican temas economicos",
				link: "https://google.com",
			},
		],
	},
];

export function App() {
	return (
		<Layout>
			<Layout.Nav>Soy el navegador</Layout.Nav>
			<Layout.Aside>
                <Cascade>
                    <Cascade.Collection title={"Super Collecion"}/>
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
