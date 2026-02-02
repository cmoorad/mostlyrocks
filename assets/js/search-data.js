// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about";
          },
        },{id: "nav-rock-climbing",
          title: "Rock Climbing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/rock-climbing/";
          },
        },{id: "dropdown-snowboarding",
              title: "Snowboarding",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/snowboarding/";
              },
            },{id: "dropdown-backrafting",
              title: "Backrafting",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/backrafting/";
              },
            },{id: "dropdown-recipes",
              title: "Recipes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/recipes/";
              },
            },{id: "dropdown-gardening",
              title: "Gardening",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gardening/";
              },
            },{id: "dropdown-collections",
              title: "Collections",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/collections/";
              },
            },{id: "post-gallery",
      
        title: "Gallery",
      
      description: "Some of my favorite shots across the years",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/collections/2025/12/21/favorite-photos.html";
        
      },
    },{id: "post-indian-creek-2025",
      
        title: "Indian Creek 2025",
      
      description: "1 week in Indian Creek, UT",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/11/02/indian-creek.html";
        
      },
    },{id: "post-sardinia-amp-chamonix-2025",
      
        title: "Sardinia &amp; Chamonix 2025",
      
      description: "2 weeks of weddings and climbing in Italy and France",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/09/18/europe.html";
        
      },
    },{id: "post-panorama-lake",
      
        title: "Panorama Lake",
      
      description: "A day trip to raft this cobalt-blue lake",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/backrafting/2025/08/10/panorama.html";
        
      },
    },{id: "post-squamish-2025",
      
        title: "Squamish 2025",
      
      description: "6 days in Squamish, BC",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/07/21/squamish.html";
        
      },
    },{id: "post-yosemite-2025",
      
        title: "Yosemite 2025",
      
      description: "10 days of climbing in Yosemite, CA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/05/23/yosemite.html";
        
      },
    },{id: "post-washington-2025",
      
        title: "Washington 2025",
      
      description: "Snowboarding in Washington state in 2025.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2025/05/01/washington-2025.html";
        
      },
    },{id: "post-red-rock-bishop-2025",
      
        title: "Red Rock + Bishop 2025",
      
      description: "1 week of climbing at Red Rocks, NV and Bishop, CA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/03/29/red-rock-and-bishop-2025.html";
        
      },
    },{id: "post-gardening-2025",
      
        title: "Gardening 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/gardening/2025/01/01/gardening-2025.html";
        
      },
    },{id: "post-snow-days",
      
        title: "Snow Days",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2025/01/01/wildflowers.html";
        
      },
    },{id: "post-snow-days",
      
        title: "Snow Days",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2025/01/01/snow-days.html";
        
      },
    },{id: "post-snow-days",
      
        title: "Snow Days",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2025/01/01/latte-art.html";
        
      },
    },{id: "post-alpine-rafting",
      
        title: "Alpine Rafting",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2025/01/01/alpine-rafting.html";
        
      },
    },{id: "post-leavenworth-2025",
      
        title: "Leavenworth 2025",
      
      description: "The Tempest, Liberty Crack, and other local adventures",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/01/01/leavenworth-2025.html";
        
      },
    },{id: "post-index-2025",
      
        title: "Index 2025",
      
      description: "Climbing at Index, WA in 2025",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/01/01/index-2025.html";
        
      },
    },{id: "post-alpine-lake-packrafting",
      
        title: "Alpine Lake Packrafting",
      
      description: "Pictures from packrafting in various alpine lakes.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2025/01/01/alpine-packrafting.html";
        
      },
    },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
        
      },
    },{id: "post-the-incredible-hulk-2024",
      
        title: "The Incredible Hulk 2024",
      
      description: "7 days of climbing at the Hulk, CA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/09/10/hulk-trip.html";
        
      },
    },{id: "post-chamonix-2024",
      
        title: "Chamonix 2024",
      
      description: "7 days of climbing in Chamonix, FR",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/07/31/chamonix.html";
        
      },
    },{id: "post-washington-2024",
      
        title: "Washington 2024",
      
      description: "Snowboarding in Washington state in 2024.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2024/07/01/washington-2024.html";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-cochamó-2024",
      
        title: "Cochamó 2024",
      
      description: "3 weeks of climbing in Cochamó, Chile",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/03/10/cochamo.html";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
        
      },
    },{id: "post-milk-bread",
      
        title: "Milk Bread",
      
      description: "A Japanese sweet bread with a white, pillowy crumb",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/recipes/2024/01/06/milk-bread.html";
        
      },
    },{id: "post-cooke-city-2023",
      
        title: "Cooke City 2023",
      
      description: "New Years at the Cooke City yurt, MT.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2024/01/01/cooke-2023.html";
        
      },
    },{id: "post-leavenworth-2024",
      
        title: "Leavenworth 2024",
      
      description: "Dragons of Eden, W Face of CBR, and other local climbs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/01/01/leavenworth-2024.html";
        
      },
    },{id: "post-index-2024",
      
        title: "Index 2024",
      
      description: "Climbing at Index, WA in 2024",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/01/01/index-2024.html";
        
      },
    },{id: "post-indian-creek-2023",
      
        title: "Indian Creek 2023",
      
      description: "2 weeks of climbing in Indian Creek, UT",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2023/11/12/indian-creek.html";
        
      },
    },{id: "post-wind-river-range-2023",
      
        title: "Wind River Range 2023",
      
      description: "10 days of climbing in the Winds, WY",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2023/09/07/winds-trip.html";
        
      },
    },{id: "post-country-bread",
      
        title: "Country Bread",
      
      description: "Pan de Champagne, a rustic French sourdough loaf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/recipes/2023/07/23/country-bread.html";
        
      },
    },{id: "post-washington-2023",
      
        title: "Washington 2023",
      
      description: "Snowboarding in Washington state in 2023.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2023/07/01/washington-2023.html";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/audios.html";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/24/videos.html";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/tables.html";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
        
      },
    },{id: "post-leavenworth-2023",
      
        title: "Leavenworth 2023",
      
      description: "Solid Gold, the Valkyrie, and other local rock climbs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2023/01/01/leavenworth-2023.html";
        
      },
    },{id: "post-index-2023",
      
        title: "Index 2023",
      
      description: "A year of climbing at Index, WA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2023/01/01/index-2023.html";
        
      },
    },{id: "post-index-2023",
      
        title: "Index 2023",
      
      description: "A year of climbing at Index, WA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/hidden/2023/01/01/template.html";
        
      },
    },{id: "post-wind-river-range-2022",
      
        title: "Wind River Range 2022",
      
      description: "3 days of climbing in the Winds, WY",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2022/08/29/winds.html";
        
      },
    },{id: "post-cooke-city-2022",
      
        title: "Cooke City 2022",
      
      description: "7 days of snowboarding in Cooke City",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2022/03/25/cooke.html";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-cabin-creek-2022",
      
        title: "Cabin Creek 2022",
      
      description: "A cold New Years Eve at Cabin Creek Cabin, MT",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2022/01/02/cabin-creek.html";
        
      },
    },{id: "post-leavenworth-2022",
      
        title: "Leavenworth 2022",
      
      description: "Acid Baby, the Hitchhiker, Bergner-Stanley, and other local adventures",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2022/01/01/leavenworth-2022.html";
        
      },
    },{id: "post-cooke-city-2021",
      
        title: "Cooke City 2021",
      
      description: "A week of snowboarding around Cooke City, MT.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2021/01/05/cooke-2021.html";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/05/15/images.html";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6D%6F%6F%72%61%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
