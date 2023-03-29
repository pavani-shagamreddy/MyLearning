import { UserContext } from "./AddResource";
import FrontEnd from "./FrontEnd";
import AddResource from "./AddResource";
import obj1 from "./objects";
import { useRef } from "react";
function ViewResource() {
  // const ref = useRef(null);
  // const handleClick = (p) => {
  //   // if (ref.current) {
  //   //   console.log(ref);
  //   //   ref.current.innerHTML = "in resource";
  //   }
  //   // "p.map((r)=><h1>{r} {p.r}</h1>)"
  // };

  // const handleClick = (p) => {
  //   console.log(obj1.p);
  //   // Object.keys(p).map((name) => {
  //   //   return (
  //   //     <>
  //   //       <h1>{name}</h1>
  //   //       <ul>
  //   //         {name.map((resource) => {
  //   //           <li>{resource}</li>;
  //   //         })}
  //   //       </ul>
  //   //     </>
  //   //   );
  //   // });
  // };
  const hell = (p) => {
    console.log(p);
  };

  return (
    <>
      <h1>Resouces</h1>
      <ul>
        {Object.keys(obj1).map((p) => (
          <div>
            <li>{p}</li>
            {console.log(p)}
            {Object.keys(obj1[p]).map((n) => (
              <ul>
                <li>{n}</li>
                <ul>
                  {console.log(n, obj1[p][n])}
                  {obj1[p][n].map((k) => (
                    <li>{k}</li>
                  ))}
                </ul>
              </ul>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
}

export default ViewResource;
