function globalFunction() {
    console.log(this.firstname);
}

globalFunction();

const obj = {
    firstname: "john",
    what: globalFunction
}

obj.what();