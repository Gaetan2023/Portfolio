(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6494:function(r,e,a){Promise.resolve().then(a.bind(a,7098))},7098:function(r,e,a){"use strict";a.r(e),a.d(e,{default:function(){return b}});var t=a(4357),n=a(111),s=a.n(n),o=a(9616),d={solid:{default:"bg-default text-default-foreground",primary:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",success:"bg-success text-success-foreground",warning:"bg-warning text-warning-foreground",danger:"bg-danger text-danger-foreground",foreground:"bg-foreground text-background"},shadow:{default:"shadow-lg shadow-default/50 bg-default text-default-foreground",primary:"shadow-lg shadow-primary/40 bg-primary text-primary-foreground",secondary:"shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",success:"shadow-lg shadow-success/40 bg-success text-success-foreground",warning:"shadow-lg shadow-warning/40 bg-warning text-warning-foreground",danger:"shadow-lg shadow-danger/40 bg-danger text-danger-foreground",foreground:"shadow-lg shadow-foreground/40 bg-foreground text-background"},bordered:{default:"bg-transparent border-default text-foreground",primary:"bg-transparent border-primary text-primary",secondary:"bg-transparent border-secondary text-secondary",success:"bg-transparent border-success text-success",warning:"bg-transparent border-warning text-warning",danger:"bg-transparent border-danger text-danger",foreground:"bg-transparent border-foreground text-foreground"},flat:{default:"bg-default/40 text-default-foreground",primary:"bg-primary/20 text-primary",secondary:"bg-secondary/20 text-secondary",success:"bg-success/20 text-success-600 dark:text-success",warning:"bg-warning/20 text-warning-600 dark:text-warning",danger:"bg-danger/20 text-danger dark:text-danger-500",foreground:"bg-foreground/10 text-foreground"},faded:{default:"border-default bg-default-100 text-default-foreground",primary:"border-default bg-default-100 text-primary",secondary:"border-default bg-default-100 text-secondary",success:"border-default bg-default-100 text-success",warning:"border-default bg-default-100 text-warning",danger:"border-default bg-default-100 text-danger",foreground:"border-default bg-default-100 text-foreground"},light:{default:"bg-transparent text-default-foreground",primary:"bg-transparent text-primary",secondary:"bg-transparent text-secondary",success:"bg-transparent text-success",warning:"bg-transparent text-warning",danger:"bg-transparent text-danger",foreground:"bg-transparent text-foreground"},ghost:{default:"border-default text-default-foreground hover:!bg-default",primary:"border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",secondary:"border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",success:"border-success text-success hover:!text-success-foreground hover:!bg-success",warning:"border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",danger:"border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",foreground:"border-foreground text-foreground hover:!bg-foreground"}},l=a(3222),i=a(6774),c=(0,l.tv)({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-none","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent",...i.Dh],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",md:"px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",lg:"px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-unit-0 !gap-unit-0",false:"[&>svg]:max-w-[theme(spacing.unit-8)]"},disableAnimation:{true:"!transition-none",false:"data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1,disableAnimation:!1},compoundVariants:[{variant:"solid",color:"default",class:d.solid.default},{variant:"solid",color:"primary",class:d.solid.primary},{variant:"solid",color:"secondary",class:d.solid.secondary},{variant:"solid",color:"success",class:d.solid.success},{variant:"solid",color:"warning",class:d.solid.warning},{variant:"solid",color:"danger",class:d.solid.danger},{variant:"shadow",color:"default",class:d.shadow.default},{variant:"shadow",color:"primary",class:d.shadow.primary},{variant:"shadow",color:"secondary",class:d.shadow.secondary},{variant:"shadow",color:"success",class:d.shadow.success},{variant:"shadow",color:"warning",class:d.shadow.warning},{variant:"shadow",color:"danger",class:d.shadow.danger},{variant:"bordered",color:"default",class:d.bordered.default},{variant:"bordered",color:"primary",class:d.bordered.primary},{variant:"bordered",color:"secondary",class:d.bordered.secondary},{variant:"bordered",color:"success",class:d.bordered.success},{variant:"bordered",color:"warning",class:d.bordered.warning},{variant:"bordered",color:"danger",class:d.bordered.danger},{variant:"flat",color:"default",class:d.flat.default},{variant:"flat",color:"primary",class:d.flat.primary},{variant:"flat",color:"secondary",class:d.flat.secondary},{variant:"flat",color:"success",class:d.flat.success},{variant:"flat",color:"warning",class:d.flat.warning},{variant:"flat",color:"danger",class:d.flat.danger},{variant:"faded",color:"default",class:d.faded.default},{variant:"faded",color:"primary",class:d.faded.primary},{variant:"faded",color:"secondary",class:d.faded.secondary},{variant:"faded",color:"success",class:d.faded.success},{variant:"faded",color:"warning",class:d.faded.warning},{variant:"faded",color:"danger",class:d.faded.danger},{variant:"light",color:"default",class:[d.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[d.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[d.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[d.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[d.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[d.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:d.ghost.default},{variant:"ghost",color:"primary",class:d.ghost.primary},{variant:"ghost",color:"secondary",class:d.ghost.secondary},{variant:"ghost",color:"success",class:d.ghost.success},{variant:"ghost",color:"warning",class:d.ghost.warning},{variant:"ghost",color:"danger",class:d.ghost.danger},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-l-small last:rounded-r-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-l-medium last:rounded-r-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-l-large last:rounded-r-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-l-full last:rounded-r-full"},{isInGroup:!0,variant:["bordered","ghost"],class:"[&:not(:first-child)]:ml-[calc(theme(borderWidth.medium)*-1)]"},{isIconOnly:!0,size:"sm",class:"min-w-unit-8 w-unit-8 h-unit-8"},{isIconOnly:!0,size:"md",class:"min-w-unit-10 w-unit-10 h-unit-10"},{isIconOnly:!0,size:"lg",class:"min-w-unit-12 w-unit-12 h-unit-12"}]});(0,l.tv)({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}});var u=a(8111);let g=(0,u.tv)({base:"tracking-tight inline font-semibold",variants:{color:{violet:"from-[#FF1CF7] to-[#b249f8]",yellow:"from-[#FF705B] to-[#FFB457]",blue:"from-[#5EA2EF] to-[#0072F5]",cyan:"from-[#00b7fa] to-[#01cfea]",green:"from-[#6FEE8D] to-[#17c964]",pink:"from-[#FF72E1] to-[#F54C7A]",foreground:"dark:from-[#FFFFFF] dark:to-[#4B4B4B]"},size:{sm:"text-3xl lg:text-4xl",md:"text-[2.3rem] lg:text-5xl leading-9",lg:"text-4xl lg:text-6xl"},fullWidth:{true:"w-full block"}},defaultVariants:{size:"md"},compoundVariants:[{color:["violet","yellow","blue","cyan","green","pink","foreground"],class:"bg-clip-text text-transparent bg-gradient-to-b"}]}),f=(0,u.tv)({base:"w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",variants:{fullWidth:{true:"!w-full"}},defaultVariants:{fullWidth:!0}});var h=a(3795);function b(){return(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 py-8 md:py-10",children:[(0,t.jsxs)("div",{className:" text-white mx-auto px-4 relative   sm:w-full lg:w-full inline-block max-w-lg text-center justify-center ",children:[(0,t.jsx)("h1",{className:g(),children:"Hellow! welcome to my \xa0"}),(0,t.jsx)("h1",{className:g({color:"green"}),children:" Web3\xa0"}),(0,t.jsx)("br",{}),(0,t.jsx)("h1",{className:g(),children:"portfolio page. I am  developer on blockchain ethereum"}),(0,t.jsx)("h2",{className:f({class:"mt-4"})})]}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)(o.O,{href:"/blog",className:c({color:"primary",radius:"full",variant:"shadow"}),children:"start"}),(0,t.jsxs)(o.O,{isExternal:!0,as:s(),className:c({variant:"bordered",radius:"full"}),href:"https://github.com/Gaetan2023",children:[(0,t.jsx)(h.ET,{size:20}),"GitHub"]})]})]})}},3795:function(r,e,a){"use strict";a.d(e,{ET:function(){return n},Ve:function(){return s},ek:function(){return o}});var t=a(4357);a(6439);let n=r=>{let{size:e=24,width:a,height:n,...s}=r;return(0,t.jsx)("svg",{height:e||n,viewBox:"0 0 24 24",width:e||a,...s,children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",fill:"currentColor",fillRule:"evenodd"})})},s=r=>{let{size:e=24,width:a,height:n,...s}=r;return(0,t.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:e||n,role:"presentation",viewBox:"0 0 24 24",width:e||a,...s,children:(0,t.jsx)("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})})},o=r=>{let{size:e=24,width:a,height:n,...s}=r;return(0,t.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:e||n,role:"presentation",viewBox:"0 0 24 24",width:e||a,...s,children:(0,t.jsxs)("g",{fill:"currentColor",children:[(0,t.jsx)("path",{d:"M19 12a7 7 0 11-7-7 7 7 0 017 7z"}),(0,t.jsx)("path",{d:"M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"})]})})}},111:function(r,e,a){r.exports=a(9101)}},function(r){r.O(0,[471,696,702,431,744],function(){return r(r.s=6494)}),_N_E=r.O()}]);