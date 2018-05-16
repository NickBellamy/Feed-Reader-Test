/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* Feed Integrity */
    describe('RSS Feeds', () => {
        
        // allFeeds is defined, and contains elements
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        // Each feed has a defined URL
        it('have defined URLs for each feed', () => {
            expect(allFeeds.every(feed => feed.url.length > 0)).toBe(true);
        });

        // Each feed has a defined name
        it('have defined names for each feed', () => {
            expect(allFeeds.every(feed => feed.name.length > 0)).toBe(true);
         });
    });

    /* Menu */
    describe('The menu', () => {
        
        const body = document.querySelector('body');
        const isMenuHidden = () => body.classList.contains('menu-hidden');
        
        // The menu element is hidden by default
        it('is hidden by default', () => {
            expect(isMenuHidden()).toBe(true);
        });

         // Toggles the menu visibility
         it('toggles visibilty when the hamburger icon is clicked', () => {
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(isMenuHidden()).toBe(false);
            menu.click();
            expect(isMenuHidden()).toBe(true);
         });
    });
    
    /* Feed Articles */
    describe('Initial Entries', () => {

        function checkEntries(element, index) {
            describe(`Feed ${index}`, () => {
                beforeEach(done => loadFeed(index, done));
                // Ensure that there is at least one initial entry
                it('contains entries', done => {
                    expect(document.querySelectorAll('.entry-link').length).toBeGreaterThan(0);
                    done();
                });
            });
        }
        allFeeds.forEach(checkEntries);
    });

    /* Feed Selection */
    describe('New Feed Selection', () => {

        let firstArticle = null;

        function checkNewContent(element, index) {
            describe(`Feed ${index}`, () => {
                beforeEach(done => loadFeed(index, done));
                afterEach(() => firstArticle = document.querySelector('article h2').innerHTML);
                // Compares articles from feeds to determine if new content is loaded on feed selection
                it('displays new content when selected', done => {
                    // Checks first article's h2, with the first article's h2 from the previous feed
                    expect(document.querySelector('article h2').innerHTML).not.toEqual(firstArticle);
                    done();
                });
            });
        }
        allFeeds.forEach(checkNewContent);
    });
}());
