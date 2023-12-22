

const Button = ({title}) => {
    return (
        <div>
            <button className="bg-bluePrimary text-white rounded-full px-8 py-2 hover:border-2 hover:border-bluePrimary hover:bg-transparent hover:text-bluePrimary transition-all ease-in duration-75 text-md">{title}</button>
        </div>
    );
};

export default Button;