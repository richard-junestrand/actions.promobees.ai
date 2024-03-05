import { ElementSource, TemplateInput } from ".";
import { Template } from "../../db/generated";
import { ActionOutputError, ActionOutputErrorOrData, Nullable, OrganizationIdInput, UpdateInput } from "../../handler";
import { HasuraSession } from "../../handler/session";
import { ContainerTemplate, uploadBlobBuffer } from "../../util/blobUtil";
import { checkDataBase } from "../../util/dataUtil";
import { customError } from "../../util/errorUtil";
import { fileName, randomFileName } from "../../util/fileUtil";
import { generateImagePreview } from "../../util/imageUtil";
import { checkString } from "../../util/stringUtil";
import { dataHolderVal } from "../campaign/util";
import { checkOrganizationDataBase, checkOrganizationIdBase } from "../organization/util";
import { TemplateQueryType, getTemplateById, getTemplateTypeById } from "./query";

export const checkTemplateBase = async (intl, isDev: boolean, section: string, val: number,
    errs: number[], session: HasuraSession, orgId?: number, type = TemplateQueryType.Default): Promise<ActionOutputErrorOrData<Template>> => {
    return checkOrganizationDataBase(intl, isDev, section, val, errs, v => getTemplateById(v, type), session, orgId)
}

export const checkName = async (intl, section: string, data: TemplateInput): Promise<Nullable<ActionOutputError>> => {
    return checkString(intl, section, data.template_name, 120020, false, 256);
}

export const checkTemplateType = async (intl, isDev: boolean, section: string, data: TemplateInput): Promise<Nullable<ActionOutputError>> => {
    return (await checkDataBase(intl, isDev, section, data.template_type_id, [120030, 120040], getTemplateTypeById)).error
}

export const checkId = async (intl, isDev: boolean, section: string, data: UpdateInput<Template>,
    session: HasuraSession, type = TemplateQueryType.Default): Promise<Nullable<ActionOutputError>> => {
    const errOrData = await checkTemplateBase(intl, isDev, section, data.id, [120050, 120060], session, undefined, type);
    if (errOrData.error) {
        return errOrData.error
    }

    data.db = errOrData.data;
    return null;
}

export const checkOrganizationId = async (intl, section: string, data: OrganizationIdInput, session: HasuraSession): Promise<Nullable<ActionOutputError>> => {
    return checkOrganizationIdBase(intl, section, data.organization_id, [120000, 120010], session);
}
export const checkImagePreview = async (intl, section: string, data: TemplateInput, preview?: string): Promise<ActionOutputErrorOrData<string>> => {
    const errOrBuffer = await generateImagePreview(intl, section, data.specification);
    if (errOrBuffer.error) {
        return errOrBuffer
    }
    return await uploadBlobBuffer(errOrBuffer.data, ContainerTemplate, preview ? fileName(preview) : `${randomFileName()}.png`)
        .then((url: string) => {
            return { data: url }
        })
        .catch(async rr => {
            return { error: await customError(intl, 120080, section) };
        });
}

export const eleHolderVal = (ele: any) => {
    if (ele.source === ElementSource.Fixed) {
        return ele.value
    } else if (ele.source === ElementSource.Dynamic) {
        return dataHolderVal(ele.value)
    }
}