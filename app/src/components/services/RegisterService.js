
function validateUsername(username) {
    const usr_pattern1 = /^[a-zA-Z0-9._-]+[a-zA-Z0-9._-]$/;
    const usr_pattern2 = /.{4,23}/;

    if (!usr_pattern1.test(username)) {
        return "Username contains invalid characters";
    }
    if (!usr_pattern2.test(username)) {
        return "Username is too short";
    }
    return null;
}

function validateEmail(email) {
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email_pattern.test(email)) {
        return "Please enter a valid email address or check for '@'";
    }
    return null;
}

function validatePassword(password) {
    const pwd_pattern0 = /.{8,24}/;
    const pwd_pattern1 = /^(?=.*[a-z]).{8,24}$/;
    const pwd_pattern2 = /^(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;
    const pwd_pattern3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
    const pwd_pattern4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    if (!pwd_pattern0.test(password)) {
        return "Password must be at least 8 characters";
    }
    if (!pwd_pattern1.test(password)) {
        return "Password must contain 1 lower-case character";
    }
    if (!pwd_pattern2.test(password)) {
        return "Password must contain 1 uppercase character";
    }
    if (!pwd_pattern3.test(password)) {
        return "Password must contain 1 number";
    }
    if (!pwd_pattern4.test(password)) {
        return "Password must contain 1 special character [!@#$%]";
    }
    return null;
}

export function validateForm(entries) {
    let errors = {};

    const usernameError = validateUsername(entries.username);
    if (usernameError) errors.usernameError = usernameError;

    const emailError = validateEmail(entries.email);
    if (emailError) errors.emailError = emailError;

    const passwordError = validatePassword(entries.password);
    if (passwordError) errors.passwordError = passwordError;

    return errors;
}