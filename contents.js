const parser = new DOMParser()

// const html_parsed = parser.parseFromString()


//[get_urlName]: retrieves url from the page when extension is invoked

let current_location = location.href


const get_urlName = (loc)=>{

    console.log(loc)
}

get_urlName(current_location)


// chrome.permissions.request({
//     permissions: ['tabs'],