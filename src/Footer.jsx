import React from "react";
import './footer.css'

function Footer(props)
{
    let footer=props.data;
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row  mb-5 pt-5 pb-5">
                        <div className="col-12 col-md-6 col-lg-4 pb-5">
                            {
                                footer.map((x)=>{
                                    return(
                                        <div>
                                            <h2>{x.a}</h2>
                                            <p className="text-secondary fs-5">{x.p}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 ps-5 pb-5 d-lg-flex justify-content-center">
                        {
                                footer.map((x)=>{
                                    return(
                                        <ul className="p-0">
                                            <li className=" fs-3 p-0"><a href="#" className="text-light">{x.b}</a></li>
                                            <li className="pt-3 "><a href="#">{x.li1}</a></li>
                                            <li className="pt-3"><a href="#">{x.li2}</a></li>
                                            <li className="pt-3"><a href="#">{x.li3}</a></li>
                                            <li className="pt-3"><a href="#">{x.li4}</a></li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 ps-5 pb-5 d-lg-flex justify-content-center">
                            {
                                footer.map((x)=>{
                                    return(
                                        <ul className="p-0">
                                            <li className="pt-0 fs-3"><a href="#" className="text-light">{x.c}</a></li>
                                            <li className="pt-3"><a href="#">{x.li5}</a></li>
                                            <li className="pt-3"><a href="#">{x.li6}</a></li>
                                            <li className="pt-3"><a href="#">{x.li7}</a></li>
                                            <li className="pt-3"><a href="#">{x.li8}</a></li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="col-12 col-md-4">
                            {
                                footer.map((x)=>{
                                    return(
                                        <div>
                                        <div className="d-flex justify-content-center gap-5 fs-2 pb-5">
                                            <a href="#" className=" pt-2 pb-2 ps-3 pe-3 rounded-circle bg-secondary"><i className={x.insta}></i></a>
                                            <a href="#" className=" pt-2 pb-2 ps-3 pe-3 rounded-circle bg-secondary"><i className={x.twit}></i></a>
                                            <a href="#" className=" pt-2 pb-2 ps-3 pe-3 rounded-circle bg-secondary"><i className={x.face}></i></a>
                                            
                                        </div>
                                        <div className="text-center pb-5">{x.love}</div>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    )
}
export default Footer