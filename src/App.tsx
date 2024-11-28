import "@mantine/core/styles.css";
import { createTheme, Grid, MantineProvider } from "@mantine/core";
import TypedTitle from "./sections/TypedTitle";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <Grid columns={100}>
        <Grid.Col span={15}></Grid.Col>
        <Grid.Col span="auto">
          <TypedTitle/>
        </Grid.Col>
        <Grid.Col span={15}></Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default App;
