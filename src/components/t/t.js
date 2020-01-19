import React, { useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import queryString from 'query-string'
import './t.css'
import P from '../p/p';



  export default class fetchrandomuser extends React.Component{
    

    state={
        loading:true,
        d: [],  
       a:[],
       filter: '',
  
    };
    
    constructor(props) {
        super(props);
       
       
    }


   async componentDidMount(){
   
        const url="http://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products";
        const response = await fetch(url);
        const data =await response.json();
       
        this.setState({d:data.data,loading:false})
       
        console.log(data);
        const value=queryString.parse(this.props.location.search);
const id=value.id;
console.log(id)
this.setState({ filter: id });
       
    }
    showDetails(num) {
      window.open('/cart?id=' + num,'_blank');

   }

   

 
render(){  
   


    return (
        <div className="productContainer1">
             <div class="topnav">
        <a class="active" href="/"><font color="black">Home</font></a>
        <a href="#about"><font color="black">About</font></a>
        <a href="/tshirt"><font color="black">Contact</font></a>
        
        <div class="search-container">
        
           
        </div>
        </div>
        <section class="banner_part" >
           <center><h1 class="tt"><b>Product Page Of Smart Learner kool App</b></h1></center>
            <div class="name">  
        <tbody class >  
      
        <div>

<a href="/p" target="" class="button instagram" ><span class="gradient"></span><r class="t">Back</r></a>

</div>

        <div class="text-center">

	

        {this.state.d.map(d => (

this.state.filter == ''|| d.ITEM_NUMBER.includes(this.state.filter)?


<div>

<div class="wrapper1">
    <div class="product-img">
      <img src={"http://django-ex-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/get-image-for-item-id/" + d.ITEM_NUMBER} height="470" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{d.DESCRIPTION}<img src="img/new.png" class="new" alt="" /></h1>
        
<h2>Size: {d.SKU_ATTRIBUTE_VALUE1}</h2>
        <p> {d.LONG_DESCRIPTION} </p>
      </div>
      <div class="product-price-btn">
        <p>Price:<k class="size21">{d.LIST_PRICE}$</k></p><br/><br/>
   
       <div> {d.IN_STOCK === 'Yes' ?  <button type="button" class="trigger-btn" data-toggle="modal" href="#myModal">buy now</button>:
            <button type="button" class="trigger-btn" data-toggle="modal" >Out of stock</button>}</div>
 <div >{d.IN_STOCK === 'Yes' ?  <button type="button" class="trigger-btn" data-toggle="modal" onClick={evt => this.showDetails(d.ITEM_NUMBER)} >Add to cart</button>:
           <div></div>}</div>
        
      </div>
   
    </div>
  </div>


</div> : <div></div>





))}
  

</div>


<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
				<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 >Awesome!</h4>	
			</div>
			<div class="modal-body">
				<p class="text-center">Your booking has been confirmed. Check your email for details.</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
			</div>
		</div>
	</div>
</div> 



</tbody>
</div>
</section>

<center><small>Designed by <a href="#" target="_blank"><font color="teal">Smart Learner  </font></a></small></center>

</div>

    ) ;
  
   
}



}
