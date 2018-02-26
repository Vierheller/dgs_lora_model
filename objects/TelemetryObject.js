"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telemetryDic_1 = require("../config/telemetryDic");
var TelemetryObject = /** @class */ (function () {
    // init the data
    function TelemetryObject(dbData) {
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
    TelemetryObject.prototype.getClass = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.class.name,
            value: this.class,
            unit: telemetryDic_1.telemetryDictonary.class.unit,
            icon: telemetryDic_1.telemetryDictonary.class.icon
        };
    };
    TelemetryObject.prototype.getIndex = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.index.name,
            value: this.index,
            unit: telemetryDic_1.telemetryDictonary.index.unit,
            icon: telemetryDic_1.telemetryDictonary.index.icon
        };
    };
    TelemetryObject.prototype.getChannel = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.channel.name,
            value: this.channel,
            unit: telemetryDic_1.telemetryDictonary.channel.unit,
            icon: telemetryDic_1.telemetryDictonary.channel.icon
        };
    };
    TelemetryObject.prototype.getPayload = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.payload.name,
            value: this.payload,
            unit: telemetryDic_1.telemetryDictonary.payload.unit,
            icon: telemetryDic_1.telemetryDictonary.payload.icon
        };
    };
    TelemetryObject.prototype.getPackageCounter = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.package_counter.name,
            value: this.package_counter,
            unit: telemetryDic_1.telemetryDictonary.package_counter.unit,
            icon: telemetryDic_1.telemetryDictonary.package_counter.icon
        };
    };
    TelemetryObject.prototype.getTime = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.time.name,
            value: this.time,
            unit: telemetryDic_1.telemetryDictonary.time.unit,
            icon: telemetryDic_1.telemetryDictonary.time.icon
        };
    };
    TelemetryObject.prototype.getLat = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.lat.name,
            value: this.lat,
            unit: telemetryDic_1.telemetryDictonary.lat.unit,
            icon: telemetryDic_1.telemetryDictonary.lat.icon
        };
    };
    TelemetryObject.prototype.getLon = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.lon.name,
            value: this.lon,
            unit: telemetryDic_1.telemetryDictonary.lon.unit,
            icon: telemetryDic_1.telemetryDictonary.lon.icon
        };
    };
    // convert lat and lon to degree, minute, second format
    TelemetryObject.prototype.getDMS = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.dms.name,
            value: this.calcDegreesToDMS(this.lat) + ' N' + ' ' + this.calcDegreesToDMS(this.lon) + ' E',
            unit: telemetryDic_1.telemetryDictonary.dms.unit,
            icon: telemetryDic_1.telemetryDictonary.dms.icon
        };
    };
    TelemetryObject.prototype.getAlt = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.alt.name,
            value: this.alt,
            unit: telemetryDic_1.telemetryDictonary.alt.unit,
            icon: telemetryDic_1.telemetryDictonary.alt.icon
        };
    };
    TelemetryObject.prototype.getSpeed = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.speed.name,
            value: this.speed,
            unit: telemetryDic_1.telemetryDictonary.speed.unit,
            icon: telemetryDic_1.telemetryDictonary.speed.icon
        };
    };
    TelemetryObject.prototype.getDirection = function () {
        var dir = this.direction;
        if (dir < 0) {
            dir *= -1;
        }
        return {
            parameter: telemetryDic_1.telemetryDictonary.direction.name,
            value: dir,
            unit: telemetryDic_1.telemetryDictonary.direction.unit,
            icon: telemetryDic_1.telemetryDictonary.direction.icon
        };
    };
    TelemetryObject.prototype.getBearing = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.bearing.name,
            value: this.calcBearing(this.direction),
            unit: telemetryDic_1.telemetryDictonary.bearing.unit,
            icon: telemetryDic_1.telemetryDictonary.bearing.icon
        };
    };
    TelemetryObject.prototype.getDirectionCombined = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.direction_combined.name,
            value: this.getBearing().value + ' (' + this.getDirection().value + this.getDirection().unit + ')',
            unit: telemetryDic_1.telemetryDictonary.direction_combined.unit,
            icon: telemetryDic_1.telemetryDictonary.direction_combined.icon
        };
    };
    TelemetryObject.prototype.getSatellites = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.satellites.name,
            value: this.satellites,
            unit: telemetryDic_1.telemetryDictonary.satellites.unit,
            icon: telemetryDic_1.telemetryDictonary.satellites.icon
        };
    };
    TelemetryObject.prototype.getTempChip = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.temp_chip.name,
            value: this.temp_chip,
            unit: telemetryDic_1.telemetryDictonary.temp_chip.unit,
            icon: telemetryDic_1.telemetryDictonary.temp_chip.icon
        };
    };
    TelemetryObject.prototype.getBatteryVoltage = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.battery_voltage.name,
            value: this.battery_voltage,
            unit: telemetryDic_1.telemetryDictonary.battery_voltage.unit,
            icon: telemetryDic_1.telemetryDictonary.battery_voltage.icon
        };
    };
    TelemetryObject.prototype.getCurrentVoltage = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.current_voltage.name,
            value: this.current_voltage,
            unit: telemetryDic_1.telemetryDictonary.current_voltage.unit,
            icon: telemetryDic_1.telemetryDictonary.current_voltage.icon
        };
    };
    TelemetryObject.prototype.getTempCase = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.temp_case.name,
            value: this.temp_case,
            unit: telemetryDic_1.telemetryDictonary.temp_case.unit,
            icon: telemetryDic_1.telemetryDictonary.temp_case.icon
        };
    };
    TelemetryObject.prototype.getPressure = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.pressure.name,
            value: this.pressure,
            unit: telemetryDic_1.telemetryDictonary.pressure.unit,
            icon: telemetryDic_1.telemetryDictonary.pressure.icon
        };
    };
    TelemetryObject.prototype.getHumidity = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.humidity.name,
            value: this.humidity,
            unit: telemetryDic_1.telemetryDictonary.humidity.unit,
            icon: telemetryDic_1.telemetryDictonary.humidity.icon
        };
    };
    TelemetryObject.prototype.getTempExtern = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.temp_extern.name,
            value: this.temp_extern,
            unit: telemetryDic_1.telemetryDictonary.temp_extern.unit,
            icon: telemetryDic_1.telemetryDictonary.temp_extern.icon
        };
    };
    TelemetryObject.prototype.getTimestamp = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.timestamp.name,
            value: this.timestamp,
            unit: telemetryDic_1.telemetryDictonary.timestamp.unit,
            icon: telemetryDic_1.telemetryDictonary.timestamp.icon
        };
    };
    TelemetryObject.prototype.getTimestampConverted = function () {
        var date = new Date(this.timestamp);
        return {
            parameter: telemetryDic_1.telemetryDictonary.timestamp.name,
            value: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            unit: telemetryDic_1.telemetryDictonary.timestamp.unit,
            icon: telemetryDic_1.telemetryDictonary.timestamp.icon
        };
    };
    TelemetryObject.prototype.getType = function () {
        return {
            parameter: telemetryDic_1.telemetryDictonary.type.name,
            value: this.type,
            unit: telemetryDic_1.telemetryDictonary.type.unit,
            icon: telemetryDic_1.telemetryDictonary.type.icon
        };
    };
    TelemetryObject.prototype.getDistance = function (start_lat, start_lon) {
        return {
            parameter: telemetryDic_1.telemetryDictonary.distance.name,
            value: this.calcDistance(start_lat, start_lon, this.lat, this.lon),
            unit: telemetryDic_1.telemetryDictonary.distance.unit,
            icon: telemetryDic_1.telemetryDictonary.distance.icon
        };
    };
    TelemetryObject.prototype.getRiseRate = function (alt_old, time_old) {
        return {
            parameter: telemetryDic_1.telemetryDictonary.rise.name,
            value: this.calcRiseRate(alt_old, time_old),
            unit: telemetryDic_1.telemetryDictonary.rise.unit,
            icon: telemetryDic_1.telemetryDictonary.rise.icon
        };
    };
    TelemetryObject.prototype.getWindDirection = function () {
        var windDir = this.direction - 180;
        if (windDir < 0) {
            windDir *= -1;
        }
        return {
            parameter: telemetryDic_1.telemetryDictonary.wind.name,
            value: this.calcBearing(windDir) + ' (' + windDir + telemetryDic_1.telemetryDictonary.direction.unit + ')',
            unit: telemetryDic_1.telemetryDictonary.wind.unit,
            icon: telemetryDic_1.telemetryDictonary.wind.icon
        };
    };
    TelemetryObject.prototype.calcDistance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    };
    TelemetryObject.prototype.calcDegreesToDMS = function (deg) {
        var degrees = Math.floor(deg);
        var minfloat = (deg - degrees) * 60;
        var minutes = Math.floor(minfloat);
        var secfloat = (minfloat - minutes) * 60;
        var seconds = Math.round(secfloat);
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            degrees++;
            minutes = 0;
        }
        return ("" + degrees + "° " + minutes + "' " + seconds + "''");
    };
    TelemetryObject.prototype.calcBearing = function (direction) {
        var bearings = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        var index = direction;
        if (index < 0) {
            index += 360;
        }
        index = Math.round(index / 45);
        return bearings[index];
    };
    TelemetryObject.prototype.calcRiseRate = function (alt_old, time_old) {
        var altDiff = alt_old - this.alt;
        var timeDiff = this.calcDateFromTimeString(time_old).getTime() - this.calcDateFromTimeString(this.time).getTime();
        timeDiff = timeDiff / 1000; // convert to seconds
        if (!timeDiff) {
            return 0;
        }
        return +(altDiff / timeDiff).toFixed(2);
    };
    TelemetryObject.prototype.calcDateFromTimeString = function (time_string) {
        var date = new Date();
        var splitDate = time_string.split(':', 3);
        date.setHours(+splitDate[0]);
        date.setMinutes(+splitDate[1]);
        date.setSeconds(+splitDate[2]);
        return date;
    };
    return TelemetryObject;
}());
exports.TelemetryObject = TelemetryObject;
//# sourceMappingURL=TelemetryObject.js.map