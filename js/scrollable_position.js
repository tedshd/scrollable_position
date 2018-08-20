/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-08-20 10:41:31
 */

(function () {
    var scrollablePosition = function (option) {
        var direction = option.direction || 'horizontal', // 'vertical'
            dom = option.dom || '',
            name = option.name || '';

        if (!dom) {
            console.error('scrollablePosition: not set dom');
            return;
        }

        if (!name) {
            console.error('scrollablePosition: not set name');
            return;
        }

        function setPosition () {
            var val;

            switch (direction) {
                case 'horizontal':
                    val = dom.scrollLeft || '';
                    break;
                case 'vertical':
                    if (dom.scrollTop) {
                        val = dom.scrollTop || '';
                    } else {
                        val = window.pageYOffset || '';
                    }
                    break;
            }

            localStorage.setItem(name, val);
        }

        function getPosition () {

            switch (direction) {
                case 'horizontal':
                    dom.scrollLeft = localStorage.getItem(name) || 0;
                    break;
                case 'vertical':
                    if (dom.scrollTop) {
                        dom.scrollTop = localStorage.getItem(name) || 0;
                    } else {
                        window.pageYOffset = localStorage.getItem(name) || 0;
                    }
                    break;
            }

            localStorage.removeItem(name);
        }

        this.setPosition = setPosition;
        this.getPosition = getPosition;
    };

    window.scrollablePosition = scrollablePosition;
})();
