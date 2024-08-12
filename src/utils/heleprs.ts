/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment"

export const showingTranslateValue = (data: any, lang: any) => {
	const langue = lang == 'fr-FR' ? 'fr' : lang
	const result = data?.find((item: any) => item.locale === langue)
	if (result) {
		return result
	} else {
		return null
	}
}

export function checkPermission(ressource: any, access: string) {
	const userData = localStorage.getItem('_DICI_AUTH')
	if (userData) {
		const user: any = JSON.parse(userData)
		return user?.permissions?.find(
			(item: any) => item?.name === ressource && item?.access[access]
		)
	}
}

export const date_format = (data: any) => {
	return moment(data).format('DD/MM/YYYY')
}
//export const BASE_URL = 'http://localhost:8000/api'
export const BASE_URL = "https://apisiteweb.elezardc.org/api";
// export const API = "AIzaSyAht3Ro-oNpG5A6FVDuzBoSOmhI99M58Q4"
export const API = "AIzaSyBxfEeT6C6UbbTlhVJqtuCFYA9Js58aDoI"
export const channelId = "UCmR3Do8op19x58OzDTmw0zg";
export const BASE_YOUTUBE = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1000`;
