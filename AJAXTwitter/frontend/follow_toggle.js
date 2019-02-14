const APIUtil = require('./api_util');

class FollowToggle {
    constructor($el) {
        this.userId = $el.data('userId') ;
        this.followState = $el.data('initialFollowState');
        this.$el = $el;
        this.render($el);
        this.$el.on ('click', this.handleClick.bind(this));
    };
    
    render($el){
        if(this.followState === true){
            $el.text("Unfollow!!");
        }else{
            $el.text("Follow!");
        }
    };
    
    handleClick(e){
        e.preventDefault();
        if(this.followState){
            APIUtil.unfollowUser(this.userId);
        } else {
            APIUtil.followUser(this.userId);
        }
        this.followState = !this.followState
        this.render(this.$el);

    }

} 

module.exports = FollowToggle;
