import { defaultEquals } from "./util/defaultEquals"
import {Node} from './models/linked-list-models'

export default class LinkedList {
  constructor(equalsFn = defaultEquals){
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
}
