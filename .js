.heart {
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-image:url( 'https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png');
  background-position: left;
  background-repeat:no-repeat;
  background-size:2900%;
}

.heart:hover {
  background-position:right;
}

.is_animating {
  animation: heart-burst .8s steps(28) 1;
}

@keyframes heart-burst {
  from {background-position:left;}
  to { background-position:right;}
}