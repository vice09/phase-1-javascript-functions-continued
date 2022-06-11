// code your solution here
function saturdayFun(mess= "roller-skate") {
    return "This Saturday, I want to ${message}!"
};

function mondayWork(mess= "go to the office") {
  return "This Monday, I will ${message}."
};
let wrapAdjective = function (mess='*') {
    return function (text='special') {
        return "You are ${message}${text}${message}!"
    };
}

