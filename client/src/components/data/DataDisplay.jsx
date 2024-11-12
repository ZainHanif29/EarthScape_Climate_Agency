import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const DataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/data/getALLData");
        setData(response.data.data); // Assuming the data is directly in the response object
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
        <div className="flex justify-center items-center text-center h-screen">
        <Loader2 className="animate-spin text-blue-600 w-96 h-96" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{item.NAME}</h2>
              <p><strong>Station:</strong> {item.STATION}</p>
              <p><strong>Date:</strong> {item.DATE}</p>
              <p><strong>Latitude:</strong> {item.LATITUDE}</p>
              <p><strong>Longitude:</strong> {item.LONGITUDE}</p>
              <p><strong>Elevation:</strong> {item.ELEVATION}m</p>
              <p><strong>Max Temp:</strong> {item.TMAX}°C</p>
              <p><strong>Min Temp:</strong> {item.TMIN}°C</p>
              <p><strong>Avg Temp:</strong> {item.TAVG}°C</p>
              <p><strong>Precipitation:</strong> {item.PRCP}mm</p>
              <p><strong>Extreme Max Temp:</strong> {item.EMXT}°C</p>
              <p><strong>Extreme Min Temp:</strong> {item.EMNT}°C</p>
              <p><strong>Extreme Max Precipitation:</strong> {item.EMXP}mm</p>
              <p><strong>Heating Degree Days:</strong> {item.HTDD}</p>
              <p><strong>Cooling Degree Days:</strong> {item.CLDD}</p>
              <p><strong>Days Above 90°F:</strong> {item.DX90}</p>
              <p><strong>Days Below 32°F:</strong> {item.DX32}</p>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default DataDisplay;
