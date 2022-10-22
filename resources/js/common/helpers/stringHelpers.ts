import _ from "lodash"

export function camelCaseToSnakeCase(camelCase: string): string {
    return camelCase.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

export function snakeCaseToCamelCase(snakeCase: string): string {
    return _.camelCase(snakeCase)
}

export function kebabCaseToCamelCase(kebabCase: string): string {
    const splittedString = kebabCase.split("-")

    return `${splittedString[0]}${splittedString.slice(1).reduce((acc, cur) => `${acc}${cur[0].toUpperCase()}${cur.substr(1)}`, "")}`
}

export function isLanguageField(field: string): boolean {
    return field[0] === ":" && field.substring(1) === "lang"
}

export function fromParameterToNumber(param: any, defaultValue = 1): number {
    return Number.parseInt(Array.isArray(param) ? `${defaultValue}` : param)
}
