interface IUserState {
  users?: IUser[];
}
interface IUserDispatch {
  type?: string;
  payload?: {};
}
interface IContextProps {
  userState: IUserState;
  userDispatch: any;
}
interface ILocation {
  lng: number;
  lat: number;
}
interface IUser {
  id: string;
  locationName: string;
  locationType: string;
  location: ILocation;
  publicId: string;
}
