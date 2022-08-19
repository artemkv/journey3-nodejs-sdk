export function config(persistence: any, rest: any, getNowUtc: any, getNewId: any): void;
export function initializeMobile(accountId: string, appId: string, version: string, isRelease: boolean): Promise<void>;
export function initializeWeb(accountId: string, appId: string, version: string, isRelease: boolean): Promise<void>;
export function reportEvent(eventName: string, isCollapsible?: boolean): Promise<void>;
export function reportError(eventName: string): Promise<void>;
export function reportCrash(eventName: string): Promise<void>;
export function reportStageTransition(stage: number, stageName: string): Promise<void>;
//# sourceMappingURL=journey.d.ts.map