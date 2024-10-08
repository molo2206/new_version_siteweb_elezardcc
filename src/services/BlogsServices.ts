/* eslint-disable @typescript-eslint/no-explicit-any */
import requests from './Instance'
const BlogServices = {
	getBlog: async () => {
		return requests.get(`/public/blogs`)
	},
	oneBlog: async (id: any) => {
		return requests.get(`/public/blogs/detail/${id}`)
	},
	getBlogHome: async () => {
		return requests.get('/public/bloghome')
	},
	oneBlogs: async (slug: any) => {
		return requests.get(`/public/blogs/details/${slug}`)
	},
	lastBlog: async () => {
		return requests.get(`/public/lastblog`)
	}
}
export default BlogServices
