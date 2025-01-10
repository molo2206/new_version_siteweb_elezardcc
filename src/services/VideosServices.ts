/* eslint-disable @typescript-eslint/no-explicit-any */
import requests from './Instance'
const VideosServices = {
	getVideo: async () => {
		return requests.get(`/public/media-video/{type}`)
	},
	LastVideo: async () => {
		return requests.get(`/public/media-last-video/{type}`)
	},
	oneVideo: async (id: any) => {
		return requests.get(`/public/media-catefory/${id}`)
	},
	OneVid: async (id: any) => {
		return requests.get(`public/media-on-video/${id}`)
	},
	getVideoHome: async () => {
		return requests.get(`public/media-video-home/{type}`)
	},
	getByCategory: async (id: any) => {
		return requests.get(`/public/media-catefory/${id}`)
	},
	getGroupBy: async () => {
		return requests.get(`/public/media-group-by`)
	},



}
export default VideosServices
