import {Component} from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { getFirestore, collection, deleteDoc,onSnapshot,updateDoc ,doc} from "firebase/firestore";


class App extends Component {
    constructor(){
      super();
      this.state={
          products:[]
      }
      this.db = getFirestore();
  }
  componentDidMount(){
    let collectionRef = collection(this.db,"products");

    onSnapshot(collectionRef,(snapshot)=>{
      const products = snapshot.docs.map((doc)=>{
        let data = doc.data();
        data['id']=doc.id;
        return data;
      })
      this.setState({
        products : products
      })
    })

  }

  handleIncreaseQuantity = async(product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = doc(this.db,"products",products[index].id);
    updateDoc(docRef, {
      qty:products[index].qty+1
    }).then(()=>{
      products[index].qty +=1 
      this.setState({
        products : products
      })
    }).catch((error)=>{console.log(error);})
  }

  handleDecreaseQuantity = async(product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = doc(this.db,"products",products[index].id);
    updateDoc(docRef, {
      qty:products[index].qty-1
    }).then(()=>{
      products[index].qty -=1 
      this.setState({
        products : products
      })
    }).catch((error)=>{console.log(error.message);})
  }

  handleDeleteProduct = (id)=>{
    const {products} = this.state;

    const docRef = doc(this.db,"products",id);
    deleteDoc(docRef).then(()=>{
      const items = products.filter((product)=>product.id !== id)
      this.setState({
        products:items
      })
    }) 
  }

  getCartCount = ()=>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count = count+product.qty
    })
    return count;
  }

  getTotalPrice = ()=>{
    const {products} = this.state;
    let price=0;
    products.forEach((product)=>{
      price = price+product.price * product.qty
    })
    return price;
  }

  
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity}
          handleDecreaseQuantity = {this.handleDecreaseQuantity}
          handleDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{ padding:10,fontSize:25 }}>Total : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
