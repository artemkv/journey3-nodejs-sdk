export function config(persistence: any, rest: any, getNowUtc: any, getNewId: any): void;
export function initializeMobile(accountId: string, appId: string, version: string, isRelease: boolean): Promise<void>;
export function initializeWeb(accountId: string, appId: string, version: string, isRelease: boolean): Promise<void>;
export function initializeInternal(accountId: any, appId: any, version: any, isRelease: any): Promise<void>;
export function reportEvent(eventName: string, isCollapsible: boolean): void;
export function reportError(eventName: string): void;
export function reportCrash(eventName: string): void;
export function reportStageTransition(stage: number, stageName: string): void;
//# sourceMappingURL=journey.d.ts.map