document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('input[buffer-js]').forEach(function (item) {

        let buffer = 0
        let drainSpeed = 1
        let callback = null

        if(item.hasAttribute('buffer-js-delay'))
            drainSpeed = item.getAttribute('buffer-js-delay')

        if(item.hasAttribute('buffer-js-callback'))
            callback = item.getAttribute('buffer-js-callback')

        item.addEventListener('keypress', function () {
            updateBuffer(100)
        })

        item.addEventListener('keydown', function () {
            updateBuffer(100)
        })

        setInterval(function (callbackFunction) {
            if( !buffer < 1 )
                if(buffer == 1)
                    fireCallback()
                updateBuffer(buffer - 1)
        }, drainSpeed * 10)

        function fireCallback () {
            const callbackFunction = eval(callback)
            if(typeof callbackFunction == 'function')
                callbackFunction()
        }

        function updateBuffer (value) {
            buffer = value
        }

    })

})