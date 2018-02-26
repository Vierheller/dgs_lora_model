"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageObject = /** @class */ (function () {
    // init the data
    function ImageObject(dbData) {
        dbData ? this.timestamp = dbData.timestamp : this.timestamp = 0;
        dbData ? this.type = dbData.type : this.type = 'image';
        dbData ? this.filename = dbData.filename : this.filename = '';
        dbData ? this.image_base64 = dbData.image_base64 : this.image_base64 = '';
        dbData ? this.image_counter = dbData.image_counter : this.image_counter = 0;
    }
    return ImageObject;
}());
exports.ImageObject = ImageObject;
//# sourceMappingURL=ImageObject.js.map