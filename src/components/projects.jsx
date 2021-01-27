import React, {useState} from "react";
import Modal from "react-modal";
import Project from "./project";

function Projects() {
    const [modalOneOpen, setModalOne] = useState(false);
    const [modalTwoOpen, setModalTwo] = useState(false);
    const [modalThreeOpen, setModalThree] = useState(false);
    const [modalFourOpen, setModalFour] = useState(false);


    function modalOneFunction() {
        setModalOne(!modalOneOpen);
    }
    function modalTwoFunction() {
        setModalTwo(!modalTwoOpen);
    }
    function modalThreeFunction() {
        setModalThree(!modalThreeOpen);
    }
    function modalFourFunction() {
        setModalFour(!modalFourOpen);
    }
    return (
        <section className="food-menu">
        <div className="HomePageIntroduction d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1 className="second" id="firstName">Projects</h1>
        </div>
        <h2>Projects Undertaken</h2>
        <div id="scroll" className="menu menu-wrapper">
        <div className="grid">
        <div className="row mx-auto">
        <div className="menu-item pasta col-lg-3" onClick={modalOneFunction}>
        <div className="second-frame">
          <p>Know More</p>
        </div>
        <p>Coin counting & Sorting Device</p>
        </div>
        <Modal isOpen={modalOneOpen}>
            <Project title="Coin counting & Sorting Device" p1="The purpose of the coin counting and sorting machine is to help people record down the
quantity and total value of coin and sort the coins to their corresponding slots automatically." p2="The concept of the coin counter is mostly based on the detection of the dimension, weight,
edge of credit pulses by using sensor." p3="Sorting functionality is achieved by using sensor feedback, which then actuates the solenoids
to sort coins automatically." p4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacus massa. Nullam ullamcorper, felis."/>
        <button className="projectXbutton btn btn-outline-primary" onClick={modalOneFunction}><strong>Close</strong></button>
        </Modal>
        <div className="menu-item pasta col-lg-3" onClick={modalTwoFunction}>
        <div className="second-frame">
          <p>Know More</p>
        </div>
        <p>Search & Rescue Hexapod</p>
        </div>
        <Modal isOpen={modalTwoOpen}>
        <Project title="Search & Rescue Hexapod" p1="The main objective of this project is to develop autonomous hexapod robot." p2="The project aims to build six legged walking robot capable of basic mobility tasks
such as walking forward,backward and raising or lowering of the body height." p3="Three sound sensors will to used to detect the sound from any directions and
move the bot in that direction." p4="A raspberry pi camera is used to monitor the hexapod and can be used in the places which cannot be seen through naked eyes." tag="X"/>
        <button className="projectXbutton btn btn-outline-primary" onClick={modalTwoFunction}><strong>Close</strong></button>
        </Modal>
        <div className="menu-item pasta col-lg-3" onClick={modalThreeFunction}>
        <div className="second-frame">
          <p>Know More</p>
        </div>
        <p>Enery Efficient Protocols for WSNs'</p>
        </div>
        <Modal isOpen={modalThreeOpen}>
        <Project title="Enery Efficient Protocols for WSNs" p1="The objective of this project is to develop a framework that overcomesthe
challenges of energy efficiency in wireless sensor networks by applying some
methodology that provides efficient utilization of energy in wireless sensor
networks." p2="K-means Clustering is employed and improvised, which increases the network
life-time." p3="Multi-hop routing protocol is employed for efficient communication between
sensor nodes." p4="Cluster head doubles are employed, which serves as backup cluster head and helps
increase network life." tag="X"/>
            <button className="projectXbutton btn btn-outline-primary" onClick={modalThreeFunction}><strong>Close</strong></button>
        </Modal>
        </div>
        <div className="row mx-auto">
        <div className="menu-item pasta col-lg-3" onClick={modalFourFunction}>
        <div className="second-frame">
        <p>Know More</p>
        </div>
        <p>Home Automation Using Gesture Recognition</p>
        </div>
        <Modal isOpen={modalFourOpen}>
        <Project title="Home Automation Using Gesture Recognition" p1="The main objective of this project is to design a device which can easily communicate and
work with existing automation solutions." p2="The project is based on machine learning and image processing techniques are used." p3="Gestures of users are recorded and stored in a database which are later utilized when a user inputs gesture from a camera module." p4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacus massa. Nullam ullamcorper, felis" tag="X"/>
        <button className="projectXbutton btn btn-outline-primary" onClick={modalFourFunction}><strong>Close</strong></button>
        </Modal>
        </div>
        </div>
        </div>
        </section>
    );    
}
export default Projects;