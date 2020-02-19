import React, { useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import queryString from 'query-string'
import './t.css'
import P from '../p/p';

  export default class fetchrandomuser extends React.Component{
    

    state={
        loading:true,
        d: [], 
        dnew: [], 
       a:[],
       filter: '',
  
    };
    
    constructor(props) {
        super(props);   
    }

   async componentDidMount(){


    const url="https://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products";
    const response = await fetch(url);
    const data =await response.json();
       
    this.setState({d:data.data,loading:false})
       
    console.log(data);
    const value=queryString.parse(this.props.location.search);
    const id=value.id;
    console.log(id)
    this.setState({ filter: id}); 

    const urlnew="https://smartbuymsnew-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products/" + id;
    const responsenew = await fetch(urlnew);
    const datanew =await responsenew.json();

    this.setState({dnew:datanew.data,loading:false})
    console.log(datanew);
      
       
    }
    showDetails(num) {
      window.open('/cart?id=' + num,'_blank');

   }

   showDetailsnew(num) {
    window.open('/t?id=' + num,'_blank');

 }
 showDetailss() {
  window.open('/p','_self');

}
 
render(){  
   


    return (
        <div className="productContainer1">
             <div class="topnav">
             <a  href="/"><font color="black">Home</font></a>
                    <a class="active" href="/p"><font color="black">Product</font></a>
                    <a href="/contact"><font color="black">Contact</font></a>
                    <a  href="/team"><font color="black">Team Members</font></a>
        <div class="search-container">
        
           
        </div>
        </div>
        <section class="banner_part" >
 
           <center><h1 class="tt"><b>Product Details</b></h1></center>
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
				<button class="btn btn-success btn-block" data-dismiss="modal" onClick={evt => this.showDetailss()}>OK</button>
			</div>
		</div>
	</div>
</div> 
</tbody>
</div>

  <center><h1 class="tt"><b>Similar Products</b></h1></center>
                   
                   <div class="name">
        
                   <div class="grid-container" >
                
                           {this.state.dnew.map(dnew => (

                              /* this.state.filter == '' || dnew.DESCRIPTION.toLowerCase().includes(this.state.filter.toLowerCase()) || dnew.SKU_ATTRIBUTE_VALUE1.toLowerCase().includes(this.state.filter.toLowerCase()) || dnew.BRAND.toLowerCase().includes(this.state.filter.toLowerCase()) ?
                            */

                                   <div class="grid-item">

                                       <div class="flip-card1">
                                           <div class="flip-card-inner1">
                                               <div class="flip-card-front1">

                                                   <div> <b class="size"> {dnew.DESCRIPTION}</b></div>
                                                   <img class="p13"  onClick={evt => this.showDetails(dnew.ITEM_NUMBER)}src={"http://django-ex-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/get-image-for-item-id/" + dnew.ITEM_NUMBER} />

                                                    <br /><b class="size1">Size:</b> {d.SKU_ATTRIBUTE_VALUE1}<br /><b class="size1">Colour:</b> {d.SKU_ATTRIBUTE_VALUE2} <br /><b class="size1">Price:</b><b class="size2"> {d.LIST_PRICE}$</b><br /><center><font color="white"><b>{d.DISCOUNT=='0.0'  || d.DISCOUNT==null?<div></div>:<div class="mf">{(d.DISCOUNT)*100} % off</div>} </b></font></center>

                                                   <img src="img/new.png" class="new" alt="" />
                                               </div>

                                               <div class="flip-card-back1">

                                                   <b class="size1">Description:</b>  {dnew.LONG_DESCRIPTION}<br /><b class="size1">In Stock : </b>{dnew.IN_STOCK} <br /><b class="size1">Brand:</b> {dnew.BRAND}
                                                   <img src="img/new.png" class="new" alt="" />

                                               </div>
                                           </div>

                                       </div>






                                    {dnew.IN_STOCK === 'Yes' ?<button onClick={evt => this.showDetailsnew(dnew.ITEM_NUMBER)} class="button instagram" ><span class="gradient"></span><r class="t">Buy</r></button> :
                                           <a class="button instagram" ><span class="gradient"></span><b><font color="red">Out of stock</font></b></a>

                                       }


                                   </div> /*: <div></div> */

                                  
                           ))}


</div>

                   </div>

               </section>

               <center><small>Designed by <a href="#" target="_blank"><font color="teal">Smart Learner  </font></a></small></center>

           </div>
  


    ) ;
  
   
}



}
