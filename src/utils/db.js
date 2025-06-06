
export const categoryTopicsList =[
    {
        image:`${process.env.REACT_APP_BASE_URL}/wild%20nature/topicImage.jpg`,
        imageTemplate:`${process.env.REACT_APP_BASE_URL}/wild%20nature/wild_nature.mind`,
        userExample:`${process.env.REACT_APP_BASE_URL}/wild%20nature/animals_template.png`,
        topicName:"Дика природа",
        topicItems:[
            {
                parentTopic: "Дика природа",
                itemName: "frog",
                targetIndex: 0,
                audio: `${process.env.REACT_APP_BASE_URL}/wild%20nature/frog/frog.mp3`,
            },
            {
                parentTopic: "Дика природа",
                itemName: "eagle",
                targetIndex: 1,
                audio: `${process.env.REACT_APP_BASE_URL}/wild%20nature/eagle/eagle.mp3`,
            },
            {
                parentTopic: "Дика природа",
                itemName: "snake",
                targetIndex: 2,
                audio: `${process.env.REACT_APP_BASE_URL}/wild%20nature/snake/snake.mp3`,
            },
            {
                parentTopic: "Дика природа",
                itemName: "lion",
                targetIndex: 3,
                audio: `${process.env.REACT_APP_BASE_URL}/wild%20nature/lion/lion.mp3`,
            },
            {
                parentTopic: "Дика природа",
                itemName: "owl",
                targetIndex: 4,
                audio: `${process.env.REACT_APP_BASE_URL}/wild%20nature/owl/owl.mp3`,
            },
             
            
            
            
        ]
    },
    {
        image:`${process.env.REACT_APP_BASE_URL}/tools/toolsTopic.png`,
        imageTemplate:`${process.env.REACT_APP_BASE_URL}/tools/tools.mind`,
        userExample:`${process.env.REACT_APP_BASE_URL}/tools/toolsTopic.png`,
        topicName:"Інструменти",
        topicItems:[
            {
                parentTopic: "Інструменти",
                itemName: "drill",
                targetIndex: 0,
                audio: `${process.env.REACT_APP_BASE_URL}/tools/drill/drill.mp3`,
            },
            {
                parentTopic: "Інструменти",
                itemName: "hummer",
                targetIndex: 1,
                audio: `${process.env.REACT_APP_BASE_URL}/tools/hummer/hummer.mp3`,
            },
             {
                parentTopic: "Інструменти",
                itemName: "jackhummer",
                targetIndex: 3,
                audio: `${process.env.REACT_APP_BASE_URL}/tools/jackhummer/jackhummer.mp3`,
            }
          
        ]
    },
    {
        image:"",
        imageTemplate:``,
        userExample:``,
        topicName:"Bonnie Green",
        topicItems:[]
        
    },
    {
        image:"",
        imageTemplate:``,
        userExample:``,
        topicName:"Michael Gough",
        topicItems:[]

    },
]