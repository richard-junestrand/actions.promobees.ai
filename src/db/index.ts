import { executeGraphql } from "./util";

class GraphqlDefinition {
    type: string;
    calls: GraphqlCall[];
    idx: number;
    notExecute: boolean;
    ret: any;
    returnField: string
    returnFieldCallback: (data: any) => any

    constructor() {
        this.calls = [];
        this.idx = 0;
        this.returnField = "id";
        this.notExecute = false;
    }

    async newCall() {
        const call = new GraphqlCall();
        call.idx = this.idx++;
        this.calls.push(call);
        return call;
    }

    async execute() {
        const lst = this.calls.filter(r => r.is_active);
        try {
            return await executeGraphql(`${this.type} (${lst.map(r => r.parameter).join(',')}) {
                ${lst.map(r => r.command).join(' ')}
            }`, lst.reduce((prev, i) => {
                return { ...prev, ...i.variable };
            }, {}));
        } finally {
            this.calls = []
        }
    }
    canExecute() {
        return this.calls.some(r => r.is_active);
    }
}

export class MutationDefinition extends GraphqlDefinition {
    type = "mutation";
}

export type GraphqlOutput = {
    errors?: {
        message
    }[]
    data?
};

export const dbNow = "now()";
export const dbTimestamp = "LOCALTIMESTAMP";

export class GraphqlCall {
    parameter: string; // Used to build parameter list for mutation calls
    command: string; // Used to build mutation calls
    variable;
    idx: number;
    is_active: boolean;

    constructor() {
        this.is_active = true;
    }

    dataLabel(notReturnData: boolean) {
        return notReturnData ? `_${this.idx}` : '';
    }
}