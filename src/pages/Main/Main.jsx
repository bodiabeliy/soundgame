import React from "react";
import CategoriesTopicsList from "./../../components/CategoriesTopicsList/CategoriesTopicsList.jsx";
import Logo from "../../assets/logo.png"; // Assuming you have a logo image in this path
const Main = () => {
    return (
        <>
         {/* <h1>Main Page</h1> */}
         <img src={Logo} alt="" className="p-2" />
         <p className="p-3 text-white text-xl text-justify"><b className="text-2xl text-yellow-lime shadow-xl">Звукове лото </b>- dolor sit amet consectetur, adipisicing elit. Similique commodi incidunt impedit corrupti voluptatem modi rerum dolorem aspernatur sed, distinctio velit. Porro sapiente eligendi, cupiditate qui magnam adipisci officia? Voluptatibus.</p>
         <CategoriesTopicsList />
        </>
    )
}
export default Main;