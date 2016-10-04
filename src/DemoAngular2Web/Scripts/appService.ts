import { Injectable } from "angular2/core";
import {MinimalLogger} from './loggerService';

@Injectable()
export class AppService {
    constructor(private logger: MinimalLogger) { }

    getInfo(): string {
        this.logger.logInfo("hi");
        return "tada";
    }
}



