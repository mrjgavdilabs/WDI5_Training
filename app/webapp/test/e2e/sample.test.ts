import { wdi5 } from "wdio-ui5-service"
import * as selectors from "./selectors/sampleSelectors"
import Input from "sap/m/Input"

describe("samples", () => {
    it("should log", () => {
        const logger = wdi5.getLogger()
        logger.log("hello world!")
    })

    it("should retrieve a UI5 control", async () => {
        const appLocator = {
            selector: {
                controlType: "sap.m.App",
                viewName: "com.gavdi.wdi5.view.App"
            }
        }

        const app = await browser.asControl(appLocator)
        expect(app).toBeDefined() // Does it exist
    })

    it("should check if the name input is not empty", async () => {
        const sName = await (await browser.asControl<Input>(selectors.nameInput)).getValue(); // getValue() also needs to be awaited
        expect(sName.length).toEqual(0); // Intentional error - what is the answer?
    }) 
})
