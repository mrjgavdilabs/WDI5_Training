import { wdi5Selector } from "wdio-ui5-service";

export const nameInput: wdi5Selector = {
    selector: {
        id: "nameInput",
        viewName: "com.gavdi.wdi5.view.Main"
    }
}

export const pressMeBtn: wdi5Selector = {
    selector: {
        controlType: "sap.m.Button",
        viewName: "com.gavdi.wdi5.view.Main",
        properties: {
            "text": "Press me!"
        }
    }
}

export const illustration: wdi5Selector = {
    selector: {
       controlType: "sap.m.Illustration",
       viewName: "com.gavdi.wdi5.view.Second",
       properties: {
           type: "SuccessHighFive"
       }

   }
}