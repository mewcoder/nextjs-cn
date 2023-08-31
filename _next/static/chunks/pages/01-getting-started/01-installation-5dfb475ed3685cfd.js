(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{6837:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/01-getting-started/01-installation",function(){return n(9324)}])},9324:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return i}});var l=n(1527),r=n(7178),o=n(2783);let i=[{depth:2,value:"Automatic Installation",id:"automatic-installation"},{depth:2,value:"Manual Installation",id:"manual-installation"},{depth:3,value:"Creating directories",id:"creating-directories"},{depth:4,value:"The app directory",id:"the-app-directory"},{depth:4,value:"The pages directory (optional)",id:"the-pages-directory-optional"},{depth:4,value:"The public folder (optional)",id:"the-public-folder-optional"},{depth:2,value:"Run the Development Server",id:"run-the-development-server"}];function t(e){let s=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",code:"code",pre:"pre",span:"span",blockquote:"blockquote",strong:"strong",h3:"h3",h4:"h4",ol:"ol"},(0,o.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"System Requirements:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://nodejs.org/",children:"Node.js 16.14"})," or later."]}),"\n",(0,l.jsx)(s.li,{children:"macOS, Windows (including WSL), and Linux are supported."}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"automatic-installation",children:"Automatic Installation"}),"\n",(0,l.jsxs)(s.p,{children:["We recommend starting a new Next.js app using ",(0,l.jsx)(s.code,{children:"create-next-app"}),", which sets up everything automatically for you. To create a project, run:"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,l.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"create-next-app@latest"})]})})}),"\n",(0,l.jsx)(s.p,{children:"On installation, you'll see the following prompts:"}),"\n",(0,l.jsx)(s.pre,{"data-language":"txt","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"txt","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"What is your project named? my-app"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to use TypeScript? No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to use ESLint? No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to use Tailwind CSS? No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to use `src/` directory? No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to use App Router? (recommended) No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Would you like to customize the default import alias? No / Yes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"What import alias would you like configured? @/*"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["After the prompts, ",(0,l.jsx)(s.code,{children:"create-next-app"})," will create a folder with your project name and install the required dependencies."]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Good to know"}),":"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Next.js now ships with ",(0,l.jsx)(s.a,{href:"/docs/app/building-your-application/configuring/typescript",children:"TypeScript"}),", ",(0,l.jsx)(s.a,{href:"/docs/app/building-your-application/configuring/eslint",children:"ESLint"}),", and ",(0,l.jsx)(s.a,{href:"/docs/app/building-your-application/styling/tailwind-css",children:"Tailwind CSS"})," configuration by default."]}),"\n",(0,l.jsxs)(s.li,{children:["You can optionally use a ",(0,l.jsxs)(s.a,{href:"/docs/app/building-your-application/configuring/src-directory",children:[(0,l.jsx)(s.code,{children:"src"})," directory"]})," in the root of your project to separate your application's code from configuration files."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,l.jsx)(s.p,{children:"To manually create a new Next.js app, install the required packages:"}),"\n",(0,l.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,l.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"next@latest"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react@latest"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-dom@latest"})]})})}),"\n",(0,l.jsxs)(s.p,{children:["Open your ",(0,l.jsx)(s.code,{children:"package.json"})," file and add the following ",(0,l.jsx)(s.code,{children:"scripts"}),":"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"json","data-theme":"default",filename:"package.json",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"scripts"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"dev"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next dev"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"build"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next build"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"start"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next start"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lint"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next lint"'})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.p,{children:"These scripts refer to the different stages of developing an application:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"dev"}),": runs ",(0,l.jsx)(s.a,{href:"/docs/app/api-reference/next-cli#development",children:(0,l.jsx)(s.code,{children:"next dev"})})," to start Next.js in development mode."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"build"}),": runs ",(0,l.jsx)(s.a,{href:"/docs/app/api-reference/next-cli#build",children:(0,l.jsx)(s.code,{children:"next build"})})," to build the application for production usage."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"start"}),": runs ",(0,l.jsx)(s.a,{href:"/docs/app/api-reference/next-cli#production",children:(0,l.jsx)(s.code,{children:"next start"})})," to start a Next.js production server."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"lint"}),": runs ",(0,l.jsx)(s.a,{href:"/docs/app/api-reference/next-cli#lint",children:(0,l.jsx)(s.code,{children:"next lint"})})," to set up Next.js' built-in ESLint configuration."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"creating-directories",children:"Creating directories"}),"\n",(0,l.jsx)(s.p,{children:"Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."}),"\n",(0,l.jsxs)(s.h4,{id:"the-app-directory",children:["The ",(0,l.jsx)(s.code,{children:"app"})," directory"]}),"\n",(0,l.jsxs)(s.p,{children:["For new applications, we recommend using the ",(0,l.jsx)(s.a,{href:"/docs/app",children:"App Router"}),". This router allows you to use React's latest features and is an evolution of the ",(0,l.jsx)(s.a,{href:"/docs/pages",children:"Pages Router"})," based on community feedback."]}),"\n",(0,l.jsxs)(s.p,{children:["Create an ",(0,l.jsx)(s.code,{children:"app/"})," folder, then add a ",(0,l.jsx)(s.code,{children:"layout.tsx"})," and ",(0,l.jsx)(s.code,{children:"page.tsx"})," file. These will be rendered when the user visits the root of your application (",(0,l.jsx)(s.code,{children:"/"}),")."]}),"\n","\n",(0,l.jsxs)(s.p,{children:["Create a ",(0,l.jsx)(s.a,{href:"/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required",children:"root layout"})," inside ",(0,l.jsx)(s.code,{children:"app/layout.tsx"})," with the required ",(0,l.jsx)(s.code,{children:"<html>"})," and ",(0,l.jsx)(s.code,{children:"<body>"})," tags:"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"app/layout.tsx",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RootLayout"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  children"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  children"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReactNode"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}) {"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"lang"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">{children}</"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"app/layout.js",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RootLayout"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ children }) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"lang"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">{children}</"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Finally, create a home page ",(0,l.jsx)(s.code,{children:"app/page.tsx"})," with some initial content:"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"app/page.tsx",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Page"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello, Next.js!</"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"app/page.js",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Page"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello, Next.js!</"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Good to know"}),": If you forget to create ",(0,l.jsx)(s.code,{children:"layout.tsx"}),", Next.js will automatically create this file when running the development server with ",(0,l.jsx)(s.code,{children:"next dev"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Learn more about ",(0,l.jsx)(s.a,{href:"/docs/app/building-your-application/routing/defining-routes",children:"using the App Router"}),"."]}),"\n",(0,l.jsxs)(s.h4,{id:"the-pages-directory-optional",children:["The ",(0,l.jsx)(s.code,{children:"pages"})," directory (optional)"]}),"\n",(0,l.jsxs)(s.p,{children:["If you prefer to use the Pages Router instead of the App Router, you can create a ",(0,l.jsx)(s.code,{children:"pages/"})," directory at the root of your project."]}),"\n",(0,l.jsxs)(s.p,{children:["Then, add an ",(0,l.jsx)(s.code,{children:"index.tsx"})," file inside your ",(0,l.jsx)(s.code,{children:"pages"})," folder. This will be your home page (",(0,l.jsx)(s.code,{children:"/"}),"):"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"pages/index.tsx",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Page"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello, Next.js!</"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Next, add an ",(0,l.jsx)(s.code,{children:"_app.tsx"})," file inside ",(0,l.jsx)(s.code,{children:"pages/"})," to define the global layout. Learn more about the ",(0,l.jsx)(s.a,{href:"/docs/pages/building-your-application/routing/custom-app",children:"custom App file"}),")."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"pages/_app.tsx",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { AppProps } "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/app'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ Component"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pageProps }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppProps"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Component"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps} />"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"pages/_app.js",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ Component"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pageProps }) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Component"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps} />"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Finally, add a ",(0,l.jsx)(s.code,{children:"_document.tsx"})," file inside ",(0,l.jsx)(s.code,{children:"pages/"})," to control the initial response from the server. Learn more about the ",(0,l.jsx)(s.a,{href:"/docs/pages/building-your-application/routing/custom-document",children:"custom Document file"}),"."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"pages/_document.tsx",hasCopyCode:!0,children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Head"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Main"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" NextScript } "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/document'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Document"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Head"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Main"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NextScript"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Learn more about ",(0,l.jsx)(s.a,{href:"/docs/pages/building-your-application/routing/pages-and-layouts",children:"using the Pages Router"}),"."]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Good to know"}),": Although you can use both routers in the same project, routes in ",(0,l.jsx)(s.code,{children:"app"})," will be prioritized over ",(0,l.jsx)(s.code,{children:"pages"}),". We recommend using only one router in your new project to avoid confusion."]}),"\n"]}),"\n",(0,l.jsxs)(s.h4,{id:"the-public-folder-optional",children:["The ",(0,l.jsx)(s.code,{children:"public"})," folder (optional)"]}),"\n",(0,l.jsxs)(s.p,{children:["Create a ",(0,l.jsx)(s.code,{children:"public"})," folder to store static assets such as images, fonts, etc. Files inside ",(0,l.jsx)(s.code,{children:"public"})," directory can then be referenced by your code starting from the base URL (",(0,l.jsx)(s.code,{children:"/"}),")."]}),"\n",(0,l.jsx)(s.h2,{id:"run-the-development-server",children:"Run the Development Server"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Run ",(0,l.jsx)(s.code,{children:"npm run dev"})," to start the development server."]}),"\n",(0,l.jsxs)(s.li,{children:["Visit ",(0,l.jsx)(s.code,{children:"http://localhost:3000"})," to view your application."]}),"\n",(0,l.jsxs)(s.li,{children:["Edit ",(0,l.jsx)(s.code,{children:"app/layout.tsx"})," (or ",(0,l.jsx)(s.code,{children:"pages/index.tsx"}),") file and save it to see the updated result in your browser."]}),"\n"]})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/01-getting-started/01-installation.mdx",route:"/01-getting-started/01-installation",frontMatter:{title:"Installation",description:"Create a new Next.js application with `create-next-app`. Set up TypeScript, styles, and configure your `next.config.js` file.",related:{title:"Next Steps",description:"Learn about the files and folders in your Next.js project.",links:["getting-started/project-structure"]}},timestamp:1693484418e3,title:"Installation",headings:i},pageNextRoute:"/01-getting-started/01-installation"})}},function(e){e.O(0,[178,774,888,179],function(){return e(e.s=6837)}),_N_E=e.O()}]);