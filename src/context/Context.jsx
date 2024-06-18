import axios from "axios";
import { createContext, useEffect, useReducer } from "react";


export const Globalcontext = createContext();

const initialState = {
  users: [],
  jessicaData: {
    name: "",
    age: "",
    gender: "",
    profile_picture: "",
    date_of_birth: "",
    emergency_contact: "",
    insurance_type: "",
    phone_number: "",
  },
  labResults: [],
  diagnosticsList: [],
  history: [],
};

const stateData = {
  setPatients: "SET_USERS",
  setJessicaData: "SET_JESSICA_DATA",
  setLabResults: "SET_LAB_RESULTS",
  setDiagnosticsList: "SET_DIAGNOSTICS_LIST",
  setHistory: "SET_HISTORY",
};
const reducer = (state, action) => {
  switch (action.type) {
    case stateData.setPatients:
      return { ...state, users: action.payload };
    case stateData.setJessicaData:
      return { ...state, jessicaData: action.payload };
    case stateData.setLabResults:
      return { ...state, labResults: action.payload };
    case stateData.setDiagnosticsList:
      return { ...state, diagnosticsList: action.payload };
    case stateData.setHistory:
      return { ...state, history: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //User credentials
  const UserName = import.meta.env.VITE_USER_NAME;
  const Password = import.meta.env.VITE_PASSWORD;
  const baseURI =  import.meta.env.VITE_BASE_URI

  // Fetch Data
  let auth = btoa(`${UserName}:${Password}`);

  const userData = async () => {
    try {
      const response = await axios.get(`${baseURI}`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      dispatch({
        type: stateData.setHistory,
        payload: response.data[3].diagnosis_history,
      });
      dispatch({
        type: stateData.setDiagnosticsList,
        payload: response.data[3].diagnostic_list,
      });
      dispatch({
        type: stateData.setLabResults,
        payload: response.data[3].lab_results,
      });
      dispatch({ type: stateData.setJessicaData, payload: response.data[3] });
      dispatch({ type: stateData.setPatients, payload: response.data });
    } catch (error) {
      throw new Error("Something went wrong!!!");
    }
  };

  useEffect(() => {
    userData();
  }, []);

  // console.log(state.users)

  //Get users medical history

  const systolicData = state.history.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = state.history.map(
    (item) => item.blood_pressure.diastolic.value
  );
  const respiratoryValue = state.history.map(
    (item) => item.respiratory_rate.value
  );
  const heartRateValue = state.history.map((item) => item.heart_rate.value);
  const temperatureValue = state.history.map((item) => item.temperature.value);

  const systolicDataSliced = systolicData.slice(0, 6);
  const diastolicDataSliced = diastolicData.slice(0, 6);

  //Reverse array to suit calender for last 6 months

  const systolic = systolicDataSliced.reverse();

  const diastolic = diastolicDataSliced.reverse();

  console.log(systolic);

  //Get average values for data

  const getAverage = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return parseInt(sum / array.length);
  };

  const getAverageSystolicData = getAverage(systolic);
  const getAverageDiastolicData = getAverage(diastolic);
  const averageRespiratorRate = getAverage(respiratoryValue);
  const averageHeartRate = getAverage(heartRateValue);
  const averageTemperature = getAverage(temperatureValue);

  return (
    <Globalcontext.Provider
      value={{
        ...state,
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
  );
};
