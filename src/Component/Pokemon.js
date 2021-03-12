import React from "react";
import axios from "axios";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = React.useState(null);

    let id = props.match.params.id;
    React.useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.data)
            .then(data => {
                console.log(data)
                setPokemon(data)
            }).catch(err => {
                console.log(err)
                setPokemon(null)
            })
    }, [id]);

    return (

        <>
            {pokemon && JSON.stringify(pokemon)}
        </>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);
    return { prod: state.prods.curProduct, products: state.prods.products };
};
// const mapDispatchToProps = (state) => {};

export default Pokemon
