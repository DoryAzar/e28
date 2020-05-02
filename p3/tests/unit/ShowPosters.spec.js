import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ShowPosters from '@/components/posters/ShowPosters.vue'

describe('ShowPosters.vue', () => {
	
	// Create a dummy poster
	let poster = {
			title: 'Test',
			category: 'testing',
			short_description: 'short description test',
			description: 'long description',
			image_url: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png'
	}
 
	it('renders one poster within the page of posters', () => {

		const wrapper = mount(ShowPosters, {
			propsData: {
				poster: poster
			},
			
			stubs: {
				RouterLink: RouterLinkStub
			}
		})
		
		// check if the data test exists
		expect(wrapper.find('[data-test="poster-test"]').exists()).to.equal(true);
		
		// check if the wrapper text includes the dummy poster title
		expect(wrapper.text()).to.include(poster.title);
	})
})
