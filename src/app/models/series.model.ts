import { Comment} from './comment.model'

export class Series{
  private static _sId: number = 0;
  private _id:number;
  private _name:string;
  private _dateFirstSeason: Date;
  private _seasonsNb: number;
  private _description:string;
  private _review: string;
  private _pictureUrl: string;
  private _comments: Array<Comment>;


  constructor(name: string, dateSeasonStart: Date, seasonsNb: number, description: string,
              review: string, pictureUrl: string, comments: Array<Comment>) {
    this._id = ++Series._sId;
    this._name = name;
    this._dateFirstSeason = dateSeasonStart;
    this._seasonsNb = seasonsNb;
    this._description = description;
    this._review = review;
    this._pictureUrl = pictureUrl;
    this._comments = comments;
  }


  static get sId(): number {
    return this._sId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dateFirstSeason(): Date {
    return this._dateFirstSeason;
  }

  set dateFirstSeason(value: Date) {
    this._dateFirstSeason = value;
  }

  get seasonsNb(): number {
    return this._seasonsNb;
  }

  set seasonsNb(value: number) {
    this._seasonsNb = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get pictureUrl(): string {
    return this._pictureUrl;
  }

  set pictureUrl(value: string) {
    this._pictureUrl = value;
  }

  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }
}
