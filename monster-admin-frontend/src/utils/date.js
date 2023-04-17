import dayjs from 'dayjs';

const formatDateTime = (str, formatStr = "YYYY-MM-DD HH:MM:ss") => {
   return dayjs(str).format(formatStr);
}

export {
    formatDateTime
}