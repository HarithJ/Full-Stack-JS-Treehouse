AJAX (Asynchronous Javascript and XML ) lets us update content on a web page without loading a new web page.

#4 step process
Ajax is a 4 step process:

1. Create XHR object:
```
let xhr = new XMLHttpRequest();
```
NOTE: For every request you would need to create a new XHR object.

2. Create callback function

3. Open a request:
XHR object has a method called open that allows communication with the server using GET, POST, or any other verb.
```
xhr.open('GET', < URL | Path to file >);
```

4. Send Request:
```
xhr.send()
```

#Limitations
AJAX is limited by Cross Origin Policy, meaning that AJAX can communicate from one page to another on the same server but not access other web servers, or other ports, or does not let you switch the protocols (from http to https), or other hosts.

To circumnavigate this issue, we can use web proxy, JSON with Padding, CORS (cross-origin resource sharing)
