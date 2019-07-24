
<script>
    $(document).ready(function(){
        function chang() {
            var index = 0;
            var flag = false;
            var nums = $("#content").find("#scroll_img").children("li")
            var imgs = $("#content").find("#scroll_img").children("li")
            nums.eq(index).css("background", "red").siblings().css("background", "");
            nums.mouseover(function () {
                flag = true;
                index = nums.index(this);
                imgs.eq(index).show().sliblings().hide()
                nums.eq(index).css("background", "red").siblings().css("background", "")
            }).mouseout(function () {
                flag = false;
            })
            setInterval(function () {
                if (flag)return
                index++;//
                if (index > imgs.length) {
                    index = 0;
                }
                imgs.eq(index).show().siblings().hide()
                nums.eq(index).css("background", "red").siblings().css("background", "")
            }, 1000)
        }
        chang();//
    })
</script>