import { Injectable } from '@angular/core';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()

// Storage for mobie app settings and web session storage
export class StorageService {

  constructor() { }

  getData(key){
   return appSettings.getString(key);
  }

  setData(key,data){
    appSettings.setString(key, data);

  }
  clear(){
      appSettings.clear();
  }
}