export default (date) => {
    let array = date.split('-');
    return `${array[0]}-${array[1]}`;
};