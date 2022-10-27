import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore("user" ,{
  id: 'counter',
  state: () => ({
    counter: 1 ,
    dialog: false,
    products: [],
    productsfirst: [],
    slugproduct: '',
    
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
    getproducts(state){
      return state.products
    },
    getproductsfirst(state){
      return state.productsfirst.reverse()
    }
  },

  actions: {
    // increment() {
    //   this.counter++
    // }
    async fetchProducts() {
      try {
        const data = await axios.get('https://store-project.iran.liara.run/api/product/').then((res)=>{
              // console.log("res " , res.data )
              this.products = res.data
             
        }).catch((error)=>{
              return error
              
        })
          // this.users = data.data
        }
        catch (error) {
          return error
                console.log(error);
      }
      
      try {
        const data = await axios.get('https://store-project.iran.liara.run/api/product/').then((resthis)=>{
              // console.log("res " , res.data )
              
              this.productsfirst = resthis.data
        }).catch((error)=>{
              return error
              
        })
          // this.users = data.data
        }
        catch (error) {
          return error
                console.log(error);
      }
      
    }
  }


  







})
