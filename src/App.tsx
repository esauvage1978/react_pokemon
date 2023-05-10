import React, { FunctionComponent} from 'react';
import 'materialize-css';
import PokemonList from './pages/PokemonList';

const App: FunctionComponent = () => {
    return (
        <>
        <PokemonList />
        </>
    );
}

export default App;