
(function () {
    function Puzzle() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.imgLikeArr = document.querySelectorAll('img');
        this.imgArr = Array.prototype.slice.call(this.imgLikeArr);
    }

    Puzzle.prototype = {
        init: function (url) {
            var image = new Image(), self = this;
            image.src = url;

            image.onload = function () {
                self.randomImg();
                self.renderImg(image);
                self.dragEvent();
            };
        },

        //canvasDraw pictures
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
        //Listen for an event

        dragEvent: function () {
            var contain = document.getElementById('game'),
                next = document.getElementById('next'),
                self = this;

            //listening dragstart,Set drag data
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

            //Make it possible to switch to the next image by clicking next.

            on(contain, 'dragover', function (ev) {
                ev.preventDefault();
            });

            on(next, 'click', function (ev) {
                self.init('img/02.jpg');
                self.showtip();
                document.getElementById('step').innerText = 0;
            });

        },
        //Realize random sorting of small pictures

        randomImg: function () {
            this.imgArr.sort(function () {
                return Math.random() - Math.random();
            });
        },
        //hide
        showtip: function () {
            var hint = document.querySelector('.hint');
            hint.classList.toggle('hide');
        },
       //change step
        changestep: function () {
            var step = document.getElementById('step');
            step.innerText = +step.innerText + 1;
        },
//To determine whether the task is completed
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
    };

    function on(ele, type, handler) {
        if (ele.addEventListener) {
            return ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            return ele.attachEvent('on' + type, function () {
                handler.call(ele);
            });
        } else {
            return ele['on' + type] = handler;
        }
    }

    function getTarget(e) {
        var getEvent = e || window.event;
        return getEvent.target || getEvent.srcElement;
    }


//Call the data
    var puzzle = new Puzzle();
    puzzle.init('img/01.jpg');

});
