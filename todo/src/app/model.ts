export class Model {
  user: string = ''
  items: TodoItem[] = []
  radioBtnArr: RadioGroup[] = []

  constructor() {
    this.user = 'Zhekan';

    this.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collect Tickets', false),
      new TodoItem('Go and Fuck Myself', false),
    ];

    this.radioBtnArr = [
      new RadioGroup('radio1', 'option1', "All", true),
      new RadioGroup('radio2', 'option2', "Done", false),
      new RadioGroup('radio3', 'option3', "Completed", false),
    ];
  }
};

export class TodoItem {
  action: string = ''
  done: boolean = false

  constructor(
    action: string, 
    done: boolean
    ) {
    this.action = action;
    this.done = done;
  }
};

export class RadioGroup {
  name: string = ''
  value: string = ''
  text: string = ''
  checked: boolean = false

  constructor (
    name: string,
    value: string,
    text: string,
    checked: boolean,
  ){
    this.name = name;
    this.value = value;
    this.text = text;
    this.checked = checked;
  }
};