

export class Dialog {
  item: string;
  action: string;
  success: boolean; 

  constructor(item: string, action: string, success: boolean) {
    this.item = item;
    this.action = action;
    this.success = success
  }
}

