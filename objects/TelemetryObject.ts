import {TelemetryInternal} from "../Telemetry";

export class TelemetryObject implements TelemetryInternal {
  class: string;
  index: number;
  channel: number;
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
  timestamp:number;
  type:string;

  // init the data
  constructor(dbData?: TelemetryInternal) {
    dbData ? this.class = dbData.class : this.class = '';
    dbData ? this.index = dbData.index : this.index = 0;
    dbData ? this.channel = dbData.channel : this.channel = 0;
    dbData ? this.payload = dbData.payload : this.payload = '';
    dbData ? this.package_counter = dbData.package_counter : this.package_counter = 0;
    dbData ? this.time = dbData.time : this.time = '';
    dbData ? this.lat = dbData.lat : this.lat = 0;
    dbData ? this.lon = dbData.lon : this.lon = 0;
    dbData ? this.alt = dbData.alt : this.alt = 0;
    dbData ? this.speed = dbData.speed : this.speed = 0;
    dbData ? this.direction = dbData.direction : this.direction = 0;
    dbData ? this.satellites = dbData.satellites : this.satellites = 0;
    dbData ? this.temp_chip = dbData.temp_chip : this.temp_chip = 0;
    dbData ? this.battery_voltage = dbData.battery_voltage : this.battery_voltage = 0;
    dbData ? this.current_voltage = dbData.current_voltage : this.current_voltage = 0;
    dbData ? this.temp_case = dbData.temp_case : this.temp_case = 0;
    dbData ? this.pressure = dbData.pressure : this.pressure = 0;
    dbData ? this.humidity = dbData.humidity : this.humidity = 0;
    dbData ? this.temp_extern = dbData.temp_extern : this.temp_extern = 0;
    dbData ? this.timestamp = dbData.timestamp : this.timestamp = 0;
    dbData ? this.type = dbData.type : this.type = '';
  }

  getClass(): TelemetryElement {
    return {
      parameter: 'Klasse',
      value: this.class,
      unit: ''
    };
  }

  getIndex(): TelemetryElement {
    return {
      parameter: 'Index',
      value: this.index,
      unit: ''
    };
  }

  getChannel(): TelemetryElement {
    return {
      parameter: 'Kanal',
      value: this.channel,
      unit: ''
    };
  }

  getPayload(): TelemetryElement {
    return {
      parameter: 'Payload',
      value: this.payload,
      unit: ''
    };
  }

  getPackageCounter(): TelemetryElement {
    return {
      parameter: 'Paketnummer',
      value: this.package_counter,
      unit: ''
    };
  }

  getTime(): TelemetryElement {
    return {
      parameter: 'Zeit (Gesendet)',
      value: this.time,
      unit: ''
    };
  }

  getLat(): TelemetryElement {
    return {
      parameter: 'Breitengrad',
      value: this.lat,
      unit: '°'
    };
  }

  getLon(): TelemetryElement {
    return {
      parameter: 'Längengrad',
      value: this.lon,
      unit: '°'
    };
  }

  getAlt(): TelemetryElement {
    return {
      parameter: 'Höhe',
      value: this.alt,
      unit: 'm'
    };
  }

  getSpeed(): TelemetryElement {
    return {
      parameter: 'Geschwindigkeit',
      value: this.speed,
      unit: 'km/h'
    };
  }

  getDirection(): TelemetryElement {
    return {
      parameter: 'Richtung',
      value: this.direction,
      unit: '°'
    };
  }

  getSatellites(): TelemetryElement {
    return {
      parameter: 'Satelliten',
      value: this.satellites,
      unit: ''
    };
  }

  getTempChip(): TelemetryElement {
    return {
      parameter: 'Temperatur PI',
      value: this.temp_chip,
      unit: '°C'
    };
  }

  getBatteryVoltage(): TelemetryElement {
    return {
      parameter: 'Akku Sapnnung',
      value: this.battery_voltage,
      unit: 'V'
    };
  }

  getCurrentVoltage(): TelemetryElement {
    return {
      parameter: 'Aktuelle Spannung',
      value: this.current_voltage,
      unit: 'V'
    };
  }

  getTempCase(): TelemetryElement {
    return {
      parameter: 'Temperatur Gehäuse',
      value: this.temp_case,
      unit: '°C'
    };
  }

  getPressure(): TelemetryElement {
    return {
      parameter: 'Luftdruck',
      value: this.pressure,
      unit: 'hPA'
    };
  }

  getHumidity(): TelemetryElement {
    return {
      parameter: 'Luftfeuchtigkeit',
      value: this.humidity,
      unit: '%'
    };
  }

  getTempExtern(): TelemetryElement {
    return {
      parameter: 'Temperatur Außen',
      value: this.temp_extern,
      unit: '°C'
    };
  }

  getTimestamp(): TelemetryElement {
    return {
      parameter: 'Zeitstempel',
      value: this.timestamp,
      unit: ''
    };
  }

  getTimestampConverted(): TelemetryElement {
    let date = new Date(this.timestamp);

    return {
      parameter: 'Zeit (Empfangen)',
      value: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      unit: ''
    };
  }

  getType(): TelemetryElement {
    return {
      parameter: 'Typ',
      value: this.type,
      unit: ''
    };
  }
}

export interface TelemetryElement {
  parameter: string;
  value: any;
  unit: string;
}
