
const names = ['wes', 'kait', 'lux'];

const fullName = names.map(funciton(name){
  return `${name} bos`;
});

const fullName2 = names.map( (name) => {
  return `${name} bos`;
});

//かっこ省略可能 if  only 1 arg
const fullName3 = names.map( name => {
  return `${name} bos`;
});

//explicit return
const fullName4 = names.map( name => {`${name} bos`});

// no arguments
const fullName5 = names.map( () => {`cool bos`});
