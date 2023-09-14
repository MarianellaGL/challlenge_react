export function getMonthName(dateFrom) {
    const dateFromParts = dateFrom.split('/');
    const date = new Date();
    date.setMonth(parseInt(dateFromParts[1]) - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}
