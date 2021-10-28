import React from 'react'
import PropTypes from 'prop-types'

const SHORT_MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];	

function useFormatDay() {
    const formatDay = (day) => {
        return ('0' + day.toString()).slice(-2);
    }
    const formatMonth = (month) => {
        return SHORT_MONTH[month - 1];
    }
    const formatDate = (date) => {
        const [day, month, year] = [formatDay(date.getDay()), formatMonth(date.getMonth()), date.getFullYear()];
        return `${month} ${day} ${year}`;
    }
    return formatDate;
}

// useFormatDay.propTypes = {
//     date: PropTypes.object
// }

export default useFormatDay

