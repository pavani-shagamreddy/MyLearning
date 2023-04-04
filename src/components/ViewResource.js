import obj1 from "./objects";
import ExpandableContent from "./ExpandableContent";
function ViewResource() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Resources</h1>
      {Object.keys(obj1).map((p) => (
        <div>
          {console.log(p)}
          <ExpandableContent title={p}>
            {Object.keys(obj1[p]).map((n) => (
              <ul>
                <li>
                  <ExpandableContent title={n}>
                    <ul>
                      {console.log(n, obj1[p][n])}
                      {obj1[p][n].map((k) => (
                        <li>{k}</li>
                      ))}
                    </ul>
                  </ExpandableContent>
                </li>
              </ul>
            ))}
          </ExpandableContent>
        </div>
      ))}
    </>
  );
}

export default ViewResource;
