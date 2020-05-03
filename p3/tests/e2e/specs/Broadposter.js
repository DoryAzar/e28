describe('Broadposter', () => {
	
	
	// Define testing strings
	const modifiedTitle = 'xxxMODIFIEDxxx'
	
	
	// Create a dummy poster
	let poster = {
			title: 'xxxTESTxxx ' ,
			category: 'testing',
			short_description: 'short description test',
			description: 'long description'
	}
	
	
	/* TEST CASE 1: VISIT POSTERS PAGE
	 * Get to the page
	 * Validate that there is a share button
	 */
	it('Visit posters page', () => {
		
		// visit the posters page
		cy.visit('/')
		
		cy.get('[data-test="new-button"]').contains('Share your story')
	})
	
	/* TEST CASE 2: CREATE POSTERS
	 * Visit the posters page
	 * Clicks on the share story button
	 * Fill the form 
	 * Click on save
	 * Repeat to create 2 posters
	 */
	
	it('Create posters', () => {
		
		
		// do it 2 times
		for(i=0; i< 2; i++) {
			
			// visit the posters page
			cy.visit('/')
			
			// Clicks on the share story button to create a new poster
			cy.get('[data-test="new-button"]').click()
			
			// fill the form: we use ids given that they are stable
			cy.get('#title').type(poster.title + i)
			cy.get('#category').type(poster.category)
			cy.get('#short_description').type(poster.short_description)
			cy.get('#description').type(poster.description)


			// Upload a file
			cy.fixture('../resources/test_image.jpg', 'base64').then(testImage => {
				cy.get('input[type=file]').then(el => {
					const type='image/jpg'

					// Blob the uploaded file
					Cypress.Blob.base64StringToBlob(testImage, type).then(blob => {

						// create a file out of the blob
						const testFile = new File([blob], '../resources/test_image.jpg', {type: type})
						const dataTransfer = new DataTransfer()
						dataTransfer.items.add(testFile)
						el[0].files = dataTransfer.files
					})

				})

			})
			
			// click save
			cy.get('[data-test="save-button"]').click()
			
			// Wait a while to make sure the saving completed the redirection
			cy.wait(3000)
		}

	})

	/* TEST CASE 3: VIEW POSTERS
	 * Visit the posters page
	 * Check if there is at least one poster
	 * Check if the added dummy test poster is added
	 */
	
	it('View all posters ', () => {
		
		// visit the posters page
		cy.visit('/')
		
		// Check if there is at least one poster
		cy.get('[data-test="poster-test"]').its('length').should('be.gte', 1)
		
		// check if the added dummy test poster is added
		cy.contains('[data-test="poster-test"]', poster.title)
		
	})
	
	/* TEST CASE 4: VIEW POSTER DETAILS
	 * Visit the posters page
	 * Click on a poster
	 * Check if the description is on the screen
	 */
	
	it('View the poster details page', () => {
		
		// visit the posters page
		cy.visit('/')
		
		// Click on one of the test posters created
		cy.get('[data-test="poster-test"]').contains(poster.title).click()
		
		// Check if the description is on the screen
		cy.contains('[data-test="description-test"]', poster.description)
		
	})
	
	/* TEST CASE 5: UPDATE POSTER
	 * Visit posters page
	 * Click on one of the test posters
	 * Click on edit
	 * Change the title to 'Modified'
	 * Click on save
	 * Check if the 'Modified' title can be seen on the posters page
	 */
	
	it('Update a poster', () => {
		
		// visit directly the create page from URL
		cy.visit('/')
		
		// Click on one of the test posters created
		cy.get('[data-test="poster-test"]').contains(poster.title).click()
		
		// Click on edit
		cy.get('[data-test="edit-button"]').click()
		
		// Change the title to 'Modified'
		cy.get('#title').clear()
		cy.get('#title').type(modifiedTitle)
		
		// Click on save
		cy.get('[data-test="save-button"]').click()
		
		// wait a while to make sure that the redirection took place
		cy.wait(3000)
		
		// visit the posters page
		cy.visit('/')
		
		// Check if the 'Modified' title can be seen on the posters page
		cy.contains('[data-test="poster-test"]', modifiedTitle)	
		
	})
	
	/* TEST CASE 6: DELETE A POSTER
	 * Visit posters page
	 * Click on one of the test posters
	 * Click on edit
	 * Click on delete
	 * Check if the 'Modified' title can be seen on the posters page
	 */	
	
	it('Delete a poster', () => {
		
		// visit the posters page
		cy.visit('/')
		
		let currentTotal = cy.get('[data-test="poster-test"]').its('length')
		
		// Click on one of the test posters
		cy.get('[data-test="poster-test"]').contains(poster.title).click()
		
		// Click on edit
		cy.get('[data-test="edit-button"]').click()
		
		// Click on delete
		cy.get('[data-test="delete-button"]').click()
		
		// wait a bit
		cy.wait(3000)
		
		// visit the posters page
		cy.visit('/')
		
		// Check that the number of posters is less
		//cy.get('[data-test="poster-test"]').its('length').should('be.st', currentTotal)
		
		// Assert that the updated title cannot be seen on the posters page
		!cy.contains('[data-test="poster-test"]', modifiedTitle)	
		
	})
	
	
})
