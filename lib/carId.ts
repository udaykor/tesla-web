import { getVehicles } from "@tesla-web/lib/state";

const getCarId = async () => {
  // Get All Vehicles
  const resV = await getVehicles();
  // Remember: Do not share randomnly resV or Vehciles - sensitive data - VIN, car ID, GPS (car state call)
  const vehicles =  resV.response;
  // Do not log this ID - This is static and potentially sensitive
  return vehicles[0].id;
};

export default getCarId;