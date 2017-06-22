// Walls generator
// 0 = no walls
// 1 = walls
// 2 = user starting position

const map = {
  "data": [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 1, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  "height":19,
  "width":19
}


document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 6;
  const el = document.querySelector('#walls');
  let playerPos

    for (var x = 0; x < map.height; x++)  {
      for (var y = 0; y < map.width; y++) {

        const i = (y * map.width ) + x;
        const position = `${((x - (map.width / 2)) * WALL_SIZE)} 1.5 ${(y - (map.height / 2)) * WALL_SIZE}`;

        // if the number is 1 - 3, create a wall
        if (map.data[i] === 1 || map.data[i] === 3) {
          wall = document.createElement('a-box');
          el.appendChild(wall);

          wall.setAttribute('width', WALL_SIZE);
          wall.setAttribute('height', WALL_HEIGHT);
          wall.setAttribute('depth', WALL_SIZE);
          wall.setAttribute('position', position);

          if (map.data[i] === 3) {
            wall.setAttribute('color', 'red');
          } else { // secret walls
            wall.setAttribute('color', 'red');
            wall.setAttribute('material', 'src: #wall; repeat: 4 4');
            wall.setAttribute('static-body', '');
          }
        }
        // set player position if the number is a 2
        if (map.data[i] === 2)  {
          playerPos = position;
        }
      }
    }
    document.querySelector('#player').setAttribute('position', playerPos);
});
