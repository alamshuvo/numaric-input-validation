function phoneNumberValidationa(number) {
    const codes=['+88','019','018','017','015','016','013'];
    if (isNaN(number)|| (number.startsWith("+88")&& number.length<14)||(!number.startsWith("+88")&&number.length<11) ||number.length>=14) {
        return "this is wrong input for validation phone number";
    } else {
        let phoneNumber=false;
        for (const code  of codes) {
            if (number.includes(code)) {
              
             phoneNumber=true;
             break;
            } 
        }
        if ((phoneNumber)) {
            return "your phone number is okey its a Bangladeshi phone number.";
        }
      return "its not a Bangladeshi phone number please provide valid input number.";
      
    }
}
