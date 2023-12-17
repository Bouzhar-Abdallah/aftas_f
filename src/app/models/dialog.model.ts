

export class Dialog {
  item: string = '';
  type: DialogType | void;
  message: string; 

  constructor(
    item:string,
    type:string,
    message:string
  ){
    this.item = item;
    this.message = message;
    this.type = type as DialogType;
  }
}

export enum DialogType{
  'success' = 'success',
  'error' = 'error',
  'warning' = 'warning',
  'info' = 'info',
  'question' = 'question'
}