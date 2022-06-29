function displayError(element, errorElement, message) {
    element.parentElement.classList.add('error');
    errorElement.innerHTML = message;
}

function clearError(element, errorElement) {
    element.parentElement.classList.remove('error');
    errorElement.innerHTML = '';
}

export { displayError, clearError };