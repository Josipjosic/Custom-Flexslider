$(document).ready(function() { 

    const item_width = $('.slider li').outerWidth();          // Width of the selected items
	const left_value = item_width ;          // Value of how much items gonna move by   
    
    $('.left').on("click",function(){          // On click function

        const left_intend_up = parseInt($('.upperRow li')) + item_width
        $('.left').prop("disabled", true);          // Button disabled
        
        $('.upperRow').animate({          
            'margin-left' : left_intend_up
        }, function(){                           // Loop/move function by manipulating css
            $('.upperRow li:last').after($('.upperRow li:first'));
            $('.left').prop("disabled", false);          // Button enabled
            $('.upperRow ul').css({
                'margin-left' : left_value
            });
        });
    });

    $('.left').on("click",function(){    // On click function
   
        const left_intend_down = parseInt($('.lowerRow li')) + item_width
        $('.left').prop("disabled", true);          // Button disabled
        
        $('.lowerRow').animate({          
            'margin-left' : left_intend_down
        }, function(){                           // Loop/move function by manipulating css
            $('.lowerRow li:last').after($('.lowerRow li:first'));
            $('.left').prop("disabled", false);          // Button enabled
            $('.lowerRow ul').css({
                'margin-left' : left_value
            });
        });
        
    }); 

    $('.right').on("click",function(){          // On click function
        const left_intend_up = parseInt($('.upperRow li')) + item_width
        $('.right').prop("disabled", true);          // Button disabled
        
        $('.upperRow').animate({          
            'margin-left' : left_intend_up
        }, function(){                           // Loop/move function by manipulating css
            $('.upperRow li:first').before($('.upperRow li:last'));
            $('.right').prop("disabled", false);          // Button enabled
            $('.upperRow ul').css({
                'margin-left' : left_value
            });
        });
    });

    $('.right').on("click",function(){          // On click function
        const left_intend_down = parseInt($('.lowerRow li')) + item_width
        $('.right').prop("disabled", true);          // Button disabled 
        
        $('.lowerRow').animate({          
            'margin-left' : left_intend_down
        }, function(){                           // Loop/move function by manipulating css
            $('.lowerRow li:first').before($('.lowerRow li:last'));
            $('.right').prop("disabled", false);          // Button enabled
            $('.lowerRow ul').css({
                'margin-left' : left_value,
            });
        });
    });     
    
});