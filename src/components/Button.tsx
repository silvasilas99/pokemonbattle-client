export default function Button ({ buttonText, bgCollor, onClickCallback}) 
{
    return (
        <button 
            className={`
                group 
                relative 
                h-8 
                w-20 
                overflow-hidden 
                rounded-2xl 
                text-lg 
                font-bold 
                text-white
                bg-${bgCollor}
            `}
            onClick={onClickCallback()}
        >
            <span> {buttonText} </span>
            <div 
                className="
                    absolute 
                    inset-0 
                    h-full 
                    w-full 
                    scale-0 
                    rounded-2xl 
                    transition-all 
                    duration-300 
                    group-hover:scale-100 
                    group-hover:bg-white/30
                "
            />
        </button>
    )
}