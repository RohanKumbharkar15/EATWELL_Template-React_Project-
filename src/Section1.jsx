import React from "react";
import './section1.css'
function Section1(props){
    let section1=props.data;

    return(
        <>
            {
                section1.map((x)=>{
                    return(
                       <div className="container mt-5 mb-5 pt-5 pb-5">
                            <div className="row  ">
                                <div className="col-12 col-md-6 bg-light pt-5 pb-5 p-5">
                                    <div className="s1-div">
                                        <h2 className="">{x.h2}</h2>
                                        <h1 className="text-danger fw-bold fst-italic ">{x.h1}</h1>
                                        <p>{x.p1}</p>
                                        <p>{x.p2}</p>
                                        <p className="pt-2 pb-2 ps-4 pe-4 btn btn-outline-danger ">{x.btn}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-0">
                                    <div className="s1-img">
                                        <img src={x.img} className="h-100 w-100 img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                       </div> 
                    ) 
                })
            }
        </>
    )
}
export default Section1;