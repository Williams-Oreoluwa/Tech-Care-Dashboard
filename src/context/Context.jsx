import axios from "axios";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { baseURI } from "../api/GetData";
export const Globalcontext = createContext();

export const GlobalState = ({ children }) => {
  const [users, setUser] = useState([]);
  const [jessicaData, setjessicaData] = useState({
    name:"",
    age:"",
    gender:"",
    profile_picture:"",
    date_of_birth:"",
    emergency_contact:"",
    insurance_type:"",
    phone_number:""


  });



  const [loading, setLoading] = useState(false)

 const Username ='coalition'

const Password ="skills-test"

let auth = btoa(`${Username}:${Password}`);

  const userData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURI}`,

        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      console.log(response.data);
      console.table(response.data[3]);

      setjessicaData(response.data[3])
   
      setUser(response.data)
    //   console.log(user.name)

      
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    userData();
  }, []);

 
  return (
    <>
      <Globalcontext.Provider
        value={{
        users,
        jessicaData
        
        }}
      >
        {children}
      </Globalcontext.Provider>
    </>
  );
};
