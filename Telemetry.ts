export interface TelemetryRaw{
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

export interface TelemetryInternal{
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

    timestamp:number;
    type:string;
}