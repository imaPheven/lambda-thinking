const search = require('./search');
// Assuming `exponentialSearch` is already implemented and imported
const largeDataset = require('./large_dataset');

Object.entries(search).forEach(([name, searchFunction]) => {
  describe(name, () => {
    test('should return the correct index when target is found', () => {
      const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      expect(searchFunction(arr, 9)).toBe(4);
      expect(searchFunction(arr, 1)).toBe(0);
      expect(searchFunction(arr, 19)).toBe(9);
    });
  
    test('should return -1 when target is not found', () => {
      const arr = [2, 4, 6, 8, 10];
      expect(searchFunction(arr, 5)).toBe(-1);
      expect(searchFunction(arr, 0)).toBe(-1);
    });
  
    test('should handle empty arrays', () => {
      expect(searchFunction([], 1)).toBe(-1);
    });

    if (name !== 'interpolationSearch') {
      test('should handle arrays of different types', () => {
        const arr = ['a','c','e','g','i','k','m','o','q','s'];
        expect(searchFunction(arr, 'i')).toBe(4);
        expect(searchFunction(arr, 'a')).toBe(0);
        expect(searchFunction(arr, 's')).toBe(9);
      });
    }

    test('should work with large dataset', () => {
      const arr = largeDataset;
      expect(searchFunction(arr, 98766)).toBe(-1);
      expect(searchFunction(arr, 98767)).toBe(49383);
    });

    if (name === 'exponentialSearch') {
      exponentialSearchAdditionalTests(search.exponentialSearch);
    }
  });
})

function exponentialSearchAdditionalTests(searchFunction) {
  describe('Exponential Search on Unbounded Arrays', () => {
      // Simulate an "unbounded" array by dynamically generating values
      const unboundedArray = [];
      for (let i = 1; i <= 1000000; i += 2) {
          unboundedArray.push(i); // Add only odd numbers to simulate an ordered, but large, array
      }

      test('should find the target in a simulated large unbounded array', () => {
          const target = 98765; // An odd number we know is in the array
          const index = searchFunction(unboundedArray, target);
          expect(index).toBeGreaterThan(-1); // The target should be found
          expect(unboundedArray[index]).toBe(target); // Check that the correct value is at the index
      });

      test('should return -1 for a target not in the simulated large unbounded array', () => {
          const target = 98766; // An even number, which we know isn't in the array
          const index = searchFunction(unboundedArray, target);
          expect(index).toBe(-1); // The target should not be found
      });

      test('should handle target at the start of the unbounded array', () => {
          const target = 1; // First element of the array
          const index = searchFunction(unboundedArray, target);
          expect(index).toBe(0); // The index of the first element should be 0
      });

      test('should handle target near the end of the unbounded array', () => {
          const target = 999999; // A number near the end of the array
          const index = searchFunction(unboundedArray, target);
          expect(index).toBeGreaterThan(-1); // The target should be found
          expect(unboundedArray[index]).toBe(target); // Ensure the found index contains the correct target
      });
  });
}
