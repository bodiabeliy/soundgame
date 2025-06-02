// import { ActionButton } from "../buttons/ActionButton";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyImage from "../../assets/empty.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import { IconArrowCard } from "../Icons/ExpendArrow";
import { Warning } from "../Icons/Warning";
import { Empty } from "../Icons/Empty";

import { categoryTopicsList } from "../../utils/db";


const CategoriesTopicsList = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} /> */}

      <p className="text-4xl font-thin text-gray-900 p-4 text-white pb-10">
        Всього тем:{" "}
        <span className="text-yellow-lime text-bold">
          {categoryTopicsList.length}
        </span>
      </p>

      <ul className="max-w-md divide-y divide-gray-200 ring-2 ring-yellow-lime">
        {categoryTopicsList.map((categotyTopic) => {
          return (
            <div key={categotyTopic.topicName}>
              <Accordion className="text-3xl font-bold" disabled={categotyTopic.topicItems.length === 0}>
                <AccordionSummary
                  className=""
                  expandIcon={<IconArrowCard fill="white" />}
                  aria-controls={categotyTopic.topicName}
                  id={
                    categotyTopic.topicName + `${"-" + categotyTopic.topicName}`
                  }
                >
                  <div className="flex w-full items-center space-x-4 rtl:space-x-reverse ">
                    <div className="shrink-0 ">
                      <img
                        className=" w-20 h-20 rounded-full"
                        src={categotyTopic.image}
                        alt={categotyTopic.topicName}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xl  text-white  ">
                        {categotyTopic.topicName}
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center text-black font-semibold text-gray-900 pr-4 ">
                      <span className="text-white text-4xl">
                        {categotyTopic.topicItems.length}
                      </span>

                      <span className="text-white text-sm">фото</span>
                    </div>
                  </div>
                </AccordionSummary>
                {
                  categotyTopic.topicItems.length >0 ?
                  <AccordionDetails className="text-xl text-white bg-green-light">
                  <div className="">
                    <div
                      class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
                      role="alert"
                    >
                      <Warning fill="currentColor" />
                     
                      <span class="sr-only">Info</span>
                      <div className="flex flex-col-reverse">
                        <span class="font-medium">
                         Перед початком - переконайтесь, що отримали потрібну роздруківку у вчителя. 
                        У разі відсутності - завантажте потрібну
                        </span> <br />

                        Хвилинка уваги!
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-2">
                    <button
                      type="button"
                      class="text-white bg-pink hover:bg-hovered-pink font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mt-2"
                    >
                      <FileDownloadIcon />
                      Завантажити
                    </button>
                    <button
                      type="button"
                      class="text-white bg-purpure hover:bg-hovered-purpure font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2"
                      onClick={() =>
                        navigate(`/topic/${categotyTopic.topicName}`, {
                          state: {
                            topic: categotyTopic.topicName,
                            children: categotyTopic.topicItems,
                          },
                        })
                      }
                    >
                      <DocumentScannerOutlinedIcon />
                      Переглянути
                    </button>
                  </div>
                </AccordionDetails>:
                <AccordionDetails className="text-sm text-white bg-green-light">
                    <img style={{margin:"0 auto"}} width={100} height={100} src={EmptyImage} alt="" />
                    <p className="text-center p-2">Фото відсутні</p>
                </AccordionDetails>
                }
              </Accordion>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesTopicsList;
