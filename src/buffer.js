if(!window.jQuery) { 

    console.error('You need jQuery enabled to use BufferJS. Next versions won\'t require jQuery.')

} else {

    $(document).ready(function () {

        $("input[buffer-js]").each(function(){
            
            let buffer = 0
            let drain = 0
            let drainSpeed = 1
            let callback = null
            
            if($(this).attr('buffer-js-delay')){
                drainSpeed = $(this).attr('buffer-js-delay')
            }

            if($(this).attr('buffer-js-callback')){
                callback = $(this).attr('buffer-js-callback')
            }
    
            $(this).keypress(function () {
                updateBuffer(100)
            }).on('keydown', function(e) {
                if (e.keyCode == 8) {
                    updateBuffer(100)
                }
            })
    
            setInterval(function (callbackFunction) {
                if( !buffer < 1 ) {
                    if(buffer == 1)
                    {
                        fireCallback()
                    }
                    updateBuffer(buffer - 1)
                }
            }, drainSpeed * 10)

            function fireCallback () {
                const callbackFunction = eval( callback )
                if(typeof callbackFunction == 'function'){
                    callbackFunction()
                }
            }
    
            function updateBuffer (value) {
                buffer = value
            }
            
        })
    
    })

}