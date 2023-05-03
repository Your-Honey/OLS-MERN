export interface IActivity {
  _id: String;
  user: {
    _id: String;
    name: String;
    email: String;
    password: String;
    organisation: {
      _id: String;
      name: String;
      createdAt: String;
      updatedAt: String;
    };
    isAdmin: boolean;
    createdAt: String;
  };
  device: String;
  logintime: String;
  logouttime: String | null;
  createdAt: String;
  updatedAt: String;
}
