var lang = prompt('')

// if (lang == 'ru') {
//     console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
// }   else if (lang == 'en') {
//     console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
// }   else {
//     alert('ERROR')
// }

switch (lang) {
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
        break;
    case 'en':
        console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
        break;
    default:
        alert('ERROR')
        break;
}

