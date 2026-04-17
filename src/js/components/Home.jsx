import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
        <div>
            <Navbar></Navbar>
            <div class="container">
                <Jumbotron></Jumbotron>
                <div class="row">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>   
                </div>                
            </div>
            <Footer></Footer>
        </div>
	);
};

export default Home;