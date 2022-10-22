import {camelCaseToSnakeCase, snakeCaseToCamelCase} from "./stringHelpers";
import {IObject} from "../types/utils";

export function convertKeysToSnakeCase(object: IObject) {
    let newObject: IObject = {};

    for (const key in object) {
        newObject[camelCaseToSnakeCase(key)] = object[key];
    }

    return newObject;
}

export function convertKeysToCamelCase(object: IObject) {
    let newObject: IObject = {};

    for (const key in object) {
        newObject[snakeCaseToCamelCase(key)] = object[key];
    }

    return newObject;
}