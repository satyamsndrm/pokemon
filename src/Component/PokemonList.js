import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokemonList = () => {
    const [currPage, setCurrPage] = React.useState(1);
    const [totalCount, setTotalCount] = React.useState(1);
    const [limit, setLimit] = React.useState(10);
    const [pokemons, setPokeMons] = React.useState([])
    const [isNext, setIsNext] = React.useState(null)
    const [isPrev, setIsPrev] = React.useState(null)
    React.useEffect(() => {
        let offset = (currPage - 1) * limit
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then((response) => response.data)
            .then(data => {
                console.log(data)
                setPokeMons(data.results)
                setTotalCount(data.count)
                setIsNext(data.next)
                setIsPrev(data.previous)
            }).catch(err => {
                console.log(err)
            })
    }, [currPage]);
    const getId = (url) => {
        try {
            let urlArr = url.split("/")
            // console.log(urlArr)
            let id = urlArr[urlArr.length - 2]
            // console.log(id)
            return id

        } catch (e) {
            console.log("Failed")
            return "as"
        }
    }
    return (
        <>
            <div>{currPage} :- {totalCount} :-</div>
            <div>{}</div>
            {pokemons.map((val, ind) => {
                let id = getId(val.url)
                return <div key={ind}><Link to={`/pokemon/${id}`}>
                    {val.name}
                </Link></div>
            })}

            <div>Pagination</div>
            {(isPrev && <button onClick={(e) => setCurrPage((page) => page - 1)}>Prev</button>)}
            {(isNext && <button onClick={(e) => setCurrPage((page) => page + 1)}>Next</button>)}

        </>
    );
};


export default PokemonList;
