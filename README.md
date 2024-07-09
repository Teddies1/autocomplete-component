## Autocomplete Component

This is a project to implement an Autocomplete component, similar to those found in modern UI libraries.

The project is written in TypeScript using the Vite framework, with help from Tailwind CSS and Material UI libraries.

### Data
The component contains data from Asian and African countries. This data is fetched via an [URL]("https://api.first.org/data/v1/countries) API request.

The data is presented in the form

`{
    "status": "OK",
    "status-code": 200,
    "version": "1",
    "total": 57,
    "limit": 3,
    "offset": 0,
    "access": "public",
    "data": {
        "DZ": {
            "country": "Algeria",
            "region": "Africa"
        },
        "AO": {
            "country": "Angola",
            "region": "Africa"
        },
        "BJ": {
            "country": "Benin",
            "region": "Africa"
        }
    }
}`

where it is stripped into just the "data" object. 

