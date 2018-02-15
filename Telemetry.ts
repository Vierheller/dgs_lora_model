import {isNegativeNumberLiteral} from 'tslint';

export interface TelemetryRaw {
    class: string;
    index: number;
    channel: number;
    payload: string;
    time: string;
    lat: number;
    lon: number;
    alt: number;
    rate: number;
    sentence: string;
}

// $$DHBW(payload),91(package_counter),15:42:16(time),49.51846(lat),8.50398(lon),00132(alt),1(speed),0(direction),
// 9(satellites),29.5(temp_chip),0.0(battery_voltage),11.199(current_voltage),24.2(temp_case),
// 1012(pressure),0.0(humidity),23.6(extern_temp)*1CA6
export interface TelemetryInternal {
  // tech info
  class: string;
  index: number;
  channel: number;

  // sentence
  payload: string;
  package_counter: number;
  time: string;
  lat: number;
  lon: number;
  alt: number;
  speed: number;
  direction: number;
  satellites: number;
  temp_chip: number;
  battery_voltage: number;
  current_voltage: number;
  temp_case: number;
  pressure: number;
  humidity: number;
  temp_extern: number;

  // additional info
  timestamp: number;
  type: string;
}

export interface TelemetrySentence {
    payload: string;
    package_counter: number;
    time: string;
    lat: number;
    lon: number;
    alt: number;
    speed: number;
    direction: number;
    satellites: number;
    temp_chip: number;
    battery_voltage: number;
    current_voltage: number;
    temp_case: number;
    pressure: number;
    humidity: number;
    temp_extern: number;
    checksum: string;
}
