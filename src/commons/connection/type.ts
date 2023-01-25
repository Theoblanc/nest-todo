export type OffsetConnectionType<DTO> = {
  totalCount?: Promise<number>;
  nodes: DTO[];
};

export interface EdgeType<DTO> {
  node: DTO;
  cursor: string;
}

export type CursorConnectionType<DTO> = {
  pageInfo;
  edges: EdgeType<DTO>[];
  totalCount: number;
};

export declare type ArrayConnectionType<DTO> = DTO[];

export declare type ConnectionType<DTO> =
  | OffsetConnectionType<DTO>
  | CursorConnectionType<DTO>
  | ArrayConnectionType<DTO>;
