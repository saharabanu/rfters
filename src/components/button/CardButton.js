

const CardButton = ({title}) => {
    return (
        <div>
           <button className="bg-gray-100  text-bluePrimary rounded-full px-5 py-2  hover:bg-bluePrimary hover:text-white transition-all ease-in duration-75 text-sm">{title}</button>   
        </div>
    );
};

export default CardButton;