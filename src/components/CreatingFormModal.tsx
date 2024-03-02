import { useState } from "react";
import _ from "lodash";
import axios from "axios";

import Modal from "./Modal";

const POKEMON_API_URL = "http://localhost:8080/pokemons";

// TODO: ORGANIZE TYPE USAGE IN EVERY METHOD OF THE MODULE

const createPokemon = (pokemonType, pokemonCoach) => {
    try {
        (async () => {
            if (
                _.isEmpty(pokemonType)
            ||  _.isEmpty(pokemonCoach)
            ) {
                // TODO: USE SOME ALERT MESSAGE VALIDITY NOTIFICATION
                return;
            }

            await axios.post(
                POKEMON_API_URL,
                { 
                    tipo: pokemonType,
                    treinador: pokemonCoach
                }
            );

            window.location.reload()  // TODO: RETURN THE DATA INSTEAD OF RELOAD PAGE
        })();
    } catch (error) {
        // TODO: USE SOME ALERT MESSAGE TO HANDLE ERRORS AND WARNINGS
        console.debug(error);
    }
}

const CreatingForm = (
    pokemonType,
    setPokemonType,
    pokemonCoach,
    setPokemonCoach
) => {
    const options = [
        { value: "", text: "Select a Pokemon" },
        { value: "pikachu", text: "Pikachu ⚡" },
        { value: "mewtwo", text: "Mewtwo 🔮" },
        { value: "charizard", text: "Charizard 🔥" },
    ];

    return (
        <>
            <form className="mt-6">
                <div className="mb-2">
                    <p className="py-2 text-ciano-900">
                        Write the coach name.
                    </p>
                    <input
                        className="
                            block 
                            w-full 
                            px-4 
                            py-2 
                            mt-2 
                            text-ciano-700 
                            bg-white 
                            border-2
                            rounded-md 
                            focus:border-ciano-400 
                            focus:ring-ciano-300 
                            focus:outline-none 
                            focus:ring 
                            focus:ring-opacity-40
                        "
                        value={pokemonCoach}
                        onChange={(e) => setPokemonCoach(e.target.value)}
                    />

                    <p className="mt-5 py-2 text-ciano-900">
                        Select the Pokemon type
                    </p>
                    <select
                        className="
                            block 
                            w-full 
                            px-4 
                            py-2 
                            mt-2 
                            text-ciano-700 
                            bg-white 
                            border 
                            rounded-md 
                            focus:border-ciano-400 
                            focus:ring-ciano-300 
                            focus:outline-none 
                            focus:ring 
                            focus:ring-opacity-40
                        "
                        value={pokemonType}
                        onChange={(e) => setPokemonType(e.target.value)}
                    >
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
            </form >
        </>
    )
}

export default function CreatingFormModal({
    showModal,
    setShowModal
}) {
    const [pokemonType, setPokemonType] = useState("");
    const [pokemonCoach, setPokemonCoach] = useState("");

    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            child={
                CreatingForm(
                    pokemonType,
                    setPokemonType,
                    pokemonCoach,
                    setPokemonCoach
                )
            }
            actionButtonText="Create!"
            actionButtonBgCollor="esmerald"
            actionButtonCallback={() => createPokemon(pokemonType, pokemonCoach)}
            cancelButtonCallback={() => setShowModal(false)}
        ></Modal>
    );
}