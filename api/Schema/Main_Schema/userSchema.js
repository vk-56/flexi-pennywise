import { userCredentialsSchema } from './signup/signup_login';
import { BudgetSchema } from './signup/budget';
import { TransactionSchema } from './signup/transaction';



const { default: mongoose } = require("mongoose");

// User Schema :
const userSchema = new mongoose.Schema({
    _id: {
        type: 'String',
        required: false
    },
    userCred: [userCredentialsSchema],
    userTransactions: [ TransactionSchema ],
    userBudget: [ BudgetSchema ],

})

const userCollection = mongoose.model("userCollection", userSchema)

// userCollection.updateOne({_id: 1,
//         name : 'Yash Jugade',
//         email : 'yjugade@gmail.com',
//         password : '12345',
//         contact_no : '9527332805',
//         location :  'Pune'})



module.exports = userCollection;
