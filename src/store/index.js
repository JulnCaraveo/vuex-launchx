import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
    cuadrado(state){
      return state.contador*state.contador
    }
  },
  mutations: {
    subircontador(state,random){
      state.contador += random;
    },
    bajarcontador(state,random){
      state.contador-=random;
    }
  },
  actions: {
    async subircontador({commit }){
      const res= await fetch("https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log(results);
      commit("subircontador",results)
    },
    async bajarcontador({commit }){
      const res= await fetch("https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new");
      const results = await res.json();
      console.log(results);
      commit("bajarcontador",results)
    }
  },
  modules: {
  }
})
