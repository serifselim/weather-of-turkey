export const getDateByUnix = (dateUnix) => {
    const date = new Date(dateUnix * 1000);
    return date.toLocaleDateString('en-EN', { weekday: 'long' });       
}