let fullname: string = "van phu tin ";

function getName(name: string) {
  return `Full name : ${name}`;
}

document.body.innerHTML = getName(fullname);
