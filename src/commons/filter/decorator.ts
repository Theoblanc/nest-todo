import { ReturnTypeFunc } from '@nestjs/graphql';
import { Class } from '../interface';

export type FilterableFieldOptions = {
  filterRequired?: boolean;
};

export interface FilterableFieldDescriptor {
  propertyName: string;
  target: Class<unknown>;
  returnTypeFunc?: ReturnTypeFunc;
  advancedOptions?: FilterableFieldOptions;
}

export declare function FilterableField(): PropertyDecorator & MethodDecorator;
export declare function FilterableField(
  options: FilterableFieldOptions,
): PropertyDecorator & MethodDecorator;
export declare function FilterableField(
  returnTypeFunction?: ReturnTypeFunc,
  options?: FilterableFieldOptions,
): PropertyDecorator & MethodDecorator;
export declare function getFilterableFields<DTO>(
  DTOClass: Class<DTO>,
): FilterableFieldDescriptor[];
