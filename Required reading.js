function requiredReading(pageNumberCurrentBook, pageReadIn1Hour, numberDaysMustReadBook) {
    let totalTimeReadBook = pageNumberCurrentBook / pageReadIn1Hour;
    let requiredHoursPerDay = totalTimeReadBook / numberDaysMustReadBook;

    console.log(requiredHoursPerDay);
}
requiredReading(432, 15, 4)