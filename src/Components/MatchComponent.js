import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const dateOrdinal = (dom) => {
  if (dom === 31 || dom === 21 || dom === 1) return dom + "st";
  else if (dom === 22 || dom === 2) return dom + "nd";
  else if (dom === 23 || dom === 3) return dom + "rd";
  else return dom + "th";
};

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    backgroundColor: "#b8c6db",
    backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 87%)",
    marginBottom: 10,
    padding: "25px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GreenTextTypography = withStyles({
  root: {
    color: "green",
    fontWeight: "bold",
  },
})(Typography);

const RedTextTypography = withStyles({
  root: {
    color: "red",
    fontWeight: "bold",
  },
})(Typography);

const wz_modes = {
  br_brsolo: "Solos",
  br_brduos: "Duos",
  br_brtrios: "Trios",
  br_brquads: "Quads",
};

export default (props) => {
  const classes = useStyles();
  const { place, kills, damage, damageTaken, timeStarted, wzMode } = props;
  const dateStarted = new Date(timeStarted * 1000);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center">
          <Grid item sm={4} xs={12}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {dateStarted.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {`${dateStarted.getHours()}`.padStart(2, "0")}:
              {`${dateStarted.getMinutes()}`.padStart(2, "0")}
            </Typography>
            <Typography variant="h5" component="h2">
              {dateOrdinal(place)} place
            </Typography>
            <Typography variant="body2" component="p">
              <strong>{wz_modes[wzMode]}</strong>
            </Typography>
          </Grid>
          <Grid item sm={7} xs={12}>
            <GreenTextTypography variant="body2" component="p">
              {kills} Kills
            </GreenTextTypography>
            <GreenTextTypography variant="body2" component="p">
              {damage} Damage Done
            </GreenTextTypography>
            <RedTextTypography variant="body2" component="p">
              {damageTaken} Damage Taken
            </RedTextTypography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
