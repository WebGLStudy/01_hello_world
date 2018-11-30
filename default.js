(function(){
    'use strict';

    // 変数
    var gl, canvas;
    var screen_width, screen_height;

    window.addEventListener('load', function(){
        // canvas の初期化
        canvas = document.getElementById('canvas');
        screen_width = 512;
        screen_height = 512;
        canvas.width = screen_width;
        canvas.height = screen_height;

        // WeebGLの初期化(WebGL 2.0)
        gl = canvas.getContext('webgl2');

        // 画面クリア
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }, false);

})();
