import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ShowPoster from '@/components/posters/ShowPoster.vue'

describe('ShowPoster.vue', () => {
	
	// Create a dummy poster
	let poster = {
			title: 'Test',
			category: 'testing',
			short_description: 'short description test',
			description: 'long description',
			image_url: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png'
	}
 
	it('renders the complete details of a poster', () => {

		const wrapper = mount(ShowPoster, {
			
			computed: {
				poster() {
					return poster;
				}	
			},
			
			stubs: {
				RouterLink: RouterLinkStub
			}
		})
		
		// check if the wrapper text includes the dummy poster title
		expect(wrapper.text()).to.include('back to posters');
		
		// Check that the description is on the page since that description only shows in the details
		expect(wrapper.find('[data-test="description-test"]').exists()).to.equal(true);
		
		// Check that long description text is rendered
		expect(wrapper.text()).to.include(poster.description);
	})
})
