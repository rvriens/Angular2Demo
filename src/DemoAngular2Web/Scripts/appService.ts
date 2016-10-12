import { Injectable } from "@angular/core";
import {MinimalLogger} from './loggerService';

@Injectable()
export class AppService {
    constructor(private logger: MinimalLogger) { }

    getInfo(): string {
        this.logger.logInfo("hi");
        return "tada";
    }
}



