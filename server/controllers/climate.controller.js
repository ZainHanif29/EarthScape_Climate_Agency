import ClimateDataModel from "../models/ClimateData.model.js";


export const getAllData = async (req, res) => {
    try {
      const data = await ClimateDataModel.find().limit(100000);
  
      return res.status(200).json({
        data,
        message: "Data retrieved successfully.",
        success: true,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message
      });
    }
};
