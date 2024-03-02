import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

import Button from "./Button";
import EditingFormModal from "./EditingFormModal";

const POKEMON_API_URL = "http://localhost:8080/pokemons";

// TODO: SLICE THIS COMPONENT IN DIFERENTS MODULES AND ORGANIZE TO MANAGE RESPONSABILITIES CORRECTLY

export default function PokemonsTable() {
    const [showEditingFormModal, setShowEditingFormModal] = useState(false);

    const [allPokemonsData, setAllPokemonsData] = useState([]);

    const [pokemonToEditCurrentData, setPokemonToEditCurrentData] = useState({});
    const [pokemonToEditId, setPokemonToEditId] = useState("");

    /**
     * 
     * @set to allPokemonsData the data from POKEMON_API_URL api path  
     */
    const findAllPokemonDataFromApi = async () => {
        const res = await axios.get(POKEMON_API_URL);
        return _.get(res, "data", []);
    };
    useEffect(() => {
        findAllPokemonDataFromApi()
            .then((data) => setAllPokemonsData(data))
            .catch((e: Error) => console.debug(e));
    }, []);

    const openSetPokemonIdAndOpenModal = (pokemonData: Object) => {
        setPokemonToEditId(_.get(pokemonData, "_id", ""));
        !_.isEmpty(pokemonData) &&
            setPokemonToEditCurrentData(pokemonData);
        setShowEditingFormModal(true);
    }
    useEffect(() => {
        if (_.isEmpty(pokemonToEditId)) {
            return;
        }
        if (!_.isEmpty(pokemonToEditCurrentData)) {
            setPokemonToEditCurrentData(pokemonToEditCurrentData);
        }
    }, []);


    function deletePokemon(pokemonId: String) {
        console.log(pokemonId);
    }

    return (
        <>
            <table
                className="
                    table-auto 
                    bg-white 
                    w-full 
                    text-lg 
                    bg-white 
                    text-center 
                    text-gray-900
                "
            >
                <thead className="text-xlg uppercase ">
                    <tr>
                        <th scope="col" className="py-3 px-6">Type</th>
                        <th scope="col" className="py-3 px-6">Coach</th>
                        <th scope="col" className="py-3 px-6">Battles fought</th>
                        <th scope="col" className="py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !_.isEmpty(allPokemonsData) &&
                        _.map(
                            allPokemonsData,
                            (pokemon: Object) => {
                                return (
                                    <tr className="border-b" key={_.get(pokemon, "_id", "no-id")}>
                                        {/* TODO: TRANSFORM THIS ENTIRE TAG IN A DEDICATED COMPONENT */}
                                        <td className="py-4 px-6">
                                            <span className="capitalize ">
                                                {/* TODO: ADD SOME EMOJIS ACCORDING TO POKEMON*/}
                                                {_.get(pokemon, "tipo", "")}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="capitalize">
                                                {_.get(pokemon, "treinador", "")}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            {_.get(pokemon, "battles", "").length}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="pr-3">
                                                <button
                                                    className={`
                                                        h-8 
                                                        w-20 
                                                        rounded-2xl 
                                                        text-lg 
                                                        font-bold 
                                                        text-white
                                                        bg-yellow-300
                                                        active: bg-yellow-500
                                                        hover: bg-yellow-200
                                                    `}
                                                    onClick={() => openSetPokemonIdAndOpenModal(pokemon)}
                                                >
                                                    Edit
                                                </button>
                                                <button className="bg-yellow-300"></button>
                                            </span>
                                            <span className="pl-3">
                                                <Button
                                                    buttonText="Delete"
                                                    bgCollor="red-400"
                                                    onClickCallback={() => console.log("")}
                                                />
                                                <button className="bg-red-400"></button>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>

            {!_.isEmpty(pokemonToEditCurrentData) &&
                <EditingFormModal
                    showModal={showEditingFormModal}
                    setShowModal={setShowEditingFormModal}
                    pokemonToEditCurrentData={pokemonToEditCurrentData}
                />
            }
        </>
    );
}
