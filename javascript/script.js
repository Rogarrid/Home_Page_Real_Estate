//Logic for language change
function changeLanguage(language) {
    let languageFlag = $("#languageFlag");
    let optionLanguageFlag = $("#optionLanguageFlag");
    let optionLanguage = $("#optionLanguage");
    let languageText = $("#languageText");

    if (language === 'es') {
        languageFlag.attr("src", "images/Assets/es_flag.svg");
        optionLanguageFlag.attr("src", "images/Assets/eng_flag.svg");
        languageText.text("English");
        optionLanguage.click(function() {
            changeLanguage('en');
        });
    } else {
        languageFlag.attr("src", "images/Assets/eng_flag.svg");
        optionLanguageFlag.attr("src", "images/Assets/es_flag.svg");
        languageText.text("Español");
        optionLanguage.click(function() {
            changeLanguage('es');
        });
    }
}
