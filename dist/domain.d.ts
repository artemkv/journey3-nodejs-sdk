export function createSessionHeader(accountId: any, appId: any, version: any, isRelease: any, getNowUtc: any, getNewId: any): {
    t: string;
    v: string;
    id: any;
    acc: any;
    aid: any;
    version: any;
    is_release: any;
    since: any;
    start: any;
    fst_launch: boolean;
    fst_launch_hour: boolean;
    fst_launch_day: boolean;
    fst_launch_month: boolean;
    fst_launch_year: boolean;
    fst_launch_version: boolean;
    prev_stage: {
        ts: any;
        stage: any;
        name: any;
    };
};
export function createSession(id: any, accountId: any, appId: any, version: any, isRelease: any, start: any, getNowUtc: any): {
    t: string;
    v: string;
    id: any;
    acc: any;
    aid: any;
    version: any;
    is_release: any;
    start: any;
    end: any;
    since: any;
    fst_launch: boolean;
    prev_stage: {
        ts: any;
        stage: any;
        name: any;
    };
    new_stage: {
        ts: any;
        stage: any;
        name: any;
    };
    has_error: boolean;
    has_crash: boolean;
    evts: {};
    evt_seq: any[];
};
export function createSessionFromJson(json: any, getNowUtc: any, getNewId: any): {
    t: string;
    v: string;
    id: any;
    since: any;
    start: any;
    end: any;
    acc: any;
    aid: any;
    version: any;
    is_release: any;
    fst_launch: any;
    has_error: any;
    has_crash: any;
    evts: any;
    evt_seq: any;
    prev_stage: {
        ts: any;
        stage: any;
        name: any;
    };
    new_stage: {
        ts: any;
        stage: any;
        name: any;
    };
};
export function createStage(stage: any, name: any, getNowUtc: any): {
    ts: any;
    stage: any;
    name: any;
};
export function createStageNewUser(getNowUtc: any): {
    ts: any;
    stage: any;
    name: any;
};
export function createStageFromJson(json: any, getNowUtc: any): {
    ts: any;
    stage: any;
    name: any;
};
//# sourceMappingURL=domain.d.ts.map