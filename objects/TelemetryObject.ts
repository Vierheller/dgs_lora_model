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
  public cda: number;
  public pred_lat: number;
  public pred_lng: number;
  public pred_landing_speed: number;
  public pred_time_to_landing: number;
  public type: string;

  // init the data
  private constructor(dbData?: TelemetryInternal) {
    dbData.index ? this.index = dbData.index : this.index = 0;
    dbData.class ? this.class = dbData.class : this.class = '';
    dbData.channel ? this.channel = dbData.channel : this.channel = 0;
    dbData.payload ? this.payload = dbData.payload : this.payload = '';
    dbData.package_counter ? this.package_counter = dbData.package_counter : this.package_counter = 0;
    dbData.time ? this.time = dbData.time : this.time = '';
    dbData.lat ? this.lat = dbData.lat : this.lat = 0;
    dbData.lon ? this.lon = dbData.lon : this.lon = 0;
    dbData.alt ? this.alt = dbData.alt : this.alt = 0;
    dbData.speed ? this.speed = dbData.speed : this.speed = 0;
    dbData.direction ? this.direction = dbData.direction : this.direction = 0;
    dbData.satellites ? this.satellites = dbData.satellites : this.satellites = 0;
    dbData.temp_chip ? this.temp_chip = dbData.temp_chip : this.temp_chip = 0;
    dbData.battery_voltage ? this.battery_voltage = dbData.battery_voltage : this.battery_voltage = 0;
    dbData.current_voltage ? this.current_voltage = dbData.current_voltage : this.current_voltage = 0;
    dbData.temp_case ? this.temp_case = dbData.temp_case : this.temp_case = 0;
    dbData.pressure ? this.pressure = dbData.pressure : this.pressure = 0;
    dbData.humidity ? this.humidity = dbData.humidity : this.humidity = 0;
    dbData.temp_extern ? this.temp_extern = dbData.temp_extern : this.temp_extern = 0;
    dbData.timestamp ? this.timestamp = dbData.timestamp : this.timestamp = 0;
    dbData.cda ? this.cda = dbData.cda : this.cda = 0.0;
    dbData.pred_lat ? this.pred_lat = dbData.pred_lat : this.pred_lat = 0.0;
    dbData.pred_lng ? this.pred_lng = dbData.pred_lng : this.pred_lng = 0.0;
    dbData.speed ? this.pred_landing_speed = dbData.pred_landing_speed : this.pred_landing_speed = 0;
    dbData.pred_time_to_landing ? this.pred_time_to_landing = dbData.pred_time_to_landing : this.pred_time_to_landing = -1;
    dbData.type ? this.type = dbData.type : this.type = 'telemetry';
  }

  public static createTelemetryObject(dbData: TelemetryInternal) {
    if (!dbData) {
      throw new Error('Data must not be null');
    }

    return new TelemetryObject(dbData);
  }

  private createTelemetryElement(property: any, value: any): TelemetryElement {
    return {
      parameter: property.name,
      value: value,
      unit: property.unit,
      icon: property.icon
    };
  }

  public getClass(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.class, this.class);
  }

  public getIndex(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.index, this.index);
  }

  public getChannel(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.channel, this.channel);
  }

  public getPayload(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.payload, this.payload);
  }

  public getPackageCounter(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.package_counter, this.package_counter);
  }

  public getTime(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.time, this.time);
  }

  public getLat(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.lat, this.lat);
  }

  public getLon(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.lon, this.lon);
  }

  public getDMS(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.dms,
      this.calcDegreesToDMS(this.lat) + ' N' + ' ' + this.calcDegreesToDMS(this.lon) + ' E');
  }

  public getAlt(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.alt, this.alt);
  }

  public getSpeed(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.speed, this.speed);
  }

  public getDirection(): TelemetryElement {
    let dir = this.direction;

    if (dir < 0) {
      dir *= -1;
    }
    return this.createTelemetryElement(telemetryDictonary.direction, dir);
  }

  public getBearing(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.bearing, this.calcBearing(this.direction));
  }

  public getDirectionCombined(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.direction_combined,
      this.getBearing().value + ' (' + this.getDirection().value + this.getDirection().unit + ')');
  }

  public getSatellites(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.satellites, this.satellites);
  }

  public getTempChip(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.temp_chip, this.temp_chip);
  }

  public getBatteryVoltage(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.battery_voltage, this.battery_voltage);
  }

  public getCurrentVoltage(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.current_voltage, this.current_voltage);
  }

  public getTempCase(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.temp_case, this.temp_case);
  }

  public getPressure(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pressure, this.pressure);
  }

  public getHumidity(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.humidity, this.humidity);
  }

  public getTempExtern(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.temp_extern, this.temp_extern);
  }

  public getTimestamp(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.timestamp, this.timestamp);
  }

  public getTimestampConverted(): TelemetryElement {
    const date = new Date(this.timestamp);

    return this.createTelemetryElement(telemetryDictonary.timestamp, date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
  }

  public getType(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.type, this.type);
  }

  public getDistance(start_lat: number, start_lon: number): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.distance, this.calcDistance(start_lat, start_lon, this.lat, this.lon));
  }

  public getRiseRate(alt_old: number, time_old: string): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.rise, this.calcRiseRate(alt_old, time_old));
  }

  public getCDA(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.cda, this.cda);
  }

  public getPredictedLatitude(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pred_lat, this.pred_lat);
  }

  public getPredictedLongitude(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pred_lng, this.pred_lng);
  }

  public getPredictedLandingSpeed(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pred_landing_speed, this.pred_landing_speed);
  }

  public getPredictedTimeToLanding(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pred_time_to_landing, this.pred_time_to_landing);
  }

  public getPredictedDMS(): TelemetryElement {
    return this.createTelemetryElement(telemetryDictonary.pred_dms,
      this.calcDegreesToDMS(this.pred_lat) + ' N' + ' ' + this.calcDegreesToDMS(this.pred_lng) + ' E');
  }

  public getWindDirection(): TelemetryElement {
    let windDir = this.direction - 180;

    if (windDir < 0) {
      windDir *= -1;
    }

    return this.createTelemetryElement(telemetryDictonary.wind,  this.calcBearing(windDir)
      + ' (' + windDir + telemetryDictonary.direction.unit + ')');
  }

  private calcDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  }

  private calcDegreesToDMS(deg: number): string {
    let degrees = Math.floor(deg);
    const minfloat = (deg - degrees) * 60;
    let minutes = Math.floor(minfloat);
    const secfloat = (minfloat - minutes) * 60;
    let seconds = Math.round(secfloat);

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      degrees++;
      minutes = 0;
    }

    return ('' + degrees + '° ' + minutes + '\' ' + seconds + '\'\'');
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

  private calcRiseRate(alt_old: number, time_old: string): number {
    const altDiff: number = alt_old - this.alt;
    let timeDiff: number = this.calcDateFromTimeString(time_old).getTime() - this.calcDateFromTimeString(this.time).getTime();
    timeDiff = timeDiff / 1000;   // convert to seconds

    if (!timeDiff) {
      return 0;
    }

    return +(altDiff / timeDiff).toFixed(2);
  }

  private calcDateFromTimeString(time_string: string): Date {
    const date = new Date();
    const splitDate = time_string.split(':', 3);

    date.setHours(+splitDate[0]);
    date.setMinutes(+splitDate[1]);
    date.setSeconds(+splitDate[2]);

    return date;
  }
}

export interface TelemetryElement {
  parameter: string;
  value: any;
  unit: string;
  icon: string;
}
