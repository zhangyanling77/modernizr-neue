!function(){var nativeAddAll=Cache.prototype.addAll,userAgent=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(userAgent)var agent=userAgent[1],version=parseInt(userAgent[2]);nativeAddAll&&(!userAgent||"Firefox"===agent&&version>=46||"Chrome"===agent&&version>=50)||(Cache.prototype.addAll=function(requests){function NetworkError(message){this.name="NetworkError",this.code=19,this.message=message}var cache=this;return NetworkError.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return requests=requests.map(function(request){return request instanceof Request?request:String(request)}),Promise.all(requests.map(function(request){"string"==typeof request&&(request=new Request(request));var scheme=new URL(request.url).protocol;if("http:"!==scheme&&"https:"!==scheme)throw new NetworkError("Invalid scheme");return fetch(request.clone())}))}).then(function(responses){if(responses.some(function(response){return!response.ok}))throw new NetworkError("Incorrect response status");return Promise.all(responses.map(function(response,i){return cache.put(requests[i],response)}))}).then(function(){})},Cache.prototype.add=function(request){return this.addAll([request])})}();
//# sourceMappingURL=index.js.map