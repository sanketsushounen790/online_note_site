const initState={
    //static data for test
    notes: [
        {id:"1", title : "Marigold", artist: "Aimyon"},
        {id:"2", title : "Mikazuki", artist: "Sayuri"},
        {id:"3", title : "PON PON PON", artist: "Kyary Pamyu Pamyu"},
    ] 
} 

const projectReducer = (state=initState , action) =>{
    switch(action.type) {
        case "CREATE_NOTE":
            console.log("Created note", action.note);
            return state;
        case "CREATE_NOTE_ERROR":
            console.log("Create Note Error !", action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer