import React from "react";
import './Section2.css'
function Section2(props){
    let section2=props.data;

    return (
        <>
            <section className="pt-5 pb-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {
                                section2.map((x)=>{
                                    return(
                                        <div className="sec2-div pt-5 pb-5 text-center ">
                                            <h2 className="text-uppercase   ">{x.h2}</h2>
                                            <h1 className="fst-italic">{x.h1}</h1>
                                            <p>{x.p}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center   ">
                        <div className="col-12 col-md-6 col-lg-3  border border-2 rounded mb-5">
                            
                                {
                                    section2.map((x)=>{
                                        return(
                                            <div className="mt-3 mb-3 ms-1 me-1">
                                                <div>
                                                    <img src={x.img1} className="img-fluid"></img>
                                                </div>
                                                <p className="text-center fs-3 pt-4 text-warning fw-bold fst-italic">{x.rs1}</p>
                                                <h2 className="text-center fw-bold">{x.t1}</h2>
                                                <p className="text-center text-secondary pt-3">{x.p1}</p>
                                                <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-success ">{x.btn1}</div>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                            
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 border border-2 rounded mb-5">
                            {
                                        section2.map((x)=>{
                                            return(
                                                <div className="mt-3 mb-3 ms-1 me-1">
                                                    <div>
                                                        <img src={x.img2} className="img-fluid"></img>
                                                    </div>
                                                    <p className="text-center fs-3 pt-4 text-warning fw-bold fst-italic">{x.rs2}</p>
                                                    <h2 className="text-center fw-bold">{x.t2}</h2>
                                                    <p className="text-center text-secondary pt-3">{x.p1}</p>
                                                    <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-success ">{x.btn1}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 border border-2 rounded mb-5">
                            {
                                        section2.map((x)=>{
                                            return(
                                                <div className="mt-3 mb-3 ms-1 me-1">
                                                    <div>
                                                        <img src={x.img3} className="img-fluid"></img>
                                                    </div>
                                                    <p className="text-center fs-3 pt-4 text-warning fw-bold fst-italic">{x.rs3}</p>
                                                    <h2 className="text-center fw-bold">{x.t3}</h2>
                                                    <p className="text-center text-secondary pt-3">{x.p1}</p>
                                                    <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-success ">{x.btn1}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2