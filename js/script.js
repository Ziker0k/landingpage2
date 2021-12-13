function validate() {
        let a = document.forms["myForm"]["name"].value;
        if (a == "") {
            alert("Fill the name...");
            return false;

        }
        let с = document.forms["myForm"]["email"].value;
        if (с == "") {
            alert("Fill the email...");
            return false;
        }
        let x = document.forms["myForm"]["message"].value;
        if (x == "") {
            alert("Write message...");
            return false;
        }
    }