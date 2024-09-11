import React from "react";
import './hero.css'

function Hero(props){
    let hero=props.data;

    return (
        <>
            <section id="hero" className="p-0 container-fluid hero d-flex justify-content-center align-items-center">
                <div className="row m-0 p-0">
                    <div className="col-12">
                        <div>
                            {
                                hero.map((x)=>{
                                    
                                    return(
                                        <div>
                                            <h1 className="hero-h1">{x.h1}</h1>
                                            {/* <p>{x.p}</p> */}
                                            <p className="text-center hero-p mt-4">{x.p}</p>
                                            <div className="d-flex justify-content-center align-items-center mt-5">
                                                <div className="btn btn-outline-light  pt-2 pb-2 ps-5 pe-5">
                                                {x.btn}</div>
                                                {/* <button className="btn btn-outline-primary">{x.btn}</button> */}
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

export default Hero