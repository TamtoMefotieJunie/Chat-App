var currentTime = new Date().getMinutes() + ":" + new Date().getSeconds();

export const contactArray = [
    {
        id:1,
        name:'Royce',
        conversation:[
            {
                sender_id:2,
                reciever_id:1,
                content: "Good morning Royce",
                time : currentTime
            },
           
            {
                sender_id:1,
                reciever_id:2,
                content: "Good Morning junie",
                time :currentTime
            },
            {
                sender_id:1,
                reciever_id:2,
                content: 'How are you doing?',
                time : currentTime
            },
           
        ],
        numberUnreadMsg: 2
    },
    {
        id:2,
        name:'Percy',
        conversation:[
            {
                sender_id:2,
                reciever_id:3,
                content: "Good morning Percy",
                time : currentTime
            },
           
            {
                sender_id:3,
                reciever_id:2,
                content: "Good Morning manu",
                time : currentTime
            },
            {
                sender_id:3,
                reciever_id:2,
                content: "How are you doing?",
                time : currentTime
            },
           

        ],
        numberUnreadMsg: 1
    },
    {
        id:3,
        name:'Yvan',
        conversation:[
            {
                sender_id:2,
                reciever_id:3,
                
                content: "Good morning Yvan",
                time : currentTime
            },
           
            {
                sender_id:3,
                reciever_id:2,
                
                content: "Good Morning",
                time : currentTime
            },
            {
                sender_id:3,
                reciever_id:2,
                
                content: "How are you doing?",
                time : currentTime
            },
           

        ],
        numberUnreadMsg: 0 
    },
    {
        id:4,
        name:'Sandra',
        conversation:[
            {
                sender_id:2,
                reciever_id:4,
               
                content: "Good morning Sandra",
                time : currentTime
            },
           
            {
                sender_id:4,
                reciever_id:2,
                
                content: "Good Morning",
                time : currentTime
            },
            {
                sender_id:2,
                reciever_id:4,
                
                content: "How are you doing?",
                time : currentTime
            },
           

        ],
        numberUnreadMsg: 200
    },
    {
        id:5,
        name:'Chris',
        conversation:[
            {
                sender_id:2,
                reciever_id:5,
                content: "Good morning Chris",
                time : currentTime
            },
           
            {
                sender_id:5,
                reciever_id:2,
                content: "Good Morning",
                time : currentTime
            },
            {
                sender_id:5,
                reciever_id:2,
                content: "How are you doing?",
                time : currentTime
            },
           

        ],
        numberUnreadMsg: 200
    }
];
