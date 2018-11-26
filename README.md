## Rect boler template fro Heroku Cloud based on React react & express  

1. Clone this app  
2. Local PostgreSQL start
3. yarn    
4. yarn deb  

#Bootstrap & Reactstrap  Install guide
1. Bootstrap is dependent on ==> jQuery and Popper,  
these are defined as peerDependencies, this means that you will have to make sure to add both of them  
to your package.json using yarn add  
  
 "jquery": "^3.3.1",  
 "popper.js": "^1.14.5",  
   
      
2. For Bootstrap to compile, there are two options  
  [Importing Precompiled Sass] To enjoy the full potential of Bootstrap and customize it to your needs,  
  use the source files as a part of your project’s bundling process.
  (https://getbootstrap.com/docs/4.0/getting-started/webpack/)
  (https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html)
  For Precompiled Sass to make sure you install and use the required loaders ==> "sass-loader, postcss-loader with Autoprefixer.  

  "autoprefixer": "^9.3.1",  
  "sass-loader": "^7.1.0",  
  "postcss-loader": "^3.0.0",  
  "node-sass": "^4.7.2",


  [Importing Compiled CSS]  
  Alternatively, you may use Bootstrap’s ready-to-use css by simply adding this line to your project’s entry point:  
  import 'bootstrap/dist/css/bootstrap.min.css';  

  In this case you may use your existing rule for css without any special modifications to webpack config except  
  you don’t need to add sass-loader above. Just add ==> style-loader and css-loader.  
  "css-loader": "^1.0.1",  
  "style-loader": "^0.23.1",  