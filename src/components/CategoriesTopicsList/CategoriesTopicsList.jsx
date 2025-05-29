// import { ActionButton } from "../buttons/ActionButton";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


import { categoryTopicsList } from "../../utils/db";


const CategoriesTopicsList = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
 const navigate = useNavigate();
  return (
    <>
      {/* <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} /> */}
     
    <p className="text-4xl font-thin text-gray-900 p-4">Всього тем: {categoryTopicsList.length}</p>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {categoryTopicsList.map((categotyTopic) => {
          return (
            <div key={categotyTopic.topicName} onClick={() => navigate(`/topic/${categotyTopic.topicName}`, {
               state: {
                topic: categotyTopic.topicName,
                children: categotyTopic.topicItems,
              },
            })}>
              <li className="pb-3 sm:pb-4" >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="shrink-0">
                    <img
                      className=" w-20 h-20 rounded-full pl-4"
                      src={categotyTopic.image}
                      alt={categotyTopic.topicName}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate  ">
                      {categotyTopic.topicName}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 pr-4 ">
                    {categotyTopic.topicItems.length} <br />elements
                  </div>

                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesTopicsList;
