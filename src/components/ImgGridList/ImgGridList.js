import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import store from "../../redux/store";
import {setSelectedImg} from "../../redux/selectedImg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 450,
    verflowY: "hidden",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function ImageGridList({tileData, history 
  // onAddCaption,
}) {
  const classes = useStyles();

  const onAddCaption = (tile) => {
    store.dispatch(setSelectedImg(tile))
    history.push("/customize-image");
  }
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        overflowy="hidden"
        className={classes.gridList}
        cols={4}
      >
        {tileData.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img src={tile.previewURL} alt={tile.tags} />
            <GridListTileBar
              title="Add Caption"
              onClick={() => onAddCaption(tile)}
              actionIcon={
                <IconButton
                  aria-label={`info about `}
                  className={classes.icon}
                >
                  <AddIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
