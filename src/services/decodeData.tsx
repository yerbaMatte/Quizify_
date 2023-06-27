import he from 'he';

// Recursively decode HTML entities in a JSON object
export function decodeJsonEntities(obj) {
  if (typeof obj === 'string') {
    return he.decode(obj);
  } else if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.map(decodeJsonEntities);
    } else {
      const decodedObj = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          decodedObj[key] = decodeJsonEntities(obj[key]);
        }
      }
      return decodedObj;
    }
  } else {
    return obj;
  }
}
