import { Filter } from '../filter/interface';
import { Paging } from '../page/interface';
import { SortField } from '../sort/interface';

export interface Query<T> {
  /**
   * Filter to use when operating on a entities.
   *
   * When using with a single entity operation (e.g. findById) the filter can be used to apply an additional filter to
   * ensure that the entity belongs to a particular user.
   */
  filter?: Filter<T>;

  /**
   * Option to page through the collection.
   */
  paging?: Paging;
  /**
   * Option to sort the collection.
   */
  sorting?: SortField<T>[];
}
