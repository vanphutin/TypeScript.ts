// class sinh vien

class SinhVien {
  _id: number;
  firstname: string;
  lastname: string;
  old: number;
  gender: boolean;
  specialized: string;
  constructor(
    firstname: string,
    lastname: string,
    _id: number,
    old: number,
    gender: boolean,
    specialized: string
  ) {
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.old = old;
    this.specialized = specialized;
  }
}
