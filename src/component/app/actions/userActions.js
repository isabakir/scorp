export  const USER_UPDATE='USER_UPDATE';

export function updateUser(newUser){
    return{
        type:USER_UPDATE,
        payload:{
            user:newUser
        }
    }
}