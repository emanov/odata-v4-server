import { ServiceMetadata } from "odata-v4-service-metadata";
import { ServiceDocument } from "odata-v4-service-document";
import { Edm as Metadata } from "odata-v4-metadata";
export { Promise } from "es6-promise";
import * as express from "express";
import { Transform, TransformOptions } from "stream";
import { ODataController } from "./controller";
import { ODataProcessor, ODataProcessorOptions } from "./processor";
export declare class ODataServer extends Transform {
    private static _metadataCache;
    static namespace: string;
    static containerName: string;
    private serverType;
    static requestHandler(): (req: any, res: any, next: any) => void;
    static execute(url: string, method: string, body?: any): any;
    static execute(context: any, body?: any): any;
    constructor(opts?: TransformOptions);
    _transform(chunk: any, encoding?: string, done?: Function): any;
    _flush(done?: Function): void;
    static createProcessor(context: any, options?: ODataProcessorOptions): ODataProcessor;
    static $metadata(): ServiceMetadata;
    static $metadata(metadata: Metadata.Edmx | any): any;
    static document(): ServiceDocument;
    static addController(controller: typeof ODataController, isPublic?: boolean): any;
    static addController(controller: typeof ODataController, isPublic?: boolean, elementType?: Function): any;
    static addController(controller: typeof ODataController, entitySetName?: string, elementType?: Function): any;
    static getController(elementType: Function): any;
    static create(): express.Router;
    static create(port: number): void;
    static create(path: string, port: number): void;
    static create(port: number, hostname: string): void;
    static create(path?: string | RegExp | number, port?: number | string, hostname?: string): void;
}
export declare function ODataErrorHandler(err: any, req: any, res: any, next: any): void;
export declare function createODataServer(server: typeof ODataServer): express.Router;
export declare function createODataServer(server: typeof ODataServer, port: number): void;
export declare function createODataServer(server: typeof ODataServer, path: string, port: number): void;
export declare function createODataServer(server: typeof ODataServer, port: number, hostname: string): void;
