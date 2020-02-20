function alphanumeric(string){
  return string ? !RegExp(/[^A-Za-z0-9]/g).test(string) : false
}
