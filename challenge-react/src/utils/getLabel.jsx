export function getLabel(dateFrom, dateTo) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const dateFromParts = dateFrom.split('/');
    const dateToParts = dateTo.split('/');

    const fromDate = new Date(
        parseInt(dateFromParts[2]),
        parseInt(dateFromParts[1]) - 1,
        parseInt(dateFromParts[0])
    );

    const toDate = new Date(
        parseInt(dateToParts[2]),
        parseInt(dateToParts[1]) - 1,
        parseInt(dateToParts[0])
    );


    if (
        fromDate.toDateString() === today.toDateString() &&
        toDate.toDateString() === today.toDateString()
    ) {
        return {
            key: 'Today',
            color: '#568be3',
        };
    } else if (
        fromDate.toDateString() === yesterday.toDateString() &&
        toDate.toDateString() === yesterday.toDateString()
    ) {
        return {
            key: 'Yesterday',
            color: '#65a8bf',
        };
    } else if (
        today.getMonth() === fromDate.getMonth() &&
        today.getFullYear() === fromDate.getFullYear()
    ) {
        return { key: 'Month to Date', color: '#36ACAC' };
    } else if (
        today.getMonth() === fromDate.getMonth() &&
        today.getFullYear() === toDate.getFullYear()
    ) {
        return { key: 'This Month (Forecast)', color: '#57ACBD' };
    } else if (
        today.getMonth() - 1 === fromDate.getMonth() &&
        today.getFullYear() === toDate.getFullYear()
    ) {
        return {
            key: 'Last Month',
            color: '#57AD77',
        };
    }

    return `${dateFrom} - ${dateTo}`;
}