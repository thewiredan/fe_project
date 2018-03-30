# Portfolio/Resume Site

## Description

I created this website to serve as both a portfolio/resume site for potential employers, as well 
as to demonstrate my comprehension of front-end web development, including: HTML5, CSS3, JavaScript, front-end frameworks such as Bootstrap 4, and JavaScript libraries such as jQuery.  



## Responsive Design

Leveraging the responsive design capabilities of Bootstrap 4, combined with my own custom media queries, I was able to create a website that maintains good visual appeal and usability for screen sizes ranging from a small phone to a 4k display.



## Custom CSS Classes

While I created numerous custom CSS classes, I highlight three notable ones below:

1. .strike  
The .strike custom class, along with the use of the :before pseudo-element, was used to custom format a strike-through line in the main title of the website. This allowed for a custom color to match color scheme as well as slight tilt for more visual appeal over the standard {text-decoration: line-through} css property.  

2. .responsive-img  
The .responsive-img custom class was used to set a baseline mobile-first image size for portfolio images, as well as adjust the size for larger displays in my media queries.

3. .cap-overlay  
The .cap-overlay custom class was used to style the static properties of the image overlays and hide them via the {display: none} css property in preparation for the custom JavaScript function discussed below. 



## Custom JavaScript Functions

The javascript functions I created are:

1. capShow()  
Using the jQuery hover method, when the user mouseover's the figure element, the capShow() function targets the child figcaption element. The funciton uses the .css() method to display the caption and set height and width to match the img element size, which changes due to the responsive nature of the site.

2. capHide()  
The capHide() function  uses the .css() method to set the display property back to none, hiding the caption.

