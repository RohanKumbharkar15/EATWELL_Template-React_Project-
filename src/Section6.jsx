import React from "react";
import './Section6.css'

function Section6(props){
    let section6=props.data;

    return (
        <>
            <section className="container-fluid bg-c pb-5">
                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center">
                        {
                            section6.map((x)=>{
                                return(
                                    <div className="text-center">
                                        <h1 className="fst-italic fw-bold">{x.h1}</h1>
                                        <p className="fs-5 mt-4 text-secondary">{x.p}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="row d-lg-flex  justify-content-center">
                    <div className="col-12 col-md-6  col-lg-4">
                        {
                            section6.map((x)=>{
                                return(
                                    <div>
                                        <form className="d-flex flex-column align-items-center mt-5">
                                            <input type="text" placeholder={x.i1} className="w-100 pt-2 pb-2 ps-3 rounded border-1 border-secondary mb-3 "></input>
                                            <input type="email" placeholder={x.i2} className="w-100 pt-2 pb-2 ps-3 rounded border-1 border-secondary mb-3"></input>
                                            <textarea cols={40} rows={10} className="w-100 pt-2 pb-2 ps-3 rounded border-1 border-secondary mb-3" placeholder={x.i3}></textarea>
                                            <div className="btn btn-outline-warning w-50">{x.btn}</div>
                                        </form>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center  mt-5">
                        {
                            section6.map((x)=>{
                                return(
                                    <div>
                                        <div className="s6-img">
                                            <img src={x.img} className=""></img>
                                        </div>
                                        <div>
                                            <p className="text-secondary p-0 mt-3 mb-0">{x.add}</p>
                                            <p className="">{x.add2}</p>
                                        </div>
                                        <div>
                                            <p className="text-secondary p-0 m-0">{x.phone}</p>
                                            <p>{x.phone2}</p>
                                        </div>
                                        <div>
                                            <p className="text-secondary p-0 m-0">{x.email}</p>
                                            <p className="text-warning">{x.email2}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export  default Section6;