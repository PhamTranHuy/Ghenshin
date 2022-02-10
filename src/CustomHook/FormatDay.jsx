const SHORT_MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];	

function useFormatDay() {
    const formatDay = (day) => {
        return ('0' + day.toString()).slice(-2);
    }
    const formatMonth = (month) => {
        return SHORT_MONTH[month];
    }
    const formatDate = (date) => {
        const [day, month, year] = [formatDay(date.getDate()), formatMonth(date.getMonth()), date.getFullYear()];
        return `${month} ${day} ${year}`;
    }
    return formatDate;
}

export default useFormatDay

