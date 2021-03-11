import CanVas from "../../components/canvas/canvas";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 500,
  },
}));
function CustomizeImage({selectedImg}) {

  const classes = useStyles();
  return (
    <>
      <Header title={"Add Caption Page"} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <CanVas selectedImg={selectedImg}/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary">
                    Add Caption
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary">
                    Options
                  </Button>
                </Grid>
              </Grid>
              <Grid>
             
                  <button
                    style={{ margin:"auto",
                    width:"-webkit-fill-available",
                    marginTop: "400px",
                    backgroundColor: "#080da4",
                    color: "white",
                    fontSize: "inherit"
                  }}
                  >
                    Download
                  </button>
              
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  selectedImg: state.selectedImg,
})
export default connect(mapStateToProps)(CustomizeImage);
