export const person ={
    head: {
        eyes: '8',
        mouth:{
            teeth: '7',
            tongue: '4'
        }
    },
    body: {
        shoulders: '10',
        chest: '9',
        arms: '8,5',
        hands: '9',
        legs: '10'
    }
};
export const {myLegs, myEyes} = person;
alert("Pregunta 5 :  "+ person.body.legs + " , " + person.head.eyes);
