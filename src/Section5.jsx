import React from "react";
import './Section5.css'
function Section5(props)
{
    let section5=props.data;

    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-7">
                            {
                                section5.map((x)=>{
                                    return(
                                        <div className="text-center  pb-5">
                                            <h1 className="fst-italic fs-1 fw-bold ">{x.h1}</h1>
                                            <p className="text-secondary fs-4">{x.p}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="row mb-5 pb-5">
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                            {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img1} className="w-100"></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                        {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img2} className="w-100"></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                        {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img3} className="w-100"></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                        {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img2} className="w-100"></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                        {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img3} className="w-100"></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 shadow pt-3">
                        {
                                section5.map((x)=>{
                                    return(
                                        <div className="">
                                            <img src={x.img1} className="w-100"></img>
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

export default Section5