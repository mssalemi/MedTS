import axios, { AxiosResponse } from 'axios'

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => ();

const URL = "http://localhost:3000/users/";

export class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(private data: UserProps) {}
  get(propName: string): string | number {
    return this.data[propName];
  }
  set(update: UserProps) {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if(!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    })
  }
  fetch(): void{
    axios.get(`${URL}${this.get('id')}`)
    .then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }
  save(): void{
    const id = this.get('id')
    console.log(`${URL}${id}`);
    if (id) {
      axios.put(`${URL}${id}`, this.data);
    } else {
      axios.post(URL, this.data)
    }
  }
}
