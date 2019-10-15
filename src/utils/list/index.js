export const joinList = list => {
  const size = list.length;
  const lastItem = list[size - 1];
  if (size <= 1) return lastItem;
  return list.slice(0, -1).join(", ") + ` & ${lastItem}`;
};

export const halveList = arr => {
  const halfWayPoint = Math.ceil(arr.length / 2);
  return [arr.slice(0, halfWayPoint), arr.slice(halfWayPoint)];
};

export const hasItems = item => !!item && item.length > 0;
