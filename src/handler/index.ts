import { Request, Response } from 'express';
import { MutationDefinition } from '../db';
import { customError } from '../util/errorUtil';
import { ErrorDatabase, SectionGeneral } from '../util/stringUtil';
import { HasuraSession } from './session';
import { IntlShape } from '@formatjs/intl';
import { loadLocale } from '../locale';

export type HandlerOptions = {
    not_return_data?: boolean
    extra?: string
}

export type OrganizationIdInput = {
    organization_id: number
}

export type FuncInputItem<T> = {
    type: string
    param: T
}

export type FuncInputItemBase = FuncInputItem<any>;

export type CreatedByUserIdInput = {
    created_by_user_id?: number
}

export type ChangedByUserIdInput = {
    changed_by_user_id?: number
}

export type ParamInput<T> = {
    param?: T
}

export type TableOrganizationIdInput = {
    table_organization_id: number
}

export type RelListInput<T> = {
    data: T[]
}

export type RelInput<T> = {
    data: T
}

export type WithId = {
    id: number
}

export type UpdateInput<T> = WithId & {
    db?: T
}

type ActionOutputData = WithId | any

export type ActionOutputError = {
    message: string;
    code?: string
}
export type Nullable<T> = T | null;
export type ActionOutput = ActionOutputData | ActionOutputError;
export type ActionOutputErrorOrData<T> = {
    data?: T
    error?: Nullable<ActionOutputError>
}

interface ValidateAndPrepareFunc<T> {
    (intl: IntlShape<string>, isDev: boolean, data: T, def: MutationDefinition, session: HasuraSession): Promise<Nullable<ActionOutputError>>;
}

export class BaseAction<T> {
    def: MutationDefinition;
    validateAndPrepareFunc: ValidateAndPrepareFunc<T>;

    constructor(validateAndPrepareFunc: ValidateAndPrepareFunc<T>) {
        this.def = new MutationDefinition();
        this.validateAndPrepareFunc = validateAndPrepareFunc;
    }

    success(res: Response, obj: ActionOutputData) {
        res.json(obj);
    };
    error(res: Response, obj: ActionOutputError) {
        res.status(400).json(obj);
    };

    async handle(intl: IntlShape<string>, res: Response, isDev: boolean, data: T, session: HasuraSession) {
        const err = await this.validateAndPrepareFunc(intl, isDev, data, this.def, session);
        if (err) {
            this.error(res, err);
            return;
        }

        if (this.def.notExecute) {
            this.success(res, this.def.ret);
        } else {
            const { errors, data: dataMutation } = await this.def.execute();
            // if Hasura operation errors, then throw error
            if (errors) {
                isDev && console.log(errors[0]);
                this.error(res, await customError(intl,0, SectionGeneral, [intl.formatMessage({id:ErrorDatabase})]));
                return;
            }

            let ret = {};
            if (this.def.returnFieldCallback === undefined) {
                ret[this.def.returnField] = dataMutation.data[this.def.returnField] || 0;
            } else {
                ret = this.def.returnFieldCallback(dataMutation.data);
            }

            this.success(res, ret);
        }
    }

    async handleHasura(req: Request, res: Response, isDev: boolean) {
        // Call function that handles validation and build up of components for mutation
        const { locale, ...data } = req.body.input.data;
        const intl = await loadLocale(locale);
        //
        const session = new HasuraSession(req.body.session_variables, locale);
        let err = await session.getUserOrganizations(intl,isDev);
        if (err) {
            this.error(res, err);
            return;
        }
        
        await this.handle(intl, res, isDev, data, session);
    }

    async handleRoute(req: Request, res: Response, isDev: boolean) {
        const sessionVar: any = {};
        sessionVar['x-hasura-role'] = 'admin';
        const session = new HasuraSession(sessionVar);
        //
        const intl = await loadLocale();
        await this.handle(intl, res, isDev, req.body, session);
    }
}

export function returnValue(def: MutationDefinition, val) {
    if (def.canExecute()) {
        def.returnFieldCallback = (ret) => {
            return val;
        }
    } else {
        def.notExecute = true;
        def.ret = val;
    }
    return null;
}

export function returnIdValue(def: MutationDefinition, val) {
    return returnValue(def, { id: val })
}

export enum HasuraRole {
    HasuraAdmin = "admin"
}