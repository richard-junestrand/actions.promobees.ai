import { executeGraphql } from "./util";

export const getCountryById = async (id: number) => {
    return await executeGraphql(`
      query ($id: Int!) {
        data:country_by_pk(id: $id) {
          id
        }
      }`, {
      id: id
    });
  }