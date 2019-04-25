# Jigsaw puzzle game

### **1.How to cut the picture into corresponding size？**
#The previous method is to use photoshop to cut the image into the corresponding size of the image. This method is not flexible, if you want to change the picture, you have to go to cut the picture, very troublesome.

#Now I use canvas, the picture is a whole JPG or PNG, import the picture into the canvas canvas, and then call the getImageData method of context context to process the picture into small pictures, which are the basic units of the puzzle.
```
renderImg: function (image) {
            var index = 0;
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    this.context.drawImage(image, 300 * j, 300 * i, 300, 600, 0, 0, 300, 300);
                    this.imgArr[index].src = this.canvas.toDataURL('image/jpeg');
                    this.imgArr[index].id = index;
                    index++;
                }
            }
        },
```
### **2.How to tell if the game is over?**
#Add custom attributes to the small picture just generated, and judge them one by one after the small picture is moved in the later stage. If the order is correct, the big picture will be successfully spliced, allowing it to enter the next level.
```
isSuccess: function () {
            var imgLikeArr = document.querySelectorAll('img'),
                imgArr = Array.prototype.slice.call(imgLikeArr),
                len = imgArr.length, i,
                flag = true, self = this;

            for (i = 0; i < len; i++) {
                if (imgArr[i].id != i) {
                    flag = false;
                }
            }

            if (flag) {
                setTimeout(function () {
                    self.showtip();
                }, 200);
            }
        }
```

### **3.How to achieve random arrangement of small pictures？**
#### use math.random
```
 randomImg: function () {
             this.imgArr.sort(function () {
                 return Math.random() - Math.random();
             });
         },
```
### **4.Drag function implementation？**
```
            on(contain, 'dragstart', function (e) {
                var target = getTarget(e);

                if (target.tagName.toLowerCase() == "img") {
                    e.dataTransfer.setData('id', e.target.id);
                }
            });

            on(contain, 'drop', function (ev) {
                var target = getTarget(ev);
                if (target.tagName.toLowerCase() == "img") {
                    var originObj = document.getElementById(ev.dataTransfer.getData('id'));
                    var cache = {
                        'src': originObj.src,
                        'id': originObj.id
                    };
                    var endObj = ev.target.querySelector('img') || ev.target;

                    originObj.src = endObj.src;
                    originObj.id = endObj.id;
                    endObj.src = cache.src;
                    endObj.id = cache.id;

                    if (originObj.id != endObj.id) {
                        self.changestep();
                    }

                    self.isSuccess();
                }
            });


            on(contain, 'dragover', function (ev) {
                ev.preventDefault();
            });
```

## My train of thought
#### First of all, I have browsed many examples on the official website, and selected the content that I am interested in to appreciate and study.
#### Then I picked out a most interesting example and combined it with the tasks assigned by the teacher to imagine and create.
#### I wanted to do a Mixed-media collage. My idea is to use broken images to let people collage a complete picture, combined with the help of the drag code in the example, to make an interactive image collage.
#### After asking the teacher and searching the Internet for information, I finished my homework. The pictures I used in the homework were the pictures I created in the geography and psychology homework last semester.

https://github.com/tianxirui/DAT505-GitHub/tree/master/final%20assignment/Puzzle
