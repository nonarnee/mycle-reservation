export interface PaginatedResponse<T> {
  data: T[];
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PaginationParams {
  page: number;
  per_page: number;
}
