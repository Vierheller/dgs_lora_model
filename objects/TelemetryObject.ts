import {TelemetryInternal} from '../Telemetry';

export class TelemetryObject implements TelemetryInternal {
  public class: string;
  public index: number;
  public channel: number;
  public payload: string;
  public package_counter: number;
  public time: string;
  public lat: number;
  public lon: number;
  public alt: number;
  public speed: number;
  public direction: number;
  public satellites: number;
  public temp_chip: number;
  public battery_voltage: number;
  public current_voltage: number;
  public temp_case: number;
  public pressure: number;
  public humidity: number;
  public temp_extern: number;
  public timestamp: number;
  public type: string;

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

  public getClass(): TelemetryElement {
    return {
      parameter: 'Klasse',
      value: this.class,
      unit: '',
    };
  }

  public getIndex(): TelemetryElement {
    return {
      parameter: 'Index',
      value: this.index,
      unit: '',
    };
  }

  public getChannel(): TelemetryElement {
    return {
      parameter: 'Kanal',
      value: this.channel,
      unit: '',
    };
  }

  public getPayload(): TelemetryElement {
    return {
      parameter: 'Payload',
      value: this.payload,
      unit: '',
    };
  }

  public getPackageCounter(): TelemetryElement {
    return {
      parameter: 'Paketnummer',
      value: this.package_counter,
      unit: '',
    };
  }

  public getTime(): TelemetryElement {
    return {
      parameter: 'Zeit (Gesendet)',
      value: this.time,
      unit: '',
    };
  }

  public getLat(): TelemetryElement {
    return {
      parameter: 'Breitengrad',
      value: this.lat,
      unit: '°',
    };
  }

  public getLon(): TelemetryElement {
    return {
      parameter: 'Längengrad',
      value: this.lon,
      unit: '°',
    };
  }

  public getAlt(): TelemetryElement {
    return {
      parameter: 'Höhe',
      value: this.alt,
      unit: 'm',
    };
  }

  public getSpeed(): TelemetryElement {
    return {
      parameter: 'Geschwindigkeit',
      value: this.speed,
      unit: 'km/h',
    };
  }

  public getDirection(): TelemetryElement {
    return {
      parameter: 'Richtung',
      value: this.direction,
      unit: '°',
    };
  }

  public getSatellites(): TelemetryElement {
    return {
      parameter: 'Satelliten',
      value: this.satellites,
      unit: '',
    };
  }

  public getTempChip(): TelemetryElement {
    return {
      parameter: 'Temperatur PI',
      value: this.temp_chip,
      unit: '°C',
    };
  }

  public getBatteryVoltage(): TelemetryElement {
    return {
      parameter: 'Akku Sapnnung',
      value: this.battery_voltage,
      unit: 'V',
    };
  }

  public getCurrentVoltage(): TelemetryElement {
    return {
      parameter: 'Aktuelle Spannung',
      value: this.current_voltage,
      unit: 'V',
    };
  }

  public getTempCase(): TelemetryElement {
    return {
      parameter: 'Temperatur Gehäuse',
      value: this.temp_case,
      unit: '°C',
    };
  }

  public getPressure(): TelemetryElement {
    return {
      parameter: 'Luftdruck',
      value: this.pressure,
      unit: 'hPA',
    };
  }

  public getHumidity(): TelemetryElement {
    return {
      parameter: 'Luftfeuchtigkeit',
      value: this.humidity,
      unit: '%',
    };
  }

  public getTempExtern(): TelemetryElement {
    return {
      parameter: 'Temperatur Außen',
      value: this.temp_extern,
      unit: '°C',
    };
  }

  public getTimestamp(): TelemetryElement {
    return {
      parameter: 'Zeitstempel',
      value: this.timestamp,
      unit: '',
    };
  }

  public getTimestampConverted(): TelemetryElement {
    const date = new Date(this.timestamp);

    return {
      parameter: 'Zeit (Empfangen)',
      value: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
      unit: '',
    };
  }

  public getType(): TelemetryElement {
    return {
      parameter: 'Typ',
      value: this.type,
      unit: '',
    };
  }
}

export interface TelemetryElement {
  parameter: string;
  value: any;
  unit: string;
}
