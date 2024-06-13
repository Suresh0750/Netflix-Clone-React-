import {createContext, useContext ,useState,useEffect} from 'react'
// import Auth from '../firebase'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

const Authendication = createContext()

export function AuthedicationProvider({children}){

    const [user, setUser] = useState({})
    console.log("user",user)

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(email,password){
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        console.log(()=>{
            unSubcribe()
        })
        return ()=>{
            unSubcribe()
        }
    })

    return(
        <Authendication.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </Authendication.Provider>
    )
}

export function UserAuth(){
    return useContext(Authendication)
}
