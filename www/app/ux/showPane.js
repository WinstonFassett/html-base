define(['jquery'], function ($) {
    var animationDuration = 250;
    var defaultTransition = undefined; // 'zoomFadeIn';
    var activeClass = 'visible';
    var animatedClass = 'animated';
    function getOpposite(transition) {
        // TODO: replace this hack
        return transition.replace("In","Out").replace("Right", "Left");
    }

    function showPane(id, transition, goingBack) {
        console.log('showPane', arguments);
        var pane = $('.pane.' + id),
            activePane = pane.parent().children("." + activeClass);
        transition = transition || defaultTransition;
        //pane.showPane({slideFrom: goingBack==true ? 'left' : 'right'});
        //console.log('got active pane', activePane);
        if (activePane !== pane) {
            //console.log('changing active pane', activePane, pane, transition);
            if (transition) {
                pane.addClass(activeClass);
                pane.addClass(animatedClass);
                pane.addClass(transition);
                window.setTimeout(function () {
                    //console.log('done transitioning');
                    pane.removeClass(transition);
                    pane.removeClass(animatedClass);
                }, animationDuration);

                var oppositeTransition = getOpposite(transition);
                activePane.addClass(animatedClass);
                activePane.addClass(oppositeTransition);

                window.setTimeout(function () {
                    activePane.removeClass(oppositeTransition);
                    activePane.removeClass(animatedClass);
                    activePane.removeClass(activeClass);
                }, animationDuration);
            } else {
                activePane.removeClass(activeClass);
                pane.addClass(activeClass);
                
            }
            

        }


        // show with transition
    }

    return showPane;
});