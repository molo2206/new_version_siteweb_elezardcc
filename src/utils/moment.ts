import moment from "moment";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dateformat( date:any) {
 return moment(date).format("DD/MM/YYYY");
}

