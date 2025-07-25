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
            },{id: "dropdown-collections",
              title: "Collections",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/collections/";
              },
            },{id: "dropdown-recipes",
              title: "Recipes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/recipes/";
              },
            },{id: "post-yosemite-valley-2025",
      
        title: "Yosemite Valley 2025",
      
      description: "10 days of climbing in Yosemite, CA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/05/23/yosemite.html";
        
      },
    },{id: "post-top-photos",
      
        title: "Top Photos",
      
      description: "The best of the best!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/collections/2025/01/01/top-photos.html";
        
      },
    },{id: "post-index-2024",
      
        title: "Index 2024",
      
      description: "Climbing at Index, WA in 2024",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/collections/2025/01/01/index.html";
        
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
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-cochamó-valley-2024",
      
        title: "Cochamó Valley 2024",
      
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
