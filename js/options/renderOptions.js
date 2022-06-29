function renderOptions(element, count, addon = 0) {
    if(element.childNodes.length > 1) return;

    for (let i = 0; i < count; i++) {
        const option = document.createElement('option');
        option.value = i + addon;
        option.innerHTML = ("0" + (i + addon)).slice(-2);
        element.appendChild(option);
    }
}

export { renderOptions };