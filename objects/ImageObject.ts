import {Image} from '../Image';

export class ImageObject implements Image {
  public timestamp: number;
  public type: string;
  public filename: string;
  public image_base64: string;
  public image_counter: number;

  // init the data
  constructor(dbData?: Image) {
    dbData ? this.timestamp = dbData.timestamp : this.timestamp = 0;
    dbData ? this.type = dbData.type : this.type = 'image';
    dbData ? this.filename = dbData.filename : this.filename = '';
    dbData ? this.image_base64 = dbData.image_base64 : this.image_base64 = '';
    dbData ? this.image_counter = dbData.image_counter : this.image_counter = 0;
  }
}
