

const GrayButton = ({title}) => {
    return (
        <div>
           <button className="bg-gray-100  text-black rounded-full px-8 py-2  hover:bg-bluePrimary hover:text-white transition-all ease-in duration-75 text-md">{title}</button>  
        </div>
    );
};

export default GrayButton;