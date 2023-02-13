export const add_user=(personne)=>{
    return {
        type : 'ADD_PERS',
        payload :personne
    }
}
export const update_user=(personne)=>{
    return{
        type : 'UPDATE_PERS',
        payload : personne
    }
}
export const supr_user=(id)=>{
    return {
        type : 'DELET_PERS',
        payload : id
    }
}
export const search_user=(id)=>{
    return {
        type : 'SEARCH_PERS',
        payload : id
    }
}
/* ADD_PERS UPDATE_PERS DELET_PERS */