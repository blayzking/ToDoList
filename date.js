
module.exports.getDate = getDate;

function getDate() {
const date = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = date.toLocaleDateString("en-US", options);

    return day;
}



module.exports.getDay = function getDay() {
    const date = new Date();
    
        let options = {
            weekday: 'long'
        };
    
        return date.toLocaleDateString("en-US", options);
    }