import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ApiService from "../../services/ApiService";
import config from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "inline-flex",
    alignItems: "center",
    width: 400,
    marginTop: "1%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#3d71b5",
    borderRadius: 0
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchTextField({label, setSearchedPhotos}) {

  const [searchTerm, setSearchTerm] = useState("");
  // const [searchedPhotos, setSearchedPhotos] = useState([]);
  const classes = useStyles();

  const onSearchImage = (e) => {
    e.preventDefault()
    ApiService.get(
      `?key=${config.api.apiKey}&q=${searchTerm}&image_type=photo`
    ).then(response => {
      const{ data :{hits}} = response;
      
      if(hits && hits.length) {
        setSearchedPhotos(hits);
      }
    }).catch((error) => {
      alert(error.message);
    })
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={label}
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={onSearchImage}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
