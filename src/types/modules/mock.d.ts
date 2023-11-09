export { };

declare global {
  namespace Mock {
    interface Response {
      (body?: object): object
    }
    interface Api {
      url: string;
      type: string;
      response: MockResponse;
    }
  }
}
