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
    },{id: "post-the-incredible-hulk-2024",
      
        title: "The Incredible Hulk 2024",
      
      description: "7 days of climbing at the Hulk, CA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/09/10/hulk-trip.html";
        
      },
    },{id: "post-chamonix-2024",
      
        title: "Chamonix 2024",
      
      description: "7 days of climbing in the Chamonix, FR",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2024/07/31/chamonix.html";
        
      },
    },{id: "post-wind-river-range-2023",
      
        title: "Wind River Range 2023",
      
      description: "10 days of climbing in the Winds, WY",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2023/09/07/winds-trip.html";
        
      },
    },{id: "post-cooke-city-2022",
      
        title: "Cooke City 2022",
      
      description: "7 days of snowboarding in Cooke City",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/snowboarding/2022/03/25/cooke.html";
        
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
