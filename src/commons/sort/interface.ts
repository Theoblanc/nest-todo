import { SortDirection, SortNulls } from './type';

export interface SortField<T> {
  /**
   * A field in type T to sort on.
   */
  field: keyof T;
  /**
   * The direction of the sort (ASC or DESC)
   */
  direction: SortDirection;
  /**
   * The order that nulls values should be sorted.
   */
  nulls?: SortNulls;
}
