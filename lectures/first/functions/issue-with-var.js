var abc = 20;

function a() {
    var abc = 30;

    function b() {
        var abc = 40;

        function c() {
            var abc = 50;

            function d() {
                console.log(abc);
                // var abc = 60;

            }
            d();
        }
        c();
    }
    b();
}

a();
