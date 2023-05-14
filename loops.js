const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
};

const createData = () => {
    const current = new Date();
    current.setDate(0);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7);
    const result = [];

    for (const weekIndex of weeks) {
        const value = {
            week: weekIndex +1,
            days: [],
        };

        for (const dayIndex of days) {
            const day =dayIndex - startDay+1;
            const isValid = day > 0 && day <= daysInMonth;
    

           value.days.push({
            dayOfWeek:dayIndex,
            value:isValid ? day : null,
           });
        }
        result.push(value);
    }
    return result;
};

const addCell = (existing, classString, value) => {
    return  /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `;
};

const createHtml = (data) => {
    let result = '';

    for (const week of data) {
        let inner = "";
        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${week.week}`);
    
        // for (const {dayOfWeek, value} of week.days) {
        //     let classString = 'class="table__cell"';
		// 	const isToday = new Date().getDate() === value;
        //     const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
        //     const isAlternate = week/2

		// 	if (isToday) classString += 'class="table__cell_today"';
        //     if (isWeekend) classString += 'class="table__cell_weekend"';
        //     if (isAlternate) classString +=  'class="table__cell_alternate"';
            
        //     inner= addCell(inner, `class="${classString}"`, value);
        // }

        result += `<tr>${inner}</tr>`;
    }
    return result;
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)