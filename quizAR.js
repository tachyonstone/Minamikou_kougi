<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>AR de Quiz</title>
    <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
    <script src="./js/aframe-ar.js"></script>
    <script src="./js/jquery-3.2.1.min.js"></script>
  </head>

  <body style='margin : 0px; overflow: hidden;'>
    <a-scene embedded arjs="debugUIEnabled:false;">
      <a-marker preset='custom' type='pattern' url="img/question-marker.patt">
        <a-box src="./img/question.jpg" position='0 0.5 0'></a-box>
      </a-marker>

      <a-marker preset='custom' type='pattern' url="img/ans-marker.patt">
        <a-box src="./img/yet.jpg" position='0 0.5 0' id="res"></a-box>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>

    <div style="position: fixed; bottom: 150px;">
      <button type="button" id="b1">フランスパン</button>
      <button type="button" id="b2">フライパン</button>
      <button type="button" id="b3">たこ焼き</button>
    </div>

    <script>
      $(function() {
        $('#b2').click(function(e) {
          $('#res').attr('src', './img/correct.jpg');
        });
        $('#b1,#b3').click(function(e) {
          $('#res').attr('src', './img/miss.jpg');
        });
      });
    </script>
  </body>
</html>
