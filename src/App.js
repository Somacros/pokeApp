import React,{ Component } from "react";
import './style/App.css';
import 'tachyons';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

//import PokemonCardsList from "./Components/PokemonCardsList/PokemonCardsList";
import PokedexCard from "./Components/PokemonCard/PokemonCard";
import Logo from "./Components/Logo/Pokemonlogo";
import LoadingPokeball from "./Components/LoadingGif/LoadingGif";

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokedex: [],
      types:[],
      hasMore: true
    }
  }

  componentDidMount() {
    
    this.getMorePokemons(0);
    this.getPokemonTypes();
    
  }

  getPokemonTypes = () => {

    axios.get('https://somacros-pokedex-api.herokuapp.com/api/types')
    .then( types => {
      this.setState({ types: types.data })
    }).catch(err => {
      console.log(err);
    })

  }

  getMorePokemons = () => {

    setTimeout(() => {
      
      axios.get(`https://somacros-pokedex-api.herokuapp.com/api/pokemon?offset=${ this.state.pokedex.length }`)
      .then( pokemons => {
        this.setState({ pokedex: this.state.pokedex.concat(pokemons.data.spritesArray) })
        
        if (pokemons.data.next != null) {
          this.setState({ hasMore: true })
        } else {
          this.setState({ hasMore: false })
        }

        console.log(pokemons);
  
      }).catch(err => {
        console.log(err);
      })
    }, 1000);

  }

  render() {

    return(
      <div>
        <div>
          <Logo/>
        </div>
        <InfiniteScroll
          dataLength={this.state.pokedex.length}
          next={this.getMorePokemons}
          hasMore={this.state.hasMore}
          loader={<LoadingPokeball/>}
        >
            <div className="flex flex-wrap justify-center">
            {
              this.state.pokedex.map(( pokemon, index, array ) => {
                return <PokedexCard pokemonName = {pokemon.name} pokemonID = {index+1} pokemonDraw = {pokemon.draw} key = {index + 1} />
                })
            }
            </div>
        </InfiniteScroll>
    </div>
    );

  }
  
}

export default App;
