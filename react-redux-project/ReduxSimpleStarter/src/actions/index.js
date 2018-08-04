export function selectBook(book) {
    // selectBook is an Actionreator and needs to return an action - an object with a type property and a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}