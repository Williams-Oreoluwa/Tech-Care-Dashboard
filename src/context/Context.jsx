import axios from "axios";
import { createContext, useEffect, useState, useMemo } from "react";
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
  const [history, setHistory] = useState([]);
  const Username = "coalition";
  const Password = "skills-test";

  //Fetch Data

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
      // console.log(response.data);
      // console.table(response.data[3].lab_results);
      // console.log(response.data[3].diagnosis_history);
      setHistory(response.data[3].diagnosis_history);
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

  //Get User medical history

  const systolicData = history.map((item) => {
    return item.blood_pressure.systolic.value;
  });

  const diastolicData = history.map((item) => {
    return item.blood_pressure.diastolic.value;
  });

  const respiratoryValue = history.map((item) => {
    return item.respiratory_rate.value;
  });

  const heartRateValue = history.map((item) => {
    return item.heart_rate.value;
  });

  const temperatureValue = history.map((item) => {
    return item.temperature.value;
  });

  //Reduce to values obtained within last 6 months
  const systolic = systolicData.slice(0, 6);
  const diastolic = diastolicData.slice(0, 6);

  //Average value calculation logic.

  const getAverage = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return parseInt(sum / array.length);
  };

  //Get average for requested data

  const getAverageSystolicData = getAverage(systolic);

  const getAverageDiastolicData = getAverage(diastolic);

  const averageRespiratorRate = getAverage(respiratoryValue);

  const averageHeartRate = getAverage(heartRateValue);

  const averageTemperature = getAverage(temperatureValue);

  // console.log(averageTemperature);

  return (
    <>
      <Globalcontext.Provider
        value={{
          users,
          jessicaData,
          labResults,
          diagnosticsList,
          getAverageSystolicData,
          getAverageDiastolicData,
          averageRespiratorRate,
          averageHeartRate,
          averageTemperature,
          systolic,
          diastolic,
        }}
      >
        {children}
      </Globalcontext.Provider>
    </>
  );
};
