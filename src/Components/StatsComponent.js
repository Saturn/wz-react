import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Platform } from "../Platforms";
import { useParams, Link } from "react-router-dom";
import X from "../X";
import MatchComponent from "./MatchComponent";

const useStyles = makeStyles({
  matchList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const { platform, username } = useParams();
  const nicePlatformName = Object.keys(Platform).find(
    (key) => Platform[key] === platform
  );
  const playerSummaryText = (
    <span>
      for <strong>{username}</strong> on <strong>{nicePlatformName}</strong>
    </span>
  );
  useEffect(() => {
    fetch(`/wz/${username}/${platform}`, {
      method: "GET",
    })
      .then((response) => {
        response.json().then((v) => {
          setData(v);
          console.log(v);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // setTimeout(() => {
    //   setData(X);
    // }, 500);
  }, []);
  return (
    <>
      <Link to="/">{" <"}Back</Link>
      {data === null ? (
        <p>Loading stats {playerSummaryText}</p>
      ) : (
        <div>
          <div>
            <p>Warzone Stats {playerSummaryText}</p>
            {data.matches.map((match, i) => {
              return (
                <div className={classes.matchList}>
                  <MatchComponent
                    place={match.playerStats.teamPlacement}
                    kills={match.playerStats.kills}
                    damage={match.playerStats.damageDone}
                    damageTaken={match.playerStats.damageTaken}
                    timeStarted={match.utcStartSeconds}
                    wzMode={match.mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
