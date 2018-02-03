"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TelemetryObject = /** @class */ (function () {
    // init the data
    function TelemetryObject(dbData) {
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
        dbData ? this.type = dbData.type : this.type = "";
    }
    TelemetryObject.prototype.getClass = function () {
        return {
            parameter: "Klasse",
            value: this.class,
            unit: "",
        };
    };
    TelemetryObject.prototype.getIndex = function () {
        return {
            parameter: "Index",
            value: this.index,
            unit: "",
        };
    };
    TelemetryObject.prototype.getChannel = function () {
        return {
            parameter: "Kanal",
            value: this.channel,
            unit: "",
        };
    };
    TelemetryObject.prototype.getPayload = function () {
        return {
            parameter: "Payload",
            value: this.payload,
            unit: "",
        };
    };
    TelemetryObject.prototype.getPackageCounter = function () {
        return {
            parameter: "Paketnummer",
            value: this.package_counter,
            unit: "",
        };
    };
    TelemetryObject.prototype.getTime = function () {
        return {
            parameter: "Zeit (Gesendet)",
            value: this.time,
            unit: "",
        };
    };
    TelemetryObject.prototype.getLat = function () {
        return {
            parameter: "Breitengrad",
            value: this.lat,
            unit: "°",
        };
    };
    TelemetryObject.prototype.getLon = function () {
        return {
            parameter: "Längengrad",
            value: this.lon,
            unit: "°",
        };
    };
    TelemetryObject.prototype.getAlt = function () {
        return {
            parameter: "Höhe",
            value: this.alt,
            unit: "m",
        };
    };
    TelemetryObject.prototype.getSpeed = function () {
        return {
            parameter: "Geschwindigkeit",
            value: this.speed,
            unit: "km/h",
        };
    };
    TelemetryObject.prototype.getDirection = function () {
        return {
            parameter: "Richtung",
            value: this.direction,
            unit: "°",
        };
    };
    TelemetryObject.prototype.getSatellites = function () {
        return {
            parameter: "Satelliten",
            value: this.satellites,
            unit: "",
        };
    };
    TelemetryObject.prototype.getTempChip = function () {
        return {
            parameter: "Temperatur PI",
            value: this.temp_chip,
            unit: "°C",
        };
    };
    TelemetryObject.prototype.getBatteryVoltage = function () {
        return {
            parameter: "Akku Sapnnung",
            value: this.battery_voltage,
            unit: "V",
        };
    };
    TelemetryObject.prototype.getCurrentVoltage = function () {
        return {
            parameter: "Aktuelle Spannung",
            value: this.current_voltage,
            unit: "V",
        };
    };
    TelemetryObject.prototype.getTempCase = function () {
        return {
            parameter: "Temperatur Gehäuse",
            value: this.temp_case,
            unit: "°C",
        };
    };
    TelemetryObject.prototype.getPressure = function () {
        return {
            parameter: "Luftdruck",
            value: this.pressure,
            unit: "hPA",
        };
    };
    TelemetryObject.prototype.getHumidity = function () {
        return {
            parameter: "Luftfeuchtigkeit",
            value: this.humidity,
            unit: "%",
        };
    };
    TelemetryObject.prototype.getTempExtern = function () {
        return {
            parameter: "Temperatur Außen",
            value: this.temp_extern,
            unit: "°C",
        };
    };
    TelemetryObject.prototype.getTimestamp = function () {
        return {
            parameter: "Zeitstempel",
            value: this.timestamp,
            unit: "",
        };
    };
    TelemetryObject.prototype.getTimestampConverted = function () {
        var date = new Date(this.timestamp);
        return {
            parameter: "Zeit (Empfangen)",
            value: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            unit: "",
        };
    };
    TelemetryObject.prototype.getType = function () {
        return {
            parameter: "Typ",
            value: this.type,
            unit: "",
        };
    };
    return TelemetryObject;
}());
exports.TelemetryObject = TelemetryObject;
//# sourceMappingURL=TelemetryObject.js.map