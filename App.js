import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restro Card Container
 *   - Restro Cards
 *    - Images
 *    - Name of the Restaurant, Star Ratings, Cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/hamburger-vector-cheese-burger-cartoon-vector_520417-685.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "976798",
          name: "Indeez - Burgers & Biryani",
          cloudinaryImageId: "8cd371a324d634975f83e486cf9fa0a3",
          locality: "Prabhat Road",
          areaName: "Prabhat Road",
          costForTwo: "₹400 for two",
          cuisines: ["Beverages", "Burgers"],
          avgRating: 4,
          parentId: "595144",
          avgRatingString: "4.0",
          totalRatingsString: "240",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/bolt%206.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/bolt%206.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=976798&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "675526",
          name: "Dominator Pizza Shop",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/3/b92d20dc-02f8-4c8e-a063-50a1dd32e6cf_81b7d987-a2b3-4212-8a16-fb33470c854d.JPG",
          locality: "Karve Nagar Road",
          areaName: "Kothrud",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Burgers"],
          avgRating: 4.1,
          parentId: "284034",
          avgRatingString: "4.1",
          totalRatingsString: "220",
          promoted: true,
          adTrackingId:
            "cid=27774551~p=6~adgrpid=27774551#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=675526~plpr=COLLECTION~eid=e238433b-b188-4ddf-b5c8-fbd1faa01a11~srvts=1745058356822~collid=83637",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-26 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹150",
            discountTag: "SAVE BIG",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27774551",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=675526&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "243625",
          name: "KFC",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4c1906b4-f727-434b-8496-a2e669269dde_243625.JPG",
          locality: "Deccan Gymkhana",
          areaName: "Deccan Gymkhana",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
          avgRating: 4.3,
          parentId: "547",
          avgRatingString: "4.3",
          totalRatingsString: "3.6K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "4.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=243625&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "982978",
          name: "Burger and More",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/10/3e5f27c0-bea1-4cab-90a8-2837d9b3a243_9de2c004-3d4d-4e2d-a73b-0506c0e678d3.JPG",
          locality: "Prabhat Road",
          areaName: "Prabhat Road",
          costForTwo: "₹300 for two",
          cuisines: ["Fast Food", "Burgers"],
          avgRating: 3.9,
          parentId: "51167",
          avgRatingString: "3.9",
          totalRatingsString: "4",
          promoted: true,
          adTrackingId:
            "cid=27207915~p=7~adgrpid=27207915#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=982978~plpr=COLLECTION~eid=0b78138d-c363-49bc-8f63-78aff7db6048~srvts=1745058356822~collid=83637",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27207915",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=982978&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "506984",
          name: "McDonald's Gourmet Burger Collection",
          cloudinaryImageId: "byhsz033wskdgxxjymk8",
          locality: "Narayan Peth",
          areaName: "Swargate",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          parentId: "10761",
          avgRatingString: "4.4",
          totalRatingsString: "36",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-20 00:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/bolt%206.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/bolt%206.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=506984&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "602068",
          name: "Filli Bites",
          cloudinaryImageId: "d8dd3270f3a17eeb5eac84d87aaeddca",
          locality: "Cantonment Board",
          areaName: "Camp Area",
          costForTwo: "₹300 for two",
          cuisines: ["Fast Food", "American", "Lebanese"],
          avgRating: 4.4,
          parentId: "79406",
          avgRatingString: "4.4",
          totalRatingsString: "1.0K+",
          promoted: true,
          adTrackingId:
            "cid=27896903~p=8~adgrpid=27896903#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=602068~plpr=COLLECTION~eid=660947a4-d6e2-471b-aac9-93f3ef3404d1~srvts=1745058356822~collid=83637",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-20 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27896903",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=602068&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "499237",
          name: "Sam And Sam Burger",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/6/b93201c2-3e8e-419d-8e42-7044dde79582_c5661003-d724-4c5f-9fa6-e8e499804cce.JPG",
          locality: "Narayan Peth",
          areaName: "Shaniwar Peth",
          costForTwo: "₹200 for two",
          cuisines: ["American", "Fast Food", "Pizzas"],
          avgRating: 3.2,
          parentId: "316381",
          avgRatingString: "3.2",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=499237&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "794915",
          name: "Sandwich Express",
          cloudinaryImageId: "87d7877e4ca8634bcf01b01ca4445061",
          locality: "Tarangan Apartment",
          areaName: "Kothrud",
          costForTwo: "₹300 for two",
          cuisines: ["Fast Food", "Beverages", "Snacks"],
          avgRating: 4.3,
          parentId: "801",
          avgRatingString: "4.3",
          totalRatingsString: "633",
          promoted: true,
          adTrackingId:
            "cid=27905140~p=9~adgrpid=27905140#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=794915~plpr=COLLECTION~eid=d62cfeb7-9801-4505-b174-fc41bcfc81f6~srvts=1745058356822~collid=83637",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27905140",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=794915&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "34995",
          name: "UFO Fries & Corn",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/24/12bf58b6-5e01-4428-b089-55c29aae0c72_1a467819-9cd4-4c76-9116-9452419c6193.jpg",
          locality: "F.C. Road",
          areaName: "Shivajinagar",
          costForTwo: "₹300 for two",
          cuisines: ["Fast Food"],
          avgRating: 4.1,
          parentId: "2503",
          avgRatingString: "4.1",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=34995&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData?.card?.card?.info;

  return (
    <div className="res-card">
      <img
        className="dish-image"
        alt="dish-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resData) => (
          <RestaurantCard
            key={resData?.card?.card?.info?.id}
            resData={resData}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
