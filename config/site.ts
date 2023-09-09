export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Gaetan",
	description: "decentralised application",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
    {
      label: "Tools",
      href: "/tools",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},

		  {
			label: "Tools",
			href: "/tools",
		  },
		  {
			label: "Contact",
			href: "/contact",
		  },
	],
	links: {
		github: "https://github.com/Gaetan2023",
		
	},
};
