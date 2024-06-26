let age =32;

let user = {
    name: "Janak Bohara",
    address: "kanchanpur"
};

function findBirthYear(age) {
    return new Date().getFullYear() - age;
}

console.log(findBirthYear(age));

//ab yasma maile user ko kunai use garer kehi garn skxu sir?
// user.findBirthYear(age) 


//**************************************************
let password = req.body.password//"youtube123";

let userSchema = {
    name: String, 
    password: String,
    age: Number, 
    address: String,
    matchPassword: function(password) {//yo vaneko userSchema maa method create gare jastai ho ni sir?//userSchema.method.matchPassword
        let password2 = "janak2";
        return password2 == password;
    }

}

let user = await User. findOne({email});
//user maa maanau user={name: "Jank", password: "hdfjkegjegedff0885", age: 32, address: "kanchanpur"} aayo vane

user.matchPassword(password);//user.matchPasseord("youtube123") yo condition x vane user le function matchPassword sang kasto behaviour garx? or ki maile maathi lekheko code nai milen sir?





