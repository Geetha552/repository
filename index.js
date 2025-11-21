const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};


console.log(profile.user.details.email);      
console.log(profile.user.details?.phone);    


const student = {
  id: 101,
  name: "Mia"
 
};


const streetAddress = student.location?.street;

console.log(streetAddress);                 
