var phoneNumber = prompt ( "Phone number", "xxx-xxx-xxxx" );
if ( phoneNumber.charAt ( 3, 7 ) != "-" ) {
  alert ( "That's not a valid phone number!" );
};

var bDay = prompt ( "What's your birthday?", "mm/dd/yy" );
if ( bDay.charAt ( 2, 5 ) != "/" ) {
  alert ( "Please enter a valid Birthday!" );
};

var zipCode = prompt ( "What's your postal code?", "xxxxx/xxxxx-xxxx" );
if ( ( zipCode.charAt ( 5 ) != "-" ) || zipCode.length > 10 ) {
  alert ( "Please enter a valid postal code!" );
};

var married = prompt ( "Are you married?", "Yes/No" );
if ( married.toLowerCase() != ( "yes" || "no" ) ) {
  alert ( "Please enter either yes or no!" );
};
