import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';


export  default class FetchRandomUser extends React.Component{


    state={

        loading:true,
        person:null,
    };
   async componentDidMount(){
        const url= "http://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products";
        const response =await fetch (url);
        const data= await response.json();
        this.setState({person:data.items,loading:false})
        console.log(data.items[0]); 
        fetch(url)
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    }

    render(){

        return( <div>
{this.state.loading||!this.state.person?(<div>Loading.</div>):(<div> 

    <div>hsdkjask{this.state.person.discount}</div>


</div>)}

        </div>);

    }
}



















/* 
 export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []





    };
  }

  componentDidMount() {
    fetch("http://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.discount}>
              {item.DESCRIPTION}
            </li>
          ))}
        </ul>
      );
    }
  }
}

*/