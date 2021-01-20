import React from "react";

function Projects() {
    return (
        <div className="row">
        <div className="card  mx-auto col-lg-3 columnMargin">
                    {/* <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V64JPKJBHqzwIcQtNUPTjeOZ-g2dHYF0jg&usqp=CAU" alt="card-ig" /> */}
                    <div className="card-body">
                        <h4 className="card-title">Coin Counting & Sorting Machine</h4>
                        <p className="card-text">The purpose of the coin counting and sorting machine is to help people record down the
quantity and total value of coin and sort the coins to their corresponding slots automatically.</p>
                    </div>
                </div>
        <div className="card  mx-auto col-lg-3 columnMargin">
                    
                    <div className="card-body">
                        <h4 className="card-title">Gesture Recognition</h4>
                        <p className="card-text">The main objective of this project is to design a device which can easily communicate and
work with existing automation solutions.</p>
                    </div>
        </div>

        <div className="card  mx-auto col-lg-3 columnMargin">
                    {/* <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V64JPKJBHqzwIcQtNUPTjeOZ-g2dHYF0jg&usqp=CAU" alt="card-ig" /> */}
                    <div className="card-body">
                        <h4 className="card-title">Tactical Hexapod</h4>
                        <p className="card-text">The project aims to build six legged walking robot capable of basic mobility tasks
such as walking forward,backward and raising or lowering of the body height.</p>
                    </div>
                </div>
        </div>
    );    
}


export default Projects;