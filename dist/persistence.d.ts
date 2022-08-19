declare namespace _default {
    export { loadLastSession };
    export { saveSession };
}
export default _default;
declare function loadLastSession(getNowUtc: any, getNewId: any): {
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
declare function saveSession(session: any): void;
//# sourceMappingURL=persistence.d.ts.map