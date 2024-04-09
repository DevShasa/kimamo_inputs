function readabletime(timestamp){
    // Extract date and time components
    const year = timestamp.slice(0, 4);
    const month = timestamp.slice(4, 6);
    const day = timestamp.slice(6, 8);
    const hour = timestamp.slice(9, 11);
    const minute = timestamp.slice(11, 13);
    const second = timestamp.slice(13, 15);
    const millisecond = timestamp.slice(16, 19);

    // Create a new Date object
    const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}Z`);
    const readableDate = date.toDateString(); // e.g., "Sat Apr 09 2024"
    const readableTime = date.toTimeString();

    return `${readableDate} | ${readableTime}`
}

export {readabletime}