import BaseController from "./BaseController";

/**
 * @namespace com.gavdi.wdi5.controller
 */
export default class Main extends BaseController {
	public navToSecond(): void {
		this.navTo("second");
	}
}
