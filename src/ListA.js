import { faker } from '@faker-js/faker';

const ListM = Array.from({ length: 3 }, (_, index) => {
    try {
        return {
            key: index + 1,
            img: faker.image.urlLoremFlickr({ category: 'movie' }),
            article: faker.lorem.words(3),
            description: faker.lorem.sentence(10), // Ensure consistent length
            eg: faker.lorem.paragraph(2), // Ensure consistent length
            author: faker.person.fullName()
        };
    } catch (error) {
        console.error(`Error generating fake data for item ${index + 1}:`, error);
        return {
            key: index + 1,
            img: 'https://via.placeholder.com/150',
            article: 'Error generating title',
            description: 'Error generating description',
            eg: 'Error generating example. This is a placeholder text to maintain consistent length across all movie cards.',
            author: 'Unknown Author'
        };
    }
});

export default ListM;