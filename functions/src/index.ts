import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

//promote user to be admin
/* exports.addAdminRole =  functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            role:0
        });
    }).then(()=>{
        return{
            message:`Success! ${data.email} has been made an admin`
        }
    }).catch((err)=>{
        return err;
    })
}) */

//promote user to be deliveryBoy
/* exports.addDeliveryRole =  functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            role:1
        });
    }).then(()=>{
        return{
            message:`Success! ${data.email} has been made an delivery`
        }
    }).catch((err)=>{
        return err;
    })
}) */