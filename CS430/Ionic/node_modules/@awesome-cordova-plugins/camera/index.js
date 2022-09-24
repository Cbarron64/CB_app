var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
export var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
export var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
export var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
export var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
export var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
export var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);
    function CameraOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    CameraOriginal.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = "navigator.camera";
    CameraOriginal.repo = "https://github.com/apache/cordova-plugin-camera";
    CameraOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return CameraOriginal;
}(AwesomeCordovaNativePlugin));
var Camera = new CameraOriginal();
export { Camera };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FtZXJhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBc0Y1RixNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLDZEQUFZLENBQUE7SUFDWiw2REFBUSxDQUFBO0lBQ1IsaUVBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsK0NBQVEsQ0FBQTtJQUNSLDZDQUFHLENBQUE7QUFDTCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLCtDQUFXLENBQUE7SUFDWCwyQ0FBSyxDQUFBO0lBQ0wsaURBQVEsQ0FBQTtBQUNWLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IseUVBQWdCLENBQUE7SUFDaEIsNkRBQU0sQ0FBQTtJQUNOLCtFQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFNWDtBQU5ELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFZLENBQUE7SUFDWiw2RUFBVSxDQUFBO0lBQ1YsNkVBQVUsQ0FBQTtJQUNWLCtFQUFXLENBQUE7SUFDWCwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCOztJQXFEMkIsMEJBQTBCOzs7UUFDcEQ7O1dBRUc7UUFDSCxxQkFBZSxHQUFHO1lBQ2hCLGdLQUFnSztZQUNoSyxRQUFRLEVBQUUsQ0FBQztZQUNYLDRFQUE0RTtZQUM1RSxRQUFRLEVBQUUsQ0FBQztZQUNYLDBEQUEwRDtZQUMxRCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGtCQUFZLEdBQUc7WUFDYixnQ0FBZ0M7WUFDaEMsSUFBSSxFQUFFLENBQUM7WUFDUCwrQkFBK0I7WUFDL0IsR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVix3R0FBd0c7WUFDeEcsT0FBTyxFQUFFLENBQUM7WUFDVixzREFBc0Q7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFDUiwyQ0FBMkM7WUFDM0MsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRztZQUNsQiwyRUFBMkU7WUFDM0UsWUFBWSxFQUFFLENBQUM7WUFDZiwrQkFBK0I7WUFDL0IsTUFBTSxFQUFFLENBQUM7WUFDVCw4RUFBOEU7WUFDOUUsZUFBZSxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUVGOztXQUVHO1FBQ0gsMkJBQXFCLEdBQUc7WUFDdEIsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUM7WUFDZCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGVBQVMsR0FBRztZQUNWLGlDQUFpQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztZQUNQLGtDQUFrQztZQUNsQyxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7OztJQVdGLDJCQUFVLGFBQUMsT0FBdUI7SUFhbEMsd0JBQU87Ozs7OztpQkF4UVQ7RUE4SzRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFPcHRpb25zIHtcbiAgLyoqIFBpY3R1cmUgcXVhbGl0eSBpbiByYW5nZSAwLTEwMC4gRGVmYXVsdCBpcyA1MCAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGVzdGluYXRpb25UeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxuICAgKiAgICAgIERBVEFfVVJMIDogMCwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nIChEQVRBX1VSTCBjYW4gYmUgdmVyeSBtZW1vcnkgaW50ZW5zaXZlIGFuZCBjYXVzZSBhcHAgY3Jhc2hlcyBvciBvdXQgb2YgbWVtb3J5IGVycm9ycy4gVXNlIEZJTEVfVVJJIG9yIE5BVElWRV9VUkkgaWYgcG9zc2libGUpLFxuICAgKiAgICAgIEZJTEVfVVJJIDogMSwgICBSZXR1cm4gaW1hZ2UgZmlsZSBVUkksXG4gICAqICAgICAgTkFUSVZFX1VSSSA6IDIgIFJldHVybiBpbWFnZSBuYXRpdmUgVVJJXG4gICAqICAgICAgICAgIChlLmcuLCBhc3NldHMtbGlicmFyeTovLyBvbiBpT1Mgb3IgY29udGVudDovLyBvbiBBbmRyb2lkKVxuICAgKi9cbiAgZGVzdGluYXRpb25UeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIHBpY3R1cmUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLiBEZWZhdWx0IGlzIENBTUVSQS5cbiAgICogICAgICBQSE9UT0xJQlJBUlkgOiAwLFxuICAgKiAgICAgIENBTUVSQSA6IDEsXG4gICAqICAgICAgU0FWRURQSE9UT0FMQlVNIDogMlxuICAgKi9cbiAgc291cmNlVHlwZT86IG51bWJlcjtcbiAgLyoqIEFsbG93IHNpbXBsZSBlZGl0aW5nIG9mIGltYWdlIGJlZm9yZSBzZWxlY3Rpb24uICovXG4gIGFsbG93RWRpdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIHJldHVybmVkIGltYWdlIGZpbGUncyBlbmNvZGluZy5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRW5jb2RpbmdUeXBlLiBEZWZhdWx0IGlzIEpQRUdcbiAgICogICAgICBKUEVHIDogMCAgICBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlXG4gICAqICAgICAgUE5HIDogMSAgICAgUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlXG4gICAqL1xuICBlbmNvZGluZ1R5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBXaWR0aCBpbiBwaXhlbHMgdG8gc2NhbGUgaW1hZ2UuIE11c3QgYmUgdXNlZCB3aXRoIHRhcmdldEhlaWdodC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEhlaWdodCBpbiBwaXhlbHMgdG8gc2NhbGUgaW1hZ2UuIE11c3QgYmUgdXNlZCB3aXRoIHRhcmdldFdpZHRoLlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgdHlwZSBvZiBtZWRpYSB0byBzZWxlY3QgZnJvbS4gT25seSB3b3JrcyB3aGVuIFBpY3R1cmVTb3VyY2VUeXBlXG4gICAqIGlzIFBIT1RPTElCUkFSWSBvciBTQVZFRFBIT1RPQUxCVU0uIERlZmluZWQgaW4gQ2FtZXJhLk1lZGlhVHlwZVxuICAgKiAgICAgIFBJQ1RVUkU6IDAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC5cbiAgICogICAgICAgICAgV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlXG4gICAqICAgICAgVklERU86IDEgICAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBXSUxMIEFMV0FZUyBSRVRVUk4gRklMRV9VUklcbiAgICogICAgICBBTExNRURJQSA6IDIgICAgYWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzXG4gICAqL1xuICBtZWRpYVR5cGU/OiBudW1iZXI7XG4gIC8qKiBSb3RhdGUgdGhlIGltYWdlIHRvIGNvcnJlY3QgZm9yIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgZGV2aWNlIGR1cmluZyBjYXB0dXJlLiAqL1xuICBjb3JyZWN0T3JpZW50YXRpb24/OiBib29sZWFuO1xuICAvKiogU2F2ZSB0aGUgaW1hZ2UgdG8gdGhlIHBob3RvIGFsYnVtIG9uIHRoZSBkZXZpY2UgYWZ0ZXIgY2FwdHVyZS4gKi9cbiAgc2F2ZVRvUGhvdG9BbGJ1bT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgKGZyb250LSBvciBiYWNrLWZhY2luZykuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRpcmVjdGlvbi4gRGVmYXVsdCBpcyBCQUNLLlxuICAgKiAgICAgIEJBQ0s6IDBcbiAgICogICAgICBGUk9OVDogMVxuICAgKi9cbiAgY2FtZXJhRGlyZWN0aW9uPzogbnVtYmVyO1xuICAvKiogaU9TLW9ubHkgb3B0aW9ucyB0aGF0IHNwZWNpZnkgcG9wb3ZlciBsb2NhdGlvbiBpbiBpUGFkLiBEZWZpbmVkIGluIENhbWVyYVBvcG92ZXJPcHRpb25zLiAqL1xuICBwb3BvdmVyT3B0aW9ucz86IENhbWVyYVBvcG92ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIGlPUy1vbmx5IHBhcmFtZXRlcnMgdGhhdCBzcGVjaWZ5IHRoZSBhbmNob3IgZWxlbWVudCBsb2NhdGlvbiBhbmQgYXJyb3cgZGlyZWN0aW9uXG4gKiBvZiB0aGUgcG9wb3ZlciB3aGVuIHNlbGVjdGluZyBpbWFnZXMgZnJvbSBhbiBpUGFkJ3MgbGlicmFyeSBvciBhbGJ1bS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3BvdmVyT3B0aW9ucyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0aGUgYXJyb3cgb24gdGhlIHBvcG92ZXIgc2hvdWxkIHBvaW50LiBEZWZpbmVkIGluIENhbWVyYS5Qb3BvdmVyQXJyb3dEaXJlY3Rpb25cbiAgICogTWF0Y2hlcyBpT1MgVUlQb3BvdmVyQXJyb3dEaXJlY3Rpb24gY29uc3RhbnRzLlxuICAgKiAgICAgIEFSUk9XX1VQIDogMSxcbiAgICogICAgICBBUlJPV19ET1dOIDogMixcbiAgICogICAgICBBUlJPV19MRUZUIDogNCxcbiAgICogICAgICBBUlJPV19SSUdIVCA6IDgsXG4gICAqICAgICAgQVJST1dfQU5ZIDogMTVcbiAgICovXG4gIGFycm93RGlyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIERlc3RpbmF0aW9uVHlwZSB7XG4gIERBVEFfVVJMID0gMCxcbiAgRklMRV9VUkwsXG4gIE5BVElWRV9VUkksXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkcsXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XG4gIFBJQ1RVUkUgPSAwLFxuICBWSURFTyxcbiAgQUxMTUVESUEsXG59XG5cbmV4cG9ydCBlbnVtIFBpY3R1cmVTb3VyY2VUeXBlIHtcbiAgUEhPVE9MSUJSQVJZID0gMCxcbiAgQ0FNRVJBLFxuICBTQVZFRFBIT1RPQUxCVU0sXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWSxcbn1cblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgQkFDSyA9IDAsXG4gIEZST05ULFxufVxuXG4vKipcbiAqIEBuYW1lIENhbWVyYVxuICogQHByZW1pZXIgY2FtZXJhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRha2UgYSBwaG90byBvciBjYXB0dXJlIHZpZGVvLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbWVyYWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEpLlxuICpcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxuICogYGBgeG1sXG4gKiA8Y29uZmlnLWZpbGUgcGFyZW50PVwiTlNDYW1lcmFVc2FnZURlc2NyaXB0aW9uXCIgcGxhdGZvcm09XCJpb3NcIiB0YXJnZXQ9XCIqLUluZm8ucGxpc3RcIj5cbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cbiAqIDwvY29uZmlnLWZpbGU+XG4gKiBgYGBcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FtZXJhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYW1lcmE6IENhbWVyYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XG4gKiAgIHF1YWxpdHk6IDEwMCxcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXG4gKiAgIG1lZGlhVHlwZTogdGhpcy5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkVcbiAqIH1cbiAqXG4gKiB0aGlzLmNhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbnMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XG4gKiAgbGV0IGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAvLyBIYW5kbGUgZXJyb3JcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FtZXJhT3B0aW9uc1xuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY2FtZXJhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRW5jb2RpbmdUeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXG4gICAgSlBFRzogMCxcbiAgICAvKiogUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlICovXG4gICAgUE5HOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgTWVkaWFUeXBlID0ge1xuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXG4gICAgUElDVFVSRTogMCxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cbiAgICBWSURFTzogMSxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzICovXG4gICAgQUxMTUVESUE6IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XG4gICAgQVJST1dfVVA6IDEsXG4gICAgQVJST1dfRE9XTjogMixcbiAgICBBUlJPV19MRUZUOiA0LFxuICAgIEFSUk9XX1JJR0hUOiA4LFxuICAgIEFSUk9XX0FOWTogMTUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBEaXJlY3Rpb24gPSB7XG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXG4gICAgQkFDSzogMCxcbiAgICAvKiogVXNlIHRoZSBmcm9udC1mYWNpbmcgY2FtZXJhICovXG4gICAgRlJPTlQ6IDEsXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGNsZWFudXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==