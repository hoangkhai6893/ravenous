const apiKey = 'Qqshh5dwi5Hu4MYYLoxj1X8GLUMmYmZWkiGA3HQf30n-2SNDWJ_DJLCAtVeUJze0h2GYBYgQt9NDUUYeItNnyg6gGBSl9qegyhAGcAsZmG_VbcBT8oxsUl8ehEHFXnYx' ;
const ClientID = 'bGtkXsrIGhriZK7RMnSpUQ'

const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if( jsonResponse.businesses){
                return jsonResponse.businesses.map( (business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address:business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };

                });
            }
        })

    }
}

export default Yelp;