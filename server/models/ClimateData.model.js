import mongoose from 'mongoose';

const climateSchema = new mongoose.Schema({
  STATION: { type: String, required: true },
  DATE: { type: Number, required: true },
  LATITUDE: { type: Number, required: true },
  LONGITUDE: { type: Number, required: true },
  ELEVATION: { type: Number, required: true },
  NAME: { type: String, required: true },
  TMAX: { type: Number, required: true },
  TMIN: { type: Number, required: true },
  TAVG: { type: Number, required: true },
  PRCP: { type: Number, required: true },
  EMXT: { type: Number, required: true },
  EMNT: { type: Number, required: true },
  EMXP: { type: Number, required: true },
  HTDD: { type: Number, required: true },
  CLDD: { type: Number, required: true },
  DX90: { type: Number, required: true },
  DX32: { type: Number, required: true }
});

const ClimateDataModel = mongoose.model('ClimateData', climateSchema);
export default ClimateDataModel;
