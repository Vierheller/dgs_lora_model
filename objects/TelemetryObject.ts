import {TelemetryInternal} from "../Telemetry";
import {telemetryDictonary} from "../config/telemetryDic";

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
    dbData ? this.class = dbData.class : this.class = "";
    dbData ? this.index = dbData.index : this.index = 0;
    dbData ? this.channel = dbData.channel : this.channel = 0;
    dbData ? this.payload = dbData.payload : this.payload = "";
    dbData ? this.package_counter = dbData.package_counter : this.package_counter = 0;
    dbData ? this.time = dbData.time : this.time = "";
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
    dbData ? this.type = dbData.type : this.type = "telemetry";
  }

  public getClass(): TelemetryElement {
    return {
      parameter: telemetryDictonary.class.name,
      value: this.class,
      unit: telemetryDictonary.class.unit,
    };
  }

  public getIndex(): TelemetryElement {
    return {
      parameter: telemetryDictonary.index.name,
      value: this.index,
      unit: telemetryDictonary.index.unit,
    };
  }

  public getChannel(): TelemetryElement {
    return {
      parameter: telemetryDictonary.channel.name,
      value: this.channel,
      unit: telemetryDictonary.channel.unit,
    };
  }

  public getPayload(): TelemetryElement {
    return {
      parameter: telemetryDictonary.payload.name,
      value: this.payload,
      unit: telemetryDictonary.payload.unit,
    };
  }

  public getPackageCounter(): TelemetryElement {
    return {
      parameter: telemetryDictonary.package_counter.name,
      value: this.package_counter,
      unit: telemetryDictonary.package_counter.unit,
    };
  }

  public getTime(): TelemetryElement {
    return {
      parameter: telemetryDictonary.time.name,
      value: this.time,
      unit: telemetryDictonary.time.unit,
    };
  }

  public getLat(): TelemetryElement {
    return {
      parameter: telemetryDictonary.lat.name,
      value: this.lat,
      unit: telemetryDictonary.lat.unit,
    };
  }

  public getLon(): TelemetryElement {
    return {
      parameter: telemetryDictonary.lon.name,
      value: this.lon,
      unit: telemetryDictonary.lon.name,
    };
  }

  public getAlt(): TelemetryElement {
    return {
      parameter: telemetryDictonary.alt.name,
      value: this.alt,
      unit: telemetryDictonary.alt.unit,
    };
  }

  public getSpeed(): TelemetryElement {
    return {
      parameter: telemetryDictonary.speed.name,
      value: this.speed,
      unit: telemetryDictonary.speed.unit,
    };
  }

  public getDirection(): TelemetryElement {
    return {
      parameter: telemetryDictonary.direction.name,
      value: this.direction,
      unit: telemetryDictonary.direction.unit,
    };
  }

  public getSatellites(): TelemetryElement {
    return {
      parameter: telemetryDictonary.satellites.name,
      value: this.satellites,
      unit: telemetryDictonary.satellites.unit,
    };
  }

  public getTempChip(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_chip.name,
      value: this.temp_chip,
      unit: telemetryDictonary.temp_chip.unit,
    };
  }

  public getBatteryVoltage(): TelemetryElement {
    return {
      parameter: telemetryDictonary.battery_voltage.name,
      value: this.battery_voltage,
      unit: telemetryDictonary.battery_voltage.unit,
    };
  }

  public getCurrentVoltage(): TelemetryElement {
    return {
      parameter: telemetryDictonary.current_voltage.name,
      value: this.current_voltage,
      unit: telemetryDictonary.current_voltage.unit,
    };
  }

  public getTempCase(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_case.name,
      value: this.temp_case,
      unit: telemetryDictonary.temp_case.unit,
    };
  }

  public getPressure(): TelemetryElement {
    return {
      parameter: telemetryDictonary.pressure.name,
      value: this.pressure,
      unit: telemetryDictonary.pressure.unit,
    };
  }

  public getHumidity(): TelemetryElement {
    return {
      parameter: telemetryDictonary.humidity.name,
      value: this.humidity,
      unit: telemetryDictonary.humidity.unit,
    };
  }

  public getTempExtern(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_extern.name,
      value: this.temp_extern,
      unit: telemetryDictonary.temp_extern.unit,
    };
  }

  public getTimestamp(): TelemetryElement {
    return {
      parameter: telemetryDictonary.timestamp.name,
      value: this.timestamp,
      unit: telemetryDictonary.timestamp.unit,
    };
  }

  public getTimestampConverted(): TelemetryElement {
    const date = new Date(this.timestamp);

    return {
      parameter: telemetryDictonary.timestamp.name,
      value: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      unit: telemetryDictonary.timestamp.unit,
    };
  }

  public getType(): TelemetryElement {
    return {
      parameter: telemetryDictonary.type.name,
      value: this.type,
      unit: telemetryDictonary.type.unit,
    };
  }
}

export interface TelemetryElement {
  parameter: string;
  value: any;
  unit: string;
}
