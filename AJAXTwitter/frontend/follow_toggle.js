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
        let methodType = this.followState ? 'DELETE' : 'POST';
        $.ajax({
            method: methodType,
            url: `/users/${this.userId}/follow`,
            dataType: 'JSON',
        });
        this.followState = !this.followState;
        this.render(this.$el);
    }

} 

module.exports = FollowToggle;
