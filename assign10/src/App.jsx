import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Container maxWidth="1000">
        <Nav></Nav>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Sidebar />
            </Grid>
            <Grid item md={6}>
              <Content />
            </Grid>
            <Grid item md={3}>
              <Rightbar />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
