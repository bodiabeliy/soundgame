import React from "react";
import { useLocation } from 'react-router-dom';

const TopicItem = () => {
    const location = useLocation();
  const { topic, children } = location.state || {};
    
    return (
        <>
         <h1>Topic Page <b>{topic}</b></h1>
         <p>children count:{children?.length}</p>
        </>
    )
}
export default TopicItem;