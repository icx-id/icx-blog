export interface PaginationQueries {
  limit?: number;
  page?: number;
}

export interface PaginationMeta {
  hasNext: boolean;
  hasPrevious: boolean;
  page: number;
  perPage: number;
  total: number;
}

export interface PageableResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
