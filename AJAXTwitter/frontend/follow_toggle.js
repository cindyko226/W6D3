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
        if(this.followState === 'followed'){
            $el.text("Unfollow!!");
        }else if (this.followState === 'unfollowed'){
            $el.text("Follow!");
        }else if(this.followState === 'following'){
            $el.text("following");
        }else if(this.followState === 'unfollowing'){
            $el.text("unfollowing");
        }

    };
    
    handleClick(e){
        e.preventDefault();
        if(this.followState === 'followed'){
            this.followState = 'following';
            this.render(this.$el);
            APIUtil.unfollowUser(this.userId).then(()=>{
                this.followState  = this.followState === 'followed' ? 'unfollowed' : 'followed'
                this.render(this.$el);
            })
        } else {
            this.followState = 'unfollowing';
            this.render(this.$el);
            APIUtil.followUser(this.userId).then(() => {
                this.followState = this.followState === 'followed' ? 'unfollowed' : 'followed'
                this.render(this.$el);
            });
        }
        

    }

} 

module.exports = FollowToggle;
