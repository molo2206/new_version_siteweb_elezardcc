import requests from './Instance'
const BlogServices = {
	getBlog: async () => {
		return requests.get(`/public/blogs`)
	},
	
}
export default BlogServices
