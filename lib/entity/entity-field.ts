import {DataEntityType} from "./data-entity.base";
import {ParisConfig} from "../config/paris-config";
import {DataQuery} from "../dataset/data-query";

export interface Field{
	id?:string,
	name?:string,
	data?:"__self" | string | Array<string>,
	entity?:DataEntityType,
	type?:Function,
	defaultValue?:any,
	arrayOf?:DataEntityType,
	isArray?:boolean,
	required?:boolean,
	require?:((data:any, config?:ParisConfig) => any) | string,
	parse?:(fieldData?:any, itemData?:any, query?: DataQuery) => any,
	serialize?:(itemData:any, serializationData?:any) => any
}

export const FIELD_DATA_SELF = "__self";
export type EntityFieldConfigFunctionOrValue = ((data:any, config?:ParisConfig) => string) | string;
