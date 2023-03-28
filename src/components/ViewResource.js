import React from "react";

function ViewResource({ name, l }) {
  return (
    <div>
      <h1 style="center">Resources</h1>
      <fieldset>{{ name }} shared a file on </fieldset>
    </div>
  );
}

export default ViewResource;
