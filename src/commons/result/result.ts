export class Result<T> {
  data: T[];
  totalCount: number;
  cursor: string;
  hasMore: boolean;
  error?: string;

  constructor(
    data: T[],
    totalCount: number,
    cursor: string,
    hasMore: boolean,
    error?: string,
  ) {
    this.data = data;
    this.totalCount = totalCount;
    this.cursor = cursor;
    this.hasMore = hasMore;
    this.error = error;
  }
}
