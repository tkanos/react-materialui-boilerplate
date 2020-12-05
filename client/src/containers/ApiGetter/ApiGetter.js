import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { fetchApi, getResponseValue } from "./apiReducer";
import { useSelector, useDispatch } from "react-redux";

export default function ApiGetter() {

  const value = useSelector(getResponseValue);

  const dispatch = useDispatch();

  const styles = {
    root: {
        justifyContent: 'center'
    }
};

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">
            Get From Api Example
          </Typography>
        </CardContent>
        <CardActions classes={styles.root} style={{justifyContent: 'center'}}>
          <Button color="primary" variant="contained" onClick={() => dispatch(fetchApi())}>
            Fetch Api
          </Button>
        </CardActions>
        <CardContent>
        <Typography
            align="center"
            variant="subtitle1"
          >
            Api Result: {value}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};