class Group {
    constructor() {
        this.group = [];
      }
      add(item) {
        if (!this.group.includes(item)) {
          this.group.push(item);
        }
      }
      delete(item) {
        let index = this.group.indexOf(item);
        if (index !== -1) {
          this.group.splice(index, 1);
        }
      }
      has(item) {
        return this.group.includes(item);
      }
  

  static from(a) {
    
    let g = new Group();
    for (let item of a) {
    //  console.log(item)
      g.add(item);
    }
    
    return g;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}

  class GroupIterator {
    constructor(o) {
        
      this.i = 0;
      this.group = o.group;
    }
  
    next() {
      if (this.i == this.group.length || this.i > 10) return {done: true};
  
      let value = this.group[this.i];
      this.i++;
      return {value, done: false};
    }
  }
  
  for (let value of Group.from([])) {
    console.log(value);
  }

  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false