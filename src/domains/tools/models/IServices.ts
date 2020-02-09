// communication protocol ( HTTP(s), FTP(s) etc )
interface IServicesProtocol {
    secure: string;
    normal: string;
  }

// common base API response
interface IAPI<T>
{
  result: number;
  __error: string;
  data: T[];
}

// common interface for services
interface IRequests<T> {
  getter(): Promise<T>;
}

export {
  IServicesProtocol,
  IAPI,
  IRequests
}