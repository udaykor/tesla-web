import { doRemoteStart, wakeUp } from "@tesla-web/lib/commands";
import { getMobileEnabled, getVehicle, getVehicleData, getVehicles } from "@tesla-web/lib/state";
import { BsFillRecord2Fill } from 'react-icons/bs';
import { MILE_TO_KM_MUL, BAR_TO_PSI } from "@tesla-web/lib/constants";


async function getData() {
  const fleetRaw = await getVehicles();
  const fleet = fleetRaw.response;

  const fleetData: any = await Promise.all(fleet.map(async (vehicle: any) => {
    const data = await getVehicle(vehicle.id);
    return data.response;
  }));

  // Take into account a single vehicle only.
  const vehicle = fleetData[0];
  const remoteStartStatus = await doRemoteStart(vehicle.id);
  const mobileEnabled = await getMobileEnabled(vehicle.id);
  const wakeUpStatus = await wakeUp(vehicle.id);
  const vh = await getVehicleData(vehicle.id).catch(err => undefined)


  const vehicleDataRef = vh?  {
    vh_state: vh.response.vehicle_state,
    cl_state: vh.response.climate_state,
    ch_state: vh.response.charge_state,
    dh_state: vh.response.drive_state,
    gui_settings: vh.response.gui_settings,
    config: vh.response.vehicle_config
  }: undefined

  return {
    vehicle,
    mobileEnabled: mobileEnabled.response,
    vehicleDataRef
  }
}

export default async function Page() {
  const { vehicle, mobileEnabled, vehicleDataRef } = await getData();
  const recordColor = vehicleDataRef?.vh_state?.dashcam_state === 'Recording' ? 'fill-red-500 animate-pulse' : 'fill-slate-800'
  const odoKms = vehicleDataRef?.vh_state ? Math.round(vehicleDataRef?.vh_state.odometer* MILE_TO_KM_MUL).toString() : 'N/A';

  const stats = [
    { id: 1, name: 'Battery Level', value: vehicleDataRef?.ch_state ? vehicleDataRef?.ch_state.battery_level: 'N/A', bgColor: vehicleDataRef?.ch_state.battery_level === 80? 'bg-green-500': 'bg-red-500', textColor: 'text-white', subTextColor: 'text-white' },
    { id: 2, name: 'Cabin Temperature', value: vehicleDataRef?.cl_state? vehicleDataRef?.cl_state.inside_temp :'N/A' },
    { id: 3, name: 'Outside Temperature', value: vehicleDataRef?.cl_state? vehicleDataRef?.cl_state.outside_temp :'N/A' },
    { id: 4, name: 'Mobile', value: mobileEnabled.toString(), bgColor: mobileEnabled === true ? 'bg-green-500': 'bg-red-400',subTextColor: 'text-white', textColor: 'text-white' },
    { id: 5, name: 'State', value: vehicle.state, bgColor: vehicle.state === 'online' ? 'bg-green-500': 'bg-gray-200', subTextColor: 'text-white', textColor: 'text-white' },
    { id: 6, name: 'Odometer (KM)', value: odoKms, bgColor: 'bg-blue-600', textColor: 'text-gray-50', subTextColor: 'text-gray-300'},
    { id: 7, name: 'Service', value: vehicle.in_service.toString(), bgColor: vehicle.in_service === false ? 'bg-green-500': 'bg-red-400',subTextColor: 'text-white', textColor: 'text-white' },
    { id: 8, name: 'Charging State', value: vehicleDataRef?.ch_state? vehicleDataRef?.ch_state.charging_state: 'N/A', bgColor: vehicleDataRef?.ch_state.charging_state === 'Complete'? 'bg-green-500': 'bg-red-500', textColor: 'text-gray-50', subTextColor: 'text-gray-300'}
  ];

  const tirePressureData = [
    {id: 1, name: 'Front Left', value: vehicleDataRef?.vh_state ? Math.round(vehicleDataRef?.vh_state?.tpms_pressure_fl*BAR_TO_PSI): 'N/A', bgColor: 'bg-gray-950', subTextColor: 'text-white', textColor: 'text-white' },
    {id: 2, name: 'Front Right', value: vehicleDataRef?.vh_state ? Math.round(vehicleDataRef?.vh_state?.tpms_pressure_fr*BAR_TO_PSI): 'N/A', bgColor: 'bg-gray-950', subTextColor: 'text-white', textColor: 'text-white' },
    {id: 3, name: 'Rear Left', value: vehicleDataRef?.vh_state ? Math.round(vehicleDataRef?.vh_state?.tpms_pressure_rl*BAR_TO_PSI): 'N/A', bgColor: 'bg-gray-950', subTextColor: 'text-white', textColor: 'text-white' },
    {id: 4, name: 'Rear Right', value: vehicleDataRef?.vh_state ? Math.round(vehicleDataRef?.vh_state?.tpms_pressure_rr*BAR_TO_PSI): 'N/A', bgColor: 'bg-gray-950', subTextColor: 'text-white', textColor: 'text-white' }
  ];

  vehicleDataRef?.vh_state

  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center" key={`state-${vehicle.id}`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {vehicle.display_name}
          </h2>
          <BsFillRecord2Fill className={`${recordColor} align-middle justify-center`}/>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Current state
          </p>
        </div>
        <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className={`flex flex-col ${stat.bgColor? stat.bgColor: 'bg-gray-200'} p-8`}>
              <dt className={`text-sm font-semibold leading-6 ${stat.subTextColor? stat.subTextColor: 'text-slate-950'}`}>{stat.name}</dt>
              <dd className={`order-first text-3xl font-bold tracking-tight ${stat.textColor? stat.textColor: 'text-slate-950'}`}>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-lg leading-8 text-gray-600">
            Cold tire pressure (PSI)
        </p>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {tirePressureData.map((tire) => (
            <div key={`${tire.name.toLocaleLowerCase()}-${tire.id}`} className={`flex flex-col ${(tire.bgColor && tire.value === 42) ? tire.bgColor: 'bg-red-500'} p-8`}>
              <dt className={`text-sm font-semibold leading-6 ${tire.subTextColor? tire.subTextColor: 'text-slate-950'}`}>{tire.name}</dt>
              <dd className={`order-first text-3xl font-bold tracking-tight ${tire.textColor? tire.textColor: 'text-slate-950'}`}>{tire.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export const revalidate = 10000;
export const runtime = 'edge';