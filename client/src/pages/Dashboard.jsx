import React, { useEffect, useRef } from "react";

const TableauDashboard = () => {
  const vizRef = useRef(null); // Reference for the container
  const tableauUrl =
    "https://public.tableau.com/views/EARTHSCAPE_DASHBOARD/Dashboard1?:embed=y&:display_count=y";

  useEffect(() => {
    const loadTableauScript = () => {
      return new Promise((resolve, reject) => {
        if (window.tableau) {
          console.log("Tableau API already loaded.");
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = "https://public.tableau.com/javascripts/api/tableau-2.min.js";
          script.async = true;
          script.onload = () => {
            console.log("Tableau script loaded.");
            resolve();
          };
          script.onerror = () => {
            console.error("Failed to load Tableau script.");
            reject(new Error("Tableau script failed to load."));
          };
          document.body.appendChild(script);
        }
      });
    };

    const initViz = () => {
      if (vizRef.current && window.tableau) {
        console.log("Initializing Tableau Viz...");
        const vizOptions = {
          hideTabs: true,
          hideToolbar: true,
        };
        new window.tableau.Viz(vizRef.current, tableauUrl, vizOptions);
      } else {
        console.error("Failed to initialize Tableau Viz. API not loaded.");
      }
    };

    loadTableauScript()
      .then(() => {
        initViz();
      })
      .catch((error) => {
        console.error("Error loading Tableau script:", error);
      });
  }, [tableauUrl]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={vizRef}
        className="w-full max-w-7xl h-[70vh] md:h-[80vh] border border-gray-300 rounded-lg shadow-lg bg-white"
      >
        {/* Tableau Dashboard will render here */}
      </div>
    </div>
  );
};

export default TableauDashboard;
