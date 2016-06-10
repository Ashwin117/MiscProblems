'use strict';
/*
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
*/

function getIntersectionPoints(rectangle1, rectangle2) {
	var rectangle1RightX = rectangle1.leftX + rectangle1.width;
	var rectangle2RightX = rectangle2.leftX + rectangle2.width;
	var rectangle1TopY = rectangle1.bottomY + rectangle1.height;
	var rectangle2TopY = rectangle2.bottomY + rectangle2.height;

	if ( (rectangle1RightX < rectangle2.leftX) || (rectangle2RightX < rectangle1.leftX) ||
		(rectangle1TopY < rectangle2.bottomY) || (rectangle2TopY < rectangle1.bottomY) ) {
		return 'These rectangles do not intersect';
	}
	var intersectionRectangle = {};
	intersectionRectangle.leftX = Math.max(rectangle1.leftX, rectangle2.leftX);
	intersectionRectangle.bottomY = Math.max(rectangle1.bottomY, rectangle2.bottomY);

	var minWidth = Math.min(rectangle1RightX, rectangle2RightX);
	var minHeight = Math.min(rectangle1TopY, rectangle2TopY);

	intersectionRectangle.width = minWidth - intersectionRectangle.leftX;
	intersectionRectangle.height = minHeight - intersectionRectangle.bottomY;

	return intersectionRectangle;
}

var rectangle1 = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

var rectangle2 = {

    // coordinates of bottom-left corner
    leftX: 3,
    bottomY: 6,

    // width and height
    width: 14,
    height: 12,

};

console.log(getIntersectionPoints(rectangle1, rectangle2));

