// Call this in the body tag with <body onload="fnGetWidthHeight()">

<script type="text/javascript" language="javascript">
    function fnGetWidthHeight() {
        var viewportwidth;
        var viewportheight;
        // The more standards compliant browsers (mozilla/netscape/opera/chrome/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewportwidth = window.innerWidth;
            viewportheight = window.innerHeight;
        }
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            viewportwidth = document.documentElement.clientWidth;
            viewportheight = document.documentElement.clientHeight;
        }
        // older versions of IE
        else {
            viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
            viewportheight = document.getElementsByTagName('body')[0].clientHeight;
        }
        alert('Your viewport width & height is ' + viewportwidth + 'x' + viewportheight);
    }
</script>