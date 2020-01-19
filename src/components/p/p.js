import React, { component } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './p.css';
import Pagination from '../pagination/pagination';
import { browserHistory } from "react-router";


import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";




class p extends React.Component {

    state = {
        loading: true,
        d: [],
        a: [],

        filter: '',

    };

    constructor(props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    async componentDidMount() {

        const url = "http://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ d: data.data, loading: false })

        console.log(data);


    }
    updateInputValue(evt) {
        this.setState({ filter: evt.target.value });
    }

    showDetails(num) {
       window.open('/t?id=' + num,'_blank');

    }



    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }




        return (
            <div className="productContainer1">
                <div class="topnav">
                    <a class="active" href="/"><font color="black">Home</font></a>
                    <a href="#about"><font color="black">About</font></a>
                    <a href="/tshirt"><font color="black">Contact</font></a>

                    <div class="search-container">

                        <input type="text" size="70" placeholder="Search your Item here" onChange={evt => this.updateInputValue(evt)} />
                        <img onclick="startdictation()" src="mic.png" />

                    </div>
                </div>
                <section class="banner_part" >
                    <center><h1 class="tt"><b>Product Page Of Smart Learner kool App</b></h1></center>
                    <center><p>You are searching for <b></b></p></center>



                    <div class="name">



                        
                    <div class="grid-container" >
                 
                            {this.state.d.map(d => (
 
                                this.state.filter == '' || d.DESCRIPTION.toLowerCase().includes(this.state.filter.toLowerCase()) || d.SKU_ATTRIBUTE_VALUE1.toLowerCase().includes(this.state.filter.toLowerCase()) || d.BRAND.toLowerCase().includes(this.state.filter.toLowerCase()) ?

                                    <div class="grid-item">

                                        <div class="flip-card1">
                                            <div class="flip-card-inner1">
                                                <div class="flip-card-front1">

                                                    <div> <b class="size"> {d.DESCRIPTION}</b></div>
                                                    <img class="p13"  onClick={evt => this.showDetails(d.ITEM_NUMBER)}src={"http://django-ex-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/get-image-for-item-id/" + d.ITEM_NUMBER} />

                                                    <br /><b class="size1">Size:</b> {d.SKU_ATTRIBUTE_VALUE1}<br /><b class="size1">Colour:</b> {d.SKU_ATTRIBUTE_VALUE2} <br /><b class="size1">Price:</b><b class="size2"> {d.LIST_PRICE}$</b><br /><font color="red"><b>------{d.DISCOUNT} % off------</b></font>

                                                    <img src="img/new.png" class="new" alt="" />
                                                </div>

                                                <div class="flip-card-back1">

                                                    <b class="size1">Description:</b>  {d.LONG_DESCRIPTION}<br /><b class="size1">In Stock : </b>{d.IN_STOCK} <br /><b class="size1">Brand:</b> {d.BRAND}
                                                    <img src="img/new.png" class="new" alt="" />

                                                </div>
                                            </div>

                                        </div>






                                     {d.IN_STOCK === 'Yes' ?<button onClick={evt => this.showDetails(d.ITEM_NUMBER)} class="button instagram" ><span class="gradient"></span><r class="t">Buy</r></button> :
                                            <a class="button instagram" ><span class="gradient"></span><b><font color="red">Out of stock</font></b></a>

                                        }


                                    </div> : <div></div>

                                   
                            ))}


</div>

                    </div>
                </section>

                <center><small>Designed by <a href="#" target="_blank"><font color="teal">Smart Learner  </font></a></small></center>

            </div>

        );


    }



}





export default p;

