import React from "react";
import './Section4.css'
function Section4(props)
{
    let section4=props.data;

    return(
        <>
            <section className="pt-5 pb-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {
                                section4.map((x)=>{
                                    return(
                                        <div className="sec2-div pt-5 pb-5 text-center ">
                                            
                                            <h1 className="fst-italic">{x.h1}</h1>
                                            <p>{x.p}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row d-flex  justify-content-evenly ">
                        <div className="col-12 col-md-6 col-lg-3 shadow mb-5">
                            
                                {
                                    section4.map((x)=>{
                                        return(
                                            <div className="mt-3 mb-3 ms-1 me-1">
                                                <div>
                                                    <img src={x.img1} className="img-fluid"></img>
                                                </div>
                                                
                                                <h3 className="text-center pt-4">{x.t1}</h3>
                                                <p className="text-center text-secondary pt-3">{x.p1}</p>
                                                <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-warning ">{x.btn1}</div>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                            
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 shadow mb-5">
                            {
                                        section4.map((x)=>{
                                            return(
                                                <div className="mt-3 mb-3 ms-1 me-1">
                                                    <div>
                                                        <img src={x.img2} className="img-fluid"></img>
                                                    </div>
                                                    
                                                    <h3 className="text-center pt-4">{x.t2}</h3>
                                                    <p className="text-center text-secondary pt-5">{x.p1}</p>
                                                    <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-warning ">{x.btn1}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 shadow mb-5">
                            {
                                        section4.map((x)=>{
                                            return(
                                                <div className="mt-3 mb-3 ms-1 me-1">
                                                    <div>
                                                        <img src={x.img3} className="img-fluid"></img>
                                                    </div>
                                                    
                                                    <h3 className="text-center pt-4 ">{x.t3}</h3>
                                                    <p className="text-center text-secondary pt-5">{x.p1}</p>
                                                    <div className="d-flex justify-content-center pt-3 pb-3">
                                                    <div className="btn btn-outline-warning ">{x.btn1}</div>
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

export default Section4