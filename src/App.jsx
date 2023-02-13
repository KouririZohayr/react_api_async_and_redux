import { useSelector,useDispatch } from "react-redux";
import { add_user,supr_user,update_user,search_user } from "./redux/action";
import { useState } from "react";

export default function  App(){
    
    const data=useSelector(stete=>stete.personne)
    const datasearsh=useSelector(stete=>stete.personnesearch)
    const datag=datasearsh ? datasearsh : data
    const dispatch=useDispatch()
   
    function adduser(pers){ dispatch(add_user(pers))}
    function supuser(id){ dispatch(supr_user(id))}
    function updateuser(pers){dispatch(update_user(pers))}
    function search(id){dispatch(search_user(id))}
    const [user,setuser]=useState({
        id :'' ,
        nom : '' ,
        prenom :'' ,
        email :'',
        search :''
    })
    function handelchange(e){
        setuser(prev => ({ ...prev , [e.target.name] : e.target.value }))
    }
   

    return(
        <>
            <div>
                <div>
                    <h1 className="text-center text-7xl  text-gray-800 hover:text-gray-700  font-bold  ">CC3 EX1 REDUX CRUD</h1>
                </div>
                {
                datag.map((user,index)=>{
                    return <div key={index}className="my-5 mx-16" >
                        <p>Id : {user.id}  </p>
                        <p>Nom : {user.nom}  </p>
                        <p>Prenom : {user.prenom}  </p>
                        <p>Email : {user.email}  </p>
                        <div  >
                            <button onClick={()=>{supuser(user.id)}}className="my-2 mx-4 w-36 text-center h-8  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"> Delet </button>
                        </div>
                    </div>
                 })   
                }
                <div className="mx-5">
                    <form action="" onSubmit={e=>e.preventDefault()}>
                        search : <input type="text"  name="search"  onChange={handelchange} />  <button onClick={()=>{search(user.search)}}className="my-2 mx-4 w-36 text-center h-8  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"> SEARCH ID </button><br />
                        id : <input type="text"  name="id"  onChange={handelchange} />
                        nom : <input type="text" name="nom"  onChange={handelchange} />
                        prenom : <input type="text" name="prenom" onChange={handelchange} />
                        email : <input type="email" name="email" onChange={handelchange} />
                        <div>
                        <button onClick={()=>{adduser(user)}}className="my-2 mx-4 w-36 text-center h-8  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"> INSERT </button>
                        <button onClick={()=>{updateuser(user)}}className="my-2 mx-4 w-36 text-center h-8  bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"> UPADETE </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}