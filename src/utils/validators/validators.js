//Функция проверки заполнения поля формы. На входе приходит значение
export const requiredField = (value) => {
    //Если значение есть значит функция вернет undefined
    if(value) {
        return undefined;
    } //Иначе сообщение об ошибке
    return 'Field is required';
    
}

//Функция проверки количества символов. msxLength - число символов в строке. value - строка  
export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}
