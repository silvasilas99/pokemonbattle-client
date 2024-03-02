export default function Modal({
    showModal,
    setShowModal,
    child,
    actionButtonText,
    actionButtonBgCollor,
    actionButtonCallback,
    cancelButtonCallback
}) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto">
                                    {child}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => cancelButtonCallback()}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={`
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
                                        `}
                                        type="button"
                                        onClick={() => actionButtonCallback()}
                                    >
                                        {actionButtonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}