import React from "react";
import './nav.css'


function Nav(props){

    let nav=props.data1;
    
    return (
        <>
            <nav className="nav">
                <div className="container pt-3 pb-3">
                    <div className="row d-flex justify-content-between">
                        <div className="col-3 text-center ">
                            {
                                nav.map((x)=>{
                                    return(
                                        <div className="fs-2 fw-bold fst-italic text-uppercase logo ">
                                            <a href="#">{x.logo}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-6  d-none d-lg-block ">
                                {
                                    nav.map((x)=>{
                                    return(
                                       <ul className="d-flex justify-content-evenly m-0  mt-2">
                                       <li className="">
                                            <a href="#">{x.li1}</a>
                                        </li>
                                        <li>
                                            <a href="#hero">{x.li2}</a>
                                        </li>
                                        <li>
                                            <a href="#">{x.li3}</a>
                                        </li>
                                        <li>
                                            <a href="#">{x.li4}</a>
                                        </li>
                                        <li>
                                            <a href="#">{x.li5}</a>
                                        </li>
                                        <li>
                                            <a href="#">{x.li6}</a>
                                        </li>
                                        <li>
                                            <a href="#">{x.li7}</a>
                                        </li>
                                       </ul>
                                    )
                                })
                                }
                        </div>
                        <div className="col-3 d-lg-none d-flex align-items-center justify-content-center">
                        <div class="d-lg-none">
            {/* <!-- offcanvas --> */}
            <button
              type="button"
              class="btn btn-outline-primary  "
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
            >
              <i class="bi bi-list fs-5"></i>
            </button>
            <div class="offcanvas offcanvas-end w-75" id="menu">
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <ul className="d-flex flex-column gap-3 ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                  <a href="#">About</a>
                    
                  </li>
                  <li>
                  <a href="#">Offer</a>

                  </li>
                  <li>
                  <a href="#">Menu</a>
                  </li>
                  <li>
                  <a href="#">News</a>
                  </li>
                  <li>
                  <a href="#">Gallery</a>
                  </li>
                  <li>
                  <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
                        </div>
                    </div>
                </div>
            </nav>
           
        </>
    )
}
export default Nav;