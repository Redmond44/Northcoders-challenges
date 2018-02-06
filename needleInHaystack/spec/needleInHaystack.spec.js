const path = require('path');
const expect = require('chai').expect;

const { needleInHaystack } = require(path.join(__dirname, '..', './needleInHaystack.js'));

describe('needleInHaystack()', function () {
  const haystack = {
    name: 'Northcoders',
    description: 'Awesome coding bootcamp',
    staff: {
      tutors: 'James and Chris',
      support: 'Louise'
    },
    contactDetails: {
      web: 'https://northcoders.com',
      phone: '',
      address: {
        office: 'Northcoders, Gold 67, The Sharp Project, Manchester',
        postcode: 'M40 5BJ'
      }
    },
    reviews: {
      april: {
        chris: 'I love Northcoders',
        james: 'It is awesome!'
      },
      may: {
        louise: 'Northcoders is a fantastic coding bootcamp'
      }
    }
  };

  it('returns an empty array if no needle finded', () => {
    const haystack1 = {
      name: 'Northcoders',
      description: 'Awesome coding bootcamp',
      phone: ''
    };
    expect(needleInHaystack(haystack1, 'Saussages')).to.eql([]);
    expect(needleInHaystack(haystack, 'Saussages')).to.eql([]);
  });
  it('returns a property which contains the needle if not nested object', () => {
    const haystack1 = {
      name: 'Northcoders',
      description: 'Awesome coding bootcamp',
      phone: ''
    };
    expect(needleInHaystack(haystack1, 'Northcoders')).to.eql(['name']);
  });
  it('returns a property which contains the needle even if the needle is capitalised', () => {
    const haystack1 = {
      web: 'https://northcoders.com',
      description: 'Awesome coding bootcamp',
      phone: ''
    };
    expect(needleInHaystack(haystack1, 'Northcoders')).to.eql(['web']);
  });
  it('returns an alphabetically sorted array with all properties which contains the needle', () => {
    const haystack1 = {
      web: 'https://northcoders.com',
      name: 'Northcoders',
      description: 'Awesome coding bootcamp',
      phone: ''
    };
    expect(needleInHaystack(haystack1, 'Northcoders')).to.eql(['name', 'web']);
  });
  it('returns a property which contains the needle with dot notation "path" if nested object', () => {
    const haystack1 = {
      description: 'Awesome coding bootcamp',
      address: {
        office: 'Northcoders, Gold 67, The Sharp Project, Manchester',
        postcode: 'M40 5BJ'
      }
    };
    expect(needleInHaystack(haystack1, 'Northcoders')).to.eql(['address.office']);
  });
  it('returns all properties which contains the needle with dot notation "path" if nested object', () => {
    const haystack1 = {
      description: 'Awesome coding bootcamp',
      address: {
        office: 'Northcoders, Gold 67, The Sharp Project, Manchester',
        postcode: 'M40 5BJ'
      },
      name: 'Northcoders',
      reviews: {
        chris: 'I love Northcoders',
        james: 'It is awesome!'
      },
    };
    expect(needleInHaystack(haystack1, 'Northcoders')).to.eql(['address.office', 'name', 'reviews.chris']);
    expect(needleInHaystack(haystack, 'M40')).to.eql(['contactDetails.address.postcode']);
    expect(needleInHaystack(haystack, 'coding')).to.eql(['description', 'reviews.may.louise']);
    expect(needleInHaystack(haystack, 'Northcoders')).to.eql(['contactDetails.address.office', 'contactDetails.web', 'name', 'reviews.april.chris', 'reviews.may.louise']);
  });
});