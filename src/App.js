import React,{Component} from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends Component {
    constructor(){
      super();
      this.state={
          products:[
              {
                  id:1,
                  title:'Xiomi',
                  price:15999,
                  qty : 1,
                  img : '',
              },
              {
                  id:2,
                  title:'Oppo A54',
                  price:16999,
                  qty : 1,
                  img : '',
              },
              {
                  id:3,
                  title:'Redmi 9 pro',
                  price:9999,
                  qty : 1,
                  img : '',
              },
              {
                  id:4,
                  title:'iPhone 16s',
                  price:155999,
                  qty : 1,
                  img : '',
              },
          ]
      }
  }
  

  handleIncreaseQuantity = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
          products:products
      })
  }
  handleDecreaseQuantity = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
          return;
      }
      products[index].qty -= 1;
      this.setState({
          products:products
      })
  }

  handleDeleteproduct = (id)=>{
      const {products} = this.state;
      const items = products.filter(item => item.id !== id)
      this.setState({
          products:items
      })
  }
  getCartCount = ()=>{
    let count=0;
    const {products} = this.state;
    products.forEach((product)=>{
      count += product.qty
    })

    return count;
  }

  getTotalPrice = ()=>{
    const {products} = this.state;
    let totalPrice = 0;
    products.forEach((product)=>{
      totalPrice = totalPrice + product.qty * product.price
    })
    return totalPrice;
  }
  
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteproduct}
        />
        <div style={{ padding:10,fontSize:25 }}>Total : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
