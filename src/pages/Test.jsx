import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          "https://yano-backend.onrender.com/api/userdoctor"
        );
        return response.data.userData; // Assuming 'userData' is the array we need
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        return [];
      }
    };

    const fetchPatientData = async () => {
      try {
        const response = await axios.get(
          "https://yano-backend.onrender.com/api/userpatient"
        );
        return response.data.userData; // Assuming 'userData' is the array we need
      } catch (error) {
        console.error("Error fetching patient data:", error);
        return [];
      }
    };

    const fetchAndCombineData = async () => {
      try {
        const doctorData = await fetchDoctorData();
        const patientData = await fetchPatientData();

        // Combine the data in an alternating fashion
        const maxLength = Math.max(doctorData.length, patientData.length);
        const combinedData = [];

        for (let i = 0; i < maxLength; i++) {
          if (i < doctorData.length) {
            combinedData.push(doctorData[i]);
          }
          if (i < patientData.length) {
            combinedData.push(patientData[i]);
          }
        }

        setCombinedData(combinedData); // Store the combined data in state
      } catch (error) {
        console.error("Error combining data:", error);
      }
    };

    fetchAndCombineData(); // Call the function to fetch and combine data
  }, []);

  return (
    <div>
      <h1>Combined Data</h1>
      <ul>
        {combinedData.map((item) => (
          <li key={item._id}>
            {/* Displaying relevant details from each user */}
            {item.firstName} {item.lastName} ({item.userType}) -{" "}
            {item.speciality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
