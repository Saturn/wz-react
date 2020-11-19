import React, { useState } from "react";
import { Platform } from "../Platforms";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const QueryComponent = () => {
  const [userName, setUserName] = useState("");
  const [platform, setPlatform] = useState(Platform.PSN);
  let history = useHistory();
  console.log(platform);
  console.log(userName);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div>
          <label>Platform</label>
          <select onChange={(e) => setPlatform(Platform[e.target.value])}>
            {Object.keys(Platform).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => history.push("/stats/" + platform + "/" + userName)}
          >
            Fetch
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(QueryComponent);
