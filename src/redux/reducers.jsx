const initialState ={
    personne : [
        {id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'},
        {id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman88@gmail.com'}
    ]
}
const reducer=( state=initialState, action )=>{
    switch(action.type){
        case 'ADD_PERS':
            const user ={
                id :parseInt(action.payload.id),
                nom : action.payload.nom,
                prenom :action.payload.prenom,
                email : action.payload.email
            }
            return {...state,personne:[...state.personne,user]}
        case 'UPDATE_PERS':
            const userUpdate ={
                id :parseInt(action.payload.id),
                nom : action.payload.nom,
                prenom :action.payload.prenom,
                email : action.payload.email
            }
            return {...state,personne:[...state.personne.filter((use,index)=>use.id!==parseInt(action.payload.id)),userUpdate]}
        case 'DELET_PERS':
            return {...state,personne:[...state.personne.filter((use,index)=>use.id!==parseInt(action.payload))]}
        case 'SEARCH_PERS':
            return  {...state,personnesearch:[...state.personne.filter((use,index)=>use.id===parseInt(action.payload))]}
        default : 
            return state
    }
}
export default reducer
