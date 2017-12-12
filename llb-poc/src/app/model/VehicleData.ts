/**
 *
 * Interface for bus data model.
 *
 * TODO: Incomplete class, there is still data that is not mapped the way it should
 */

export interface RotationStruct {
  in_rot_quaternion: number[];
}

export interface AccelerationStruct {
  in_accel_z: number;
  in_accel_y: number;
  in_accel_x: number;
}

export interface InclinationStruct {
  in_incli_z: number;
  in_incli_y: number;
  in_incli_x: number;
}

export interface MagnetometerStruct {
  in_rot_from_north_magnetic_tilt_comp: number;
  in_magn_z: number;
  in_magn_x: number;
  in_magn_y: number;
}

export interface GyroscopeStruct {
  in_anglvel_y: number;
  in_anglvel_x: number;
  in_anglvel_z: number;
}

export interface CanData {
  AIR1_AirCompressorStatus: number;
  AIR1_AirSuspensionSupplyPress: number;
  AIR1_ParkingAnd_OrTrailerAirPress: number;
  AIR1_PneumaticSupplyPress: number;
  AIR1_ServiceBrakeAirPressCircuit1: number;
  AIR1_ServiceBrakeAirPressCircuit2: number;
  AMB_AmbientAirTemp: number;
  AMB_CabInteriorTemp: number;
  AS_Alt1Status: number;
  BATTERY_AverageCellTemp: number;
  BATTERY_BatteryCurrent: number;
  BATTERY_BatteryPower: number;
  BATTERY_BatteryVoltage: number;
  BATTERY_SOC: number;
  CCVS_BrakeSwitch: number;
  CCVS_ParkingBrakeSwitch: number;
  CCVS_WheelBasedVehicleSpeed: number;
  CVW_GrossCombinationVehicleWeight: number;
  DC1_Ramp_WheelChairLiftPos: number;
  DC1_PosOfDoors: number;
  DD_BatteryLevel: number;
  DRIVER_AcceleratorPosition: number;
  DRIVER_BrakePedalPosition: number;
  DRIVER_DriverTorqueRequest: number;
  DRIVER_RegenControlPosition: number;
  DRIVER_SteeringWheelAngl: number;
  EEC1_DriversDemandMotorPercentTorque: number;
  EEC1_MotorSpeed: number;
  EEC2_AccelPedalPos1: number;
  EEC2_RoadSpeedLimitStatus: number;
  EEC2_VhclAccelerationRateLimitStatus: number;
  EFFICIENCY_Efficiency: number;
  EFFICIENCY_EfficiencyAverage: number;
  ENE_AUX1_AirCompressor: number;
  ENE_AUX1_DCDC: number;
  ENE_AUX2_HeatPump: number;
  ENE_AUX2_PowerSteering: number;
  ENE_MOT_DriveMotor: number;
  ENERGY_TotalChargedEnergy: number;
  ENERGY_TotalDischargedEnergy: number;
  ENERGY2_TotalExternalCharge: number;
  ENERGY2_TotalProcessedAmpHours: number;
  ET1_MotorCoolantTemp: number;
  ETC2_TransCurrentGear: number;
  HOURS_MotorTotalHoursOfOperation: number;
  MOTOR_AccelerationLimit: number;
  MOTOR_MotorTorque: number;
  MOTOR_MotorTorqueReference: number;
  MOTOR_SlipLimit: number;
  MOTOR_Power: number;
  MOTOR_SlipPercentage: number;
  PWR_AUX_HeatPump: number;
  PWR_AUX_AirCompressor: number;
  PWR_AUX_PowerSteering: number;
  PWR_AUX_DCDC: number;
  STATUS_ChargingType: number;
  TCO1_DirectionIndicator: number;
  TCO1_TachographVehicleSpeed: number;
  TCO1_VehicleMotion: number;
  TEMPERATURE_DriveInverter: number;
  TEMPERATURE_DriveMotor: number;
  VDHR_HghRslutionTotalVehicleDistance: number;
  VI_VehicleIdentificationNumber: number;
  VW_AxleLocation: number;
  VW_AxleWeight: number;
}

export interface VehicleData {
  /* GENERAL DATA */
  BusId: number;        // Bus id
  GwId: number;         // Id of the gateway device
  uts: number;          // Time when sensor data was updated
  utl: number;          // Time when location data was updated
  uta: number;          // Time when status data was updated
  utp: number;          // Time when position data was updated
  lus: Date;            // Time (UTC) when sensor data was updated
  lul: Date;            // Time (UTC) when location data was updated
  lua: Date;            // Time (UTC) when status data was updated
  lup: Date;            // Time (UTC) when position data was updated
  tsl: Date;            // Local (UTC) GPS timestamp from the vehicle gateway device

  /* LOCATION DATA */
  lat: number;          // Latitude coordinates
  lon: number;          // Longitude coordinates
  alt: number;          // Altitude
  eps: number;          // Speed error estimate in meter/sec
  epx: number;          // Estimated Longitude error in meters
  epv: number;          // Estimated vertical error in meters
  ept: number;          // Estimated timestamp error
  spd: number;          // Speed of the vehicle
  clm: number;          // Climb (positive) or sink (negative) rate, meters per second
  trc: number;          // Course over ground, degrees from true north
  mod: number;          // NMEA mode, 0=no mode value yet seen, 1=no fix, 2=2D, 3=3D

  /* POSITION DATA */
  tsp: Date;                      // local timestamp from the device
  dro: RotationStruct;            // Device rotation
  acc: AccelerationStruct;        // Gateway/vehicle acceleration
  inc: InclinationStruct;         // Gateway/vehicle inclination
  mgn: MagnetometerStruct;        // Magnetometer data
  gyr: GyroscopeStruct;           // Gyroscope data

  /* SENSOR DATA (these don't exists, at least not in realtime json) */
  sep: number;          // measured air pressure (from TinyNode)
  sei: number;          // Index of measured value
  set: number;          // measured temperature (from TinyNode)
  sts: Date;            // Timestamp of the TinyNode value
  seb: number;          // measured battery (from TinyNode)
  sid: number;          // id of the measured TinyNode value
  srs: number;          // measured RSSI (from TinyNode)
  seh: number;          // measured humidity (from TinyNode)

  /* CAN DATA */
  can: CanData;
}
