import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";

import Modal from "./Modal";

const POKEMON_API_URL = "http://localhost:8080/pokemons";

// TODO: ORGANIZE TYPE USAGE IN EVERY METHOD OF THE MODULE

const battleAndReturnResume = async (
    pokemonA,
    pokemonB
) => {
    try {
        const pokemonAId = _.get(pokemonA, "value", "no-id");
        const pokemonBId = _.get(pokemonB, "value", "no-id");
        if (
            _.isEmpty(pokemonAId)
            || _.isEmpty(pokemonBId)
        ) {
            // TODO: USE SOME ALERT MESSAGE VALIDITY NOTIFICATION
            return;
        }
        const res =
            await axios.post(`${POKEMON_API_URL}/${pokemonAId}/${pokemonBId}`);
        const resData = _.get(res, "data", []);
        if (_.isEmpty(resData)) {
            // TODO: USE SOME ALERT MESSAGE TO INFORM ERROR
            return;
        }
        return resData;
    } catch (error) {
        // TODO: USE SOME ALERT MESSAGE TO HANDLE ERRORS AND WARNINGS
        console.debug(error);
    }
}

// TODO: UNATTACH METHODS AND COMPONENTS FROM THIS FUNCTION TO BETTER ARCH
const BattleForm = (
    pokemonsData,
    selectedPokemons,
    setSelectedPokemons
) => {
    if (_.isEmpty(pokemonsData)) {
        return;
    }
    const optionsFromPokemonData =
        _.map(
            pokemonsData,
            (pokemon: Object) => {
                const pokemonType = _.get(pokemon, "tipo", "");
                switch (pokemonType) {
                    case _.isEmpty(pokemonType):
                        break;
                    case "pikachu":
                        return {
                            _id: _.get(pokemon, "_id", "no-id"),
                            value: "pikachu",
                            text: "Pikachu ⚡",
                        }
                    case "mewtwo":
                        return {
                            _id: _.get(pokemon, "_id", "no-id"),
                            value: "mewtwo",
                            text: "Mewtwo 🔮"
                        }
                    case "charizard":
                        return {
                            _id: _.get(pokemon, "_id", "no-id"),
                            value: "charizard",
                            text: "Charizard 🔥"
                        }
                    default:
                        break;
                }
            }
        );
    return (
        <>
            <form className="mt-6">
                {/* First pokemon selected to battle select input */}
                <div className="mb-2">
                    <p className="mt-5 py-2 text-ciano-900">
                        Select the first Pokemon to the battle!!! ⚔️
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
                        value={_.get(selectedPokemons, "firstPokemon.value")}
                        onChange={
                            (e) => {
                                setSelectedPokemons({
                                    ...selectedPokemons,
                                    firstPokemon: { value: e.target.value }
                                })
                            }
                        }
                    >
                        <option key="no-id" value="">
                            First Pokemon 🤺
                        </option>
                        {optionsFromPokemonData.map((option: Object) => (
                            !_.isEmpty(_.get(option, "_id")) &&
                            <option
                                key={_.get(option, "_id")}
                                value={_.get(option, "_id")}
                            >
                                {_.get(option, "text")}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Second pokemon selected to battle select input */}
                <div className="mb-2">
                    <p className="mt-5 py-2 text-ciano-900">
                        Select the second Pokemon to the battle!!! 💥
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
                        value={_.get(selectedPokemons, "secondPokemon.value")}
                        onChange={
                            (e) => {
                                setSelectedPokemons({
                                    ...selectedPokemons,
                                    secondPokemon: { value: e.target.value }
                                })
                            }
                        }
                    >
                        <option key="no-id" value="">
                            Second Pokemon 🥊
                        </option>
                        {optionsFromPokemonData.map((option: Object) => (
                            !_.isEmpty(_.get(option, "_id")) &&
                            <option
                                key={_.get(option, "_id")}
                                value={_.get(option, "_id")}
                            >
                                {_.get(option, "text")}
                            </option>
                        ))}
                    </select>
                </div>
            </form >
        </>
    )
}

// TODO: SEPARE READONLY COMPONENT AND TURNS SUB-COMPONENTS REUSABLE
const BatteResumeModal = (
    winner: object,
    loser: object,
    showModal,
    setShowModal
) => {
    console.log(winner, loser)
    if (!showModal) {
        console.log(111);
        return;
    }
    // TODO: ANALIZE REASON WHY THE ELEMENT IS NOT BEING PRINTED ON SCREEN
    return (
        <>
            <div
                className="
                    justify-center 
                    items-center 
                    flex 
                    overflow-x-hidden 
                    overflow-y-auto 
                    fixed 
                    inset-0 
                    z-50 
                    outline-none 
                    focus:outline-none
                "
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="
                        border-0 
                        rounded-lg 
                        shadow-lg 
                        relative 
                        flex 
                        flex-col 
                        w-full 
                        bg-white 
                        outline-none 
                        focus:outline-none
                    ">
                        <div className="relative p-6 flex-auto">
                            <div className="flex items-between">
                                <div className="my-10 mx-12 leading-4">
                                    <p className="font-bold text-xl text-blue-500 my-2">
                                        WINNER
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-blue-700">
                                            Type:
                                        </span>
                                        <span className="px-2 text-blue-300">
                                            {_.get(winner, "tipo", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-blue-700">
                                            Coach:
                                        </span>
                                        <span className="px-2 text-blue-300">
                                            {_.get(winner, "treinador", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-blue-700">
                                            Updated level:
                                        </span>
                                        <span className="px-2 text-blue-300">
                                            {_.get(winner, "nivel", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-blue-700">
                                            Battle fought:
                                        </span>
                                        <span className="px-2 text-blue-300">
                                            {(_.get(winner, "battles", [])).length}
                                        </span>
                                    </p>
                                </div>

                                <div className="my-10 mx-12 leading-4">
                                    <p className="font-bold text-xl text-red-500 my-2">
                                        LOSER
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-red-700">
                                            Type:
                                        </span>
                                        <span className="px-2 text-red-300">
                                            {_.get(loser, "tipo", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-red-700">
                                            Coach:
                                        </span>
                                        <span className="px-2 text-red-300">
                                            {_.get(loser, "treinador", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-red-700">
                                            Updated level:
                                        </span>
                                        <span className="px-2 text-red-300">
                                            {_.get(loser, "nivel", "")}
                                        </span>
                                    </p>
                                    <p className="text-lg">
                                        <span className="text-red-700">
                                            Battle fought:
                                        </span>
                                        <span className="px-2 text-red-300">
                                            {(_.get(loser, "battles", [])).length}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="
                                    uppercase 
                                    text-white 
                                    text-sm 
                                    font-bold 
                                    px-6 
                                    py-3 
                                    mr-1 
                                    mb-1 
                                    shadow 
                                    rounded 
                                    ease-linear 
                                    outline-none 
                                    bg-green-300
                                    hover:shadow-lg 
                                    active:bg-green-600 
                                    focus:outline-none 
                                    duration-150
                                    transition-all 
                                "
                                onClick={() => setShowModal(false)}
                            >
                                Dismiss.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

// TODO: UNATTACH METHODS AND COMPONENTS FROM THIS FUNCTION TO BETTER ARCH
export default function BattleFormModal({
    showModal,
    setShowModal
}) {
    /**
     * @initializes all states
     */
    const [allPokemonsData, setAllPokemonsData] = useState([]);
    const [selectedPokemons, setSelectedPokemons] =
        useState({
            firstPokemon: {},
            secondPokemon: {},
        })
    const [battleResume, setBattleResume] = useState({});
    const [showBattleResumeModal, setShowBattleResumeModal] = useState(false);
    const [isLoadingBattleResume, setIsLoadingBattleResume] = useState(false);
    /**
     * 
     * @gets all pokemons data and set state
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

    const generateBattleAndReturnResume = async (
        pokemonA: Object,
        pokemonB: Object,
        readyToGenerate: boolean
    ) => {
        if (
            _.isEmpty(pokemonA)
            || _.isEmpty(pokemonB)
            || !readyToGenerate
        ) {
            return;
        }
        const resume =
            await battleAndReturnResume(pokemonA, pokemonB);
        if (_.isEmpty(resume)) {
            // TODO: USE SOME ALERT MESSAGE TO INFORM ERROR
            console.log(2)
            return;
        }
        setIsLoadingBattleResume(false);
        return resume;
    };

    useEffect(() => {
        if (!isLoadingBattleResume) {
            return;
        }
        const pokemonA = _.get(selectedPokemons, "firstPokemon");
        const pokemonB = _.get(selectedPokemons, "secondPokemon");
        if (
            _.isEmpty(pokemonA)
            || _.isEmpty(pokemonB)
        ) {
            return;
        }
        generateBattleAndReturnResume(pokemonA, pokemonB, isLoadingBattleResume)
            .then((data) => setBattleResume(data))
            .catch((e: Error) => console.debug(e));
        setIsLoadingBattleResume(false);
    }, [isLoadingBattleResume])

    // TODO: UNATTACH THIS CONDITIONAL RENDERING TO OTHER MODULE/COMPONENT
    /**
     * @returns JSX Component corresponding to current action
     */
    if (
        !_.isEmpty(battleResume)
        && !_.isEmpty(_.get(battleResume, "vencedor"))
        && !_.isEmpty(_.get(battleResume, "perdedor"))
    ) {
        const battleResumeCopy = battleResume;

        setAllPokemonsData([]);
        setSelectedPokemons({
            firstPokemon: {},
            secondPokemon: {}
        });
        setBattleResume({
            vencedor: {},
            perdedor: {}
        });

        setShowModal(false);

        return BatteResumeModal(
            _.get(battleResumeCopy, "vencedor"),
            _.get(battleResumeCopy, "perdedor"),
            true,
            setShowBattleResumeModal
        );
    }

    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            child={BattleForm(allPokemonsData, selectedPokemons, setSelectedPokemons)}
            actionButtonText="Battle!"
            actionButtonBgCollor="esmerald"
            actionButtonCallback={() => setIsLoadingBattleResume(true)}
            cancelButtonCallback={() => setShowModal(false)}
        />
    );
}