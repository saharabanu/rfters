

const PrimaryButton = ({title}) => {
    return (
        <div>
           <button className="bg-transparent text-bluePrimary rounded-full px-5 py-2 border-2 border-bluePrimary hover:bg-bluePrimary hover:text-white transition-all ease-in duration-75 text-md">{title}</button>  
        </div>
    );
};

export default PrimaryButton;