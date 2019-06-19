# LiteWeb
A simple javascript framework to build single page websites.

## Get Started

Install a webserver like nginx or Apache to run the website.

Add jquery to the default html file
```html
<script src="js/jquery.min.js"></script>
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

Home page should be named as \_home.html.

Now you can anchor tags as follows to link to the file.

```html
<a href="#home">Link to home</a>
```

## Adding inner pages

Name the inner pages in the format \_<FILE_NAME>.html.

Now you can anchor tags as follows to link to the file.

```html
<a href="#<FILE_NAME">Link to FILE_NAME</a>
```

## Final Step

Deploy the website to the webserver.

__Enjoy building single page websites.__
