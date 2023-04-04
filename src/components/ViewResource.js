import obj1 from "./Object";
import ExpandableContent from "./ExpandableContent";
function ViewResource() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Resources</h1>
      {Object.keys(obj1).map((p) => (
        <ul className="list-group  bg-secondary p-2" style={{ width: "100%" }}>
          {console.log(p)}
          <li className="list-group-item" style={{ marginBottom: "5px" }}>
            <ExpandableContent title={p}>
              {Object.keys(obj1[p]).map((n) => (
                <ul>
                  <li>
                    <ExpandableContent
                      title={n + " shared the following resources"}
                    >
                      <ul>
                        {console.log(n, obj1[p][n])}
                        {obj1[p][n].map((k) => (
                          <li>
                            <a href={k} target="_blank">
                              {k}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </ExpandableContent>
                  </li>
                </ul>
              ))}
            </ExpandableContent>
          </li>
        </ul>
      ))}
    </>
  );
}

export default ViewResource;
