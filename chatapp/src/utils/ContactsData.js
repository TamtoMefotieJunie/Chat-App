export const contactArray = [
    {
        id:1,
        name:'Royce',
        conversation:[
            {
                sender_id:2,
                reciever_id:1,
                content: "Good morning Royce",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           
            {
                sender_id:1,
                reciever_id:2,
                content: "Good Morning junie",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
            {
                sender_id:1,
                reciever_id:2,
                content: 'How are you doing?',
                time : new Date().getHours() + ":" + new Date().getMinutes()
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
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           
            {
                sender_id:3,
                reciever_id:2,
                content: "Good Morning manu",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
            {
                sender_id:3,
                reciever_id:2,
                content: "How are you doing?",
                time : new Date().getHours() + ":" + new Date().getMinutes()
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
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           
            {
                sender_id:3,
                reciever_id:2,
                
                content: "Good Morning",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
            {
                sender_id:3,
                reciever_id:2,
                
                content: "How are you doing?",
                time : new Date().getHours() + ":" + new Date().getMinutes()
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
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           
            {
                sender_id:4,
                reciever_id:2,
                
                content: "Good Morning",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
            {
                sender_id:2,
                reciever_id:4,
                
                content: "How are you doing?",
                time : new Date().getHours() + ":" + new Date().getMinutes()
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
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           
            {
                sender_id:5,
                reciever_id:2,
                content: "Good Morning",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
            {
                sender_id:5,
                reciever_id:2,
                content: "How are you doing?",
                time : new Date().getHours() + ":" + new Date().getMinutes()
            },
           

        ],
        numberUnreadMsg: 200
    }
];