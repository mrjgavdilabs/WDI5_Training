import { wdi5 } from "wdio-ui5-service"
import * as selectors from "./selectors/sampleSelectors"
import Input from "sap/m/Input"
import Button from "sap/m/Button"

describe("samples", () => {
    it("should log", () => {
        const logger = wdi5.getLogger()
        logger.log("hello world!")
    })

    it("should retrieve a UI5 control", async () => {
        const appLocator = {
            selector: {
                controlType: "sap.m.Page",
                viewName: "com.gavdi.wdi5.view.Main"
            }
        }

        const app = await browser.asControl(appLocator)
        expect(app).toBeDefined() // Does it exist
    })

    it("should check if the name input is not empty", async () => {
        const sName = await (await browser.asControl<Input>(selectors.nameInput)).getValue(); // getValue() also needs to be awaited
        expect(sName.length).toBeGreaterThan(0); // Intentional error - what is the answer?
    }) 
})

describe("Navigate to second view", () => {
    it("shoul navigate to view 2", async () => {
        const oBtn = await browser.asControl<Button>(selectors.pressMeBtn);
        browser.screenshot("Before-nav");
        await oBtn.press();

        const oIllu = await browser.asControl(selectors.illustration);
        browser.screenshot("After-nav");
        expect(oIllu).toBeDefined();
    })
})


// TODO:
// 
// 1. Verify that the 'mystery' Button navigates to a new view
// 
// 2. Verify that the PopOver includues the message "Hello World!"
// 
// Tip: Use the UI5 Journey Recorder to collect correct Selectors