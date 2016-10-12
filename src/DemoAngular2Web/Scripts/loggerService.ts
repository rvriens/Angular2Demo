import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    public logs: string[];
    logInfo(msg: any) {
        console.log(msg);
    }
    logError(msg: any) {
        console.error(msg);
    }
}


@Injectable()
export class DateLoggerService extends LoggerService implements MinimalLogger {
    logInfo(msg: any) { super.logInfo(this.stamp(msg)); }
    logDebug(msg: any) { super.logInfo(this.stamp(msg)); }
    logError(msg: any) { super.logError(this.stamp(msg)); }

    private stamp(msg: any) { return msg + ' at ' + new Date(); }

}



@Injectable()
export abstract class MinimalLogger {
    logInfo: (msg: string) => void;
    logs: string[];
}


