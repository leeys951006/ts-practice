function add(a: number, b: number): number {
  let result = a + b;
  return result;
}

interface Truth {
  name: string;
  age: number;
  job: '무직';
}

function minam(): Truth {
  let obj: Truth = {
    name: '이연승',
    age: 30,
    job: '무직',
  };
  return obj;
}
