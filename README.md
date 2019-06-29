# LiteWeb
A simple javascript framework to build single page websites.

## Get Started

Install a webserver like nginx or Apache to run the website.

Add jquery to the default html file
```html
<script src="js/jquery.min.js"></script>
```

For IE support, use URLSearchParams polyfill from https://github.com/jerrybendy/url-search-params-polyfill. The same is minified and included in Example/js folder

```html
<script src="js/urlsearchparams.min.js"></script>
```

Add liteweb
``` html
<script src="js/liteweb.min.js?v=<YOUR_WEBSITE_VERSION"></script>
```
_Do note that the version mentioned here is version of the website and not of liteweb. This will ensure whenever there is a change in html files, they will show up properly without caching affecting the reload._

Add the following code to default html page at the location where you want the inner htmls to show up.

```html
<page></page>
```
## Adding Home page

Name the home page as \_home.html.

Now you can anchor tags as follows to link to the file.

```html
<a href="#home">Link to home</a>
```

## Adding Home page with custom name

Name the home pages in the format \_<FILE_NAME>.html.

Now pass the file through the source URL in <script> tag

``` html
<script src="js/liteweb.min.js?v=<YOUR_WEBSITE_VERSION&d=<FILE_NAME>"></script>
```

## Adding inner pages

Name the inner pages in the format \_<FILE_NAME>.html.

Now you can anchor tags as follows to link to the file.

```html
<a href="#<FILE_NAME">Link to FILE_NAME</a>
```
## Adding css for current link

To highlight the current link, add a css class __lw-a-current__ to your project.

Check example.css in the Example project

```css
.lw-a-current {
	border-bottom: 2px solid red;
}
```

## Final Step

Deploy the website to the webserver.

__Enjoy building single page websites.__
