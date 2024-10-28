import { createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [adminAccess, setAdminAccess] = useState(false);
    const [userData, setUserData] = useState("");
    const [galleryData, setGalleryData] = useState([]);
    const authorizationToken=token;
    const hostLink="https://pushpakdroneviman-backend.onrender.com";

    let isLoggedIn=!!token;

    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    const logoutUser=()=>{
        setToken("");
        setUserData("");
        setAdminAccess(false);
        return localStorage.removeItem("token");
    }

    const userAuthentication=async ()=>{
        try{
            const response=await fetch(`${hostLink}/auth/user`,{
                method:'GET',
                headers:{
                    Authorization: authorizationToken,
                },
            });

            
            if(response.ok){
                const res_data=await response.json();
                setAdminAccess(res_data.userData.isAdmin);
                setUserData(res_data.userData);
            }
        }catch(err){
            console.log("error in user authentication",err);
        }
    }

    const fetchGalleryData = async () => {
        try {
          const response = await fetch(`${hostLink}/media/gallery`);
          const res_data = await response.json();
          setGalleryData(res_data);
        } catch (err) {
          console.log("error in fetching gallery data", err);
        }
      }

    useEffect(()=>{
       if(isLoggedIn){
        userAuthentication();
       }
       fetchGalleryData();
    },[isLoggedIn]);

    return <AuthContext.Provider value={{storeTokenInLS,logoutUser,isLoggedIn,userData,authorizationToken,adminAccess,galleryData,fetchGalleryData,hostLink}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);

    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
};
