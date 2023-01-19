window.addEventListener("load", function () {
    var password = document.getElementById("password");
    var passwordStrength = document.getElementById("password-strength");

    password.addEventListener("input", function () {
        var strength = checkPasswordStrength(password.value);
        passwordStrength.innerHTML = strength == 0 ? `<div class='weak'>None (${strength} points) Estimate: Instant!</div>` :
                                     strength == 1 ? `<div class='weak'>Trash (${strength} point) Estimate: Few seconds</div>` :
                                     strength == 2 ? `<div class='weak'>Bad (${strength} points) Estimate: Few minutes</div>` :
                                     strength == 3 ? `<div class='medium'>Medium (${strength} points) Estimate: Several hours - couple of days</div>` :
                                     strength == 4 ? `<div class='decent'>Decent (${strength} points) Estimate: Several days - couple of months</div>` :
                                     `<div class='strong'>Strong (${strength} points) Estimate: Several months</div>`;
    });

    function checkPasswordStrength(password) {
        var strength = 0;
        
        if (password.length >= 8) strength += 1;
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
        if (password.length > 12) strength += 1;
        return strength;
    }
});
