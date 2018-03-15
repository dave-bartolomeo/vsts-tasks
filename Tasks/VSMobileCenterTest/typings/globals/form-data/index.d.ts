// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/8de2997128443fbde32d9b04f7af78cd0c8c9593/form-data/form-data.d.ts
declare module "form-data" {
    class FormData {
        append(key: string, value: any, options?: any): void;
        getHeaders(): FormData.Dictionary<string>;
        // TODO expand pipe
        pipe(to: any): any;
        submit(params: string | Object, callback: (error: any, response: any) => void): any;
        getBoundary(): string;
    }

    namespace FormData {
        interface Dictionary<T> {
            [key: string]: T;
        }
    }

    export = FormData;
}