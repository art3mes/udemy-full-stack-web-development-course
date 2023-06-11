import React from "react";

function Entries(info) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={info.name}>
            {info.emoji}
          </span>
          <span>{info.name}</span>
        </dt>
        <dd>{info.meaning}</dd>
      </div>
    </dl>
  );
}
export default Entries;
