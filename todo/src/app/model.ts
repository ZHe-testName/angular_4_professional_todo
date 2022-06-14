export class Model {
  user: string = ''
  items: TodoItem[] = []

  constructor() {
    this.user = 'Zhekan';

    this.items = [
      new TodoItem('Buy Flowers', true),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collect Tickets', false),
      new TodoItem('Go and Fuck Myself', true),
    ];
  }
};

export class TodoItem {
  action: string = ''
  done: boolean = false

  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
};