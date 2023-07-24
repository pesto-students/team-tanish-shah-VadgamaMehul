function maxPointsOnLine(points) {
    if (points.length <= 2) {
      return points.length; // If there are 2 or fewer points, they all lie on the same line (or none at all)
    }
  
    let maxPoints = 0; // Variable to keep track of the maximum number of points on a line
  
    for (let i = 0; i < points.length; i++) {
      const slopes = {}; // Hashmap to store the slopes of lines formed by the current point and other points
      let duplicatePoints = 0; // Counter for duplicate points (points with the same coordinates as the current point)
      let verticalLines = 0; // Counter for points forming vertical lines with the current point
      let currentMax = 0; // Variable to keep track of the maximum count of points on the same line
  
      for (let j = i + 1; j < points.length; j++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
  
        if (x1 === x2 && y1 === y2) {
          duplicatePoints++; // Increment duplicatePoints counter if the current point and the other point have the same coordinates
        } else if (x1 === x2) {
          verticalLines++; // Increment verticalLines counter if the current point and the other point form a vertical line
        } else {
          // Calculate the slope of the line formed by the current point and the other point
          const slope = (y2 - y1) / (x2 - x1);
  
          // Store the slope in the slopes hashmap and update the count of points that have the same slope
          slopes[slope] = (slopes[slope] || 0) + 1;
  
          // Update the currentMax with the maximum count of points that lie on the same line with the current slope
          currentMax = Math.max(currentMax, slopes[slope]);
        }
      }
  
      // Update the currentMax to include the duplicate points, vertical lines, and the current point itself
      currentMax = Math.max(currentMax, verticalLines) + duplicatePoints + 1;
  
      // Update the maxPoints with the maximum count of points on the same line for the current point
      maxPoints = Math.max(maxPoints, currentMax);
    }
  
    return maxPoints; // Return the maximum number of points that lie on the same line
  }
  
  // Test cases
  const testInput1 = [[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]];
  console.log(maxPointsOnLine(testInput1)); // Output: 3
  
  const testInput2 = [[1, 1], [2, 2], [3, 3]];
  console.log(maxPointsOnLine(testInput2)); // Output: 3
  