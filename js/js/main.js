$("#navbar a, .btn").on("click", function(event) 
{
    if (this.hash !=="") {

        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
        
    }
    
});
window.addEventListener('scroll', function name(params) {
    
})