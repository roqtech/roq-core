export interface GraphqlContextInterface {
  req?: {
    headers?: {
      'request-id'?: string;
      'request-caller'?: string;
    };
  };
}
