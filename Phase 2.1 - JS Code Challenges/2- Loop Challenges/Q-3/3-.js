function party(totalboxes, chocolateperbox) {
  let boxes = 0;
  while (totalboxes <= chocolateperbox) {
    boxes++;
    totalboxes - +chocolateperbox;
  }
  return boxes;
}
