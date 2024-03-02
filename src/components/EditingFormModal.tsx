import _ from "lodash";

import Modal from "./Modal";
import axios from "axios";
import { useEffect, useState } from "react";

const POKEMON_API_URL = "http://localhost:8080/pokemons";

// TODO: ORGANIZE TYPE USAGE IN EVERY METHOD OF THE MODULE

const updatePokemonCoach = (pokemonData: Object) => {
    try {
        (async () => {
            const newCoachName = _.get(pokemonData, "treinador", "");
            if (_.isEmpty(newCoachName)) {
                // TODO: USE SOME ALERT MESSAGE VALIDITY NOTIFICATION
                return;
            }

            await axios.put(
                `${POKEMON_API_URL}/${_.get(pokemonData, "_id")}`,
                { treinador: newCoachName }
            );

            window.location.reload()  // TODO: RETURN THE DATA INSTEAD OF RELOAD PAGE
        })();
    } catch (error) {
        // TODO: USE SOME ALERT MESSAGE TO HANDLE ERRORS AND WARNINGS
        console.debug(error);
    }
}

const EditingForm = (pokemonData, setPokemonData) => {
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
                            border-emerald-400
                            rounded-md 
                            focus:border-ciano-400 
                            focus:ring-ciano-300 
                            focus:outline-none 
                            focus:ring 
                            focus:ring-opacity-40
                        "
                        value={_.get(pokemonData, "treinador", "")}
                        onChange={(element) => {
                            setPokemonData({ 
                                treinador: _.get(element, "target.value", ""),
                                _id: _.get(pokemonData, "_id", "")
                            })
                        }}
                    />
                </div>
            </form >
        </>
    )
}

export default function EditingFormModal({
    showModal,
    setShowModal,
    pokemonToEditCurrentData
}) {
    const [pokemonData, setPokemonData] = useState(pokemonToEditCurrentData);

    useEffect(() => {
        if (_.isEmpty(pokemonToEditCurrentData)) {
            return;
        }
        setPokemonData(pokemonToEditCurrentData);
    }, [pokemonToEditCurrentData]);


    return (
        <>
            {
                !_.isEmpty(pokemonData) &&
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    child={EditingForm(pokemonData, setPokemonData)}
                    actionButtonText="Save!"
                    actionButtonBgCollor="cyan"
                    actionButtonCallback={() => updatePokemonCoach(pokemonData)}
                    cancelButtonCallback={() => setShowModal(false)}
                />
            }
        </>
    );
}