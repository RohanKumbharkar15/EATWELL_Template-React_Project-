import React from "react";
import "./Section3.css";
function Section3(props) {
  
  let section3 = props.data;

  return (
    <>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className=" col-12 col-lg-6 pb-5">
              {section3.map((x) => {
                return (
                  <div className="text-center">
                    <h1 className="s3-h1 pb-4">{x.h1}</h1>
                    <p className="s3-p">{x.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-5 ">
              {section3.map((x) => {
                return (
                  <div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img1} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t1}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs1}</h3>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img2} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t2}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs2}</h3>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img3} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t3}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs3}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-none d-lg-block col-lg-5 ">
            {section3.map((x) => {
                return (
                  <div>
                  <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img2} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t2}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs2}</h3>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img3} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t3}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs3}</h3>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="s3-div-img">
                        <img src={x.img1} className="s3-img" ></img>
                      </div>
                      <div className="w-75">
                        <h3>
                            {x.t1}
                        </h3>
                        <p className="text-secondary">
                            {x.p1}
                        </p>
                        <h3
                         className="text-warning fw-bold ">{x.rs1}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
