import {TelemetryInternal} from '../Telemetry';
import {telemetryDictonary} from '../config/telemetryDic';

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
    dbData ? this.type = dbData.type : this.type = 'telemetry';
  }

  public getClass(): TelemetryElement {
    return {
      parameter: telemetryDictonary.class.name,
      value: this.class,
      unit: telemetryDictonary.class.unit,
      icon: telemetryDictonary.class.icon
    };
  }

  public getIndex(): TelemetryElement {
    return {
      parameter: telemetryDictonary.index.name,
      value: this.index,
      unit: telemetryDictonary.index.unit,
      icon: telemetryDictonary.index.icon
    };
  }

  public getChannel(): TelemetryElement {
    return {
      parameter: telemetryDictonary.channel.name,
      value: this.channel,
      unit: telemetryDictonary.channel.unit,
      icon: telemetryDictonary.channel.icon
    };
  }

  public getPayload(): TelemetryElement {
    return {
      parameter: telemetryDictonary.payload.name,
      value: this.payload,
      unit: telemetryDictonary.payload.unit,
      icon: telemetryDictonary.payload.icon
    };
  }

  public getPackageCounter(): TelemetryElement {
    return {
      parameter: telemetryDictonary.package_counter.name,
      value: this.package_counter,
      unit: telemetryDictonary.package_counter.unit,
      icon: telemetryDictonary.package_counter.icon
    };
  }

  public getTime(): TelemetryElement {
    return {
      parameter: telemetryDictonary.time.name,
      value: this.time,
      unit: telemetryDictonary.time.unit,
      icon: telemetryDictonary.time.icon
    };
  }

  public getLat(): TelemetryElement {
    return {
      parameter: telemetryDictonary.lat.name,
      value: this.lat,
      unit: telemetryDictonary.lat.unit,
      icon: telemetryDictonary.lat.icon
    };
  }

  public getLon(): TelemetryElement {
    return {
      parameter: telemetryDictonary.lon.name,
      value: this.lon,
      unit: telemetryDictonary.lon.unit,
      icon: telemetryDictonary.lon.icon
    };
  }

  // convert lat and lon to degree, minute, second format
  public getDMS(): TelemetryElement {
    return {
      parameter: telemetryDictonary.dms.name,
      value: this.calcDegreesToDMS(this.lat)+' N'+' '+this.calcDegreesToDMS(this.lon)+' E',
      unit: telemetryDictonary.dms.unit,
      icon: telemetryDictonary.dms.icon
    }
  }

  public getAlt(): TelemetryElement {
    return {
      parameter: telemetryDictonary.alt.name,
      value: this.alt,
      unit: telemetryDictonary.alt.unit,
      icon: telemetryDictonary.alt.icon
    };
  }

  public getSpeed(): TelemetryElement {
    return {
      parameter: telemetryDictonary.speed.name,
      value: this.speed,
      unit: telemetryDictonary.speed.unit,
      icon: telemetryDictonary.speed.icon
    };
  }

  public getDirection(): TelemetryElement {
    let dir = this.direction;

    if(dir < 0) {
      dir *= -1;
    }

    return {
      parameter: telemetryDictonary.direction.name,
      value: dir,
      unit: telemetryDictonary.direction.unit,
      icon: telemetryDictonary.direction.icon
    };
  }

  public getBearing(): TelemetryElement {
    return {
      parameter: telemetryDictonary.bearing.name,
      value: this.calcBearing(this.direction),
      unit: telemetryDictonary.bearing.unit,
      icon: telemetryDictonary.bearing.icon
    };
  }

  public getDirectionCombined(): TelemetryElement {
    return {
      parameter: telemetryDictonary.direction_combined.name,
      value: this.getBearing().value+' ('+this.getDirection().value+this.getDirection().unit+')',
      unit: telemetryDictonary.direction_combined.unit,
      icon: telemetryDictonary.direction_combined.icon
    }
  }

  public getSatellites(): TelemetryElement {
    return {
      parameter: telemetryDictonary.satellites.name,
      value: this.satellites,
      unit: telemetryDictonary.satellites.unit,
      icon: telemetryDictonary.satellites.icon
    };
  }

  public getTempChip(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_chip.name,
      value: this.temp_chip,
      unit: telemetryDictonary.temp_chip.unit,
      icon: telemetryDictonary.temp_chip.icon
    };
  }

  public getBatteryVoltage(): TelemetryElement {
    return {
      parameter: telemetryDictonary.battery_voltage.name,
      value: this.battery_voltage,
      unit: telemetryDictonary.battery_voltage.unit,
      icon: telemetryDictonary.battery_voltage.icon
    };
  }

  public getCurrentVoltage(): TelemetryElement {
    return {
      parameter: telemetryDictonary.current_voltage.name,
      value: this.current_voltage,
      unit: telemetryDictonary.current_voltage.unit,
      icon: telemetryDictonary.current_voltage.icon
    };
  }

  public getTempCase(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_case.name,
      value: this.temp_case,
      unit: telemetryDictonary.temp_case.unit,
      icon: telemetryDictonary.temp_case.icon
    };
  }

  public getPressure(): TelemetryElement {
    return {
      parameter: telemetryDictonary.pressure.name,
      value: this.pressure,
      unit: telemetryDictonary.pressure.unit,
      icon: telemetryDictonary.pressure.icon
    };
  }

  public getHumidity(): TelemetryElement {
    return {
      parameter: telemetryDictonary.humidity.name,
      value: this.humidity,
      unit: telemetryDictonary.humidity.unit,
      icon: telemetryDictonary.humidity.icon
    };
  }

  public getTempExtern(): TelemetryElement {
    return {
      parameter: telemetryDictonary.temp_extern.name,
      value: this.temp_extern,
      unit: telemetryDictonary.temp_extern.unit,
      icon: telemetryDictonary.temp_extern.icon
    };
  }

  public getTimestamp(): TelemetryElement {
    return {
      parameter: telemetryDictonary.timestamp.name,
      value: this.timestamp,
      unit: telemetryDictonary.timestamp.unit,
      icon: telemetryDictonary.timestamp.icon
    };
  }

  public getTimestampConverted(): TelemetryElement {
    const date = new Date(this.timestamp);

    return {
      parameter: telemetryDictonary.timestamp.name,
      value: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
      unit: telemetryDictonary.timestamp.unit,
      icon: telemetryDictonary.timestamp.icon
    };
  }

  public getType(): TelemetryElement {
    return {
      parameter: telemetryDictonary.type.name,
      value: this.type,
      unit: telemetryDictonary.type.unit,
      icon: telemetryDictonary.type.icon
    };
  }

  public getDistance(start_lat, start_lon): TelemetryElement {
    return {
      parameter: telemetryDictonary.distance.name,
      value: this.calcDistance(start_lat, start_lon, this.lat, this.lon),
      unit: telemetryDictonary.distance.unit,
      icon: telemetryDictonary.distance.icon
    };
  }

  public getWindDirection(): TelemetryElement {
    let windDir = this.direction - 180;

    if(windDir < 0) {
      windDir *= -1;
    }

    return {
      parameter: telemetryDictonary.wind.name,
      value: this.calcBearing(windDir) + ' ('+windDir+telemetryDictonary.direction.unit+')',
      unit: telemetryDictonary.wind.unit,
      icon: telemetryDictonary.wind.icon
    };
  }

  private calcDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p))/2;

    return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  }

  private calcDegreesToDMS(deg: number): string {
    let degrees = Math.floor(deg);
    let minfloat = (deg-degrees)*60;
    let minutes = Math.floor(minfloat);
    let secfloat = (minfloat-minutes)*60;
    let seconds = Math.round(secfloat);

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      degrees++;
      minutes = 0;
    }

    return (""+degrees+"° "+minutes+"' "+seconds+"''");
  }

  private calcBearing(direction: number): string {
    const bearings = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let index = direction;

    if (index < 0) {
      index += 360;
    }

    index = Math.round(index / 45);
    return bearings[index];
  }
}

export interface TelemetryElement {
  parameter: string;
  value: any;
  unit: string;
  icon: string;
}
