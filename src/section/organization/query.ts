import { executeGraphql } from "../../db/util";

export enum OrganizationQueryType {
  Default
};

export const getOrganizationById = async (id: number, type= OrganizationQueryType.Default) => {
  return await executeGraphql(`
    query ($id: Int!) {
      data:organization_by_pk(id: $id) {
        id
      }
    }`, {
    id
  });
}