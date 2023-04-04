import React, { useState } from "react";

function ExpandableContent({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h3 onClick={() => setExpanded(!expanded)}>{title}</h3>
      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandableContent;
