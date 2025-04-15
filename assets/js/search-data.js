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
        },{id: "nav-skiing",
          title: "Skiing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skiing/";
          },
        },{id: "dropdown-gardening",
              title: "Gardening",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gardening/";
              },
            },{id: "dropdown-recipes",
              title: "Recipes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/recipes/";
              },
            },{id: "dropdown-humans",
              title: "Humans",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cast/";
              },
            },{id: "post-wind-river-range-2023",
      
        title: "Wind River Range 2023",
      
      description: "10 day trip into the Winds",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/climbing/2025/03/07/winds-trip.html";
        
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
