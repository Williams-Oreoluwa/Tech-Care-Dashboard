import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
} from "react";
import { baseURI } from "../api/GetData";

export const Globalcontext = createContext();

export const GlobalState = ({ children }) => {
  const [users, setUser] = useState([]);
  const [jessicaData, setjessicaData] = useState({
    name: "",
    age: "",
    gender: "",
    profile_picture: "",
    date_of_birth: "",
    emergency_contact: "",
    insurance_type: "",
    phone_number: "",
  });

  const [labResults, setLabResults] = useState([]);

  const [diagnosticsList, setDiagnosticsLists] = useState([]);

  const Username = "coalition";

  const Password = "skills-test";

  let auth = btoa(`${Username}:${Password}`);

  const userData = async () => {
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
      console.table(response.data[3].lab_results);
      console.table(response.data[3].diagnostic_list);
      setDiagnosticsLists(response.data[3].diagnostic_list);
      setLabResults(response.data[3].lab_results);

      setjessicaData(response.data[3]);

      setUser(response.data);
      //   console.log(user.name)
    } catch (error) {
      throw new Error("Something went wrong!!!");
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
          jessicaData,
          labResults,
          diagnosticsList,
        }}
      >
        {children}
      </Globalcontext.Provider>
    </>
  );
};
