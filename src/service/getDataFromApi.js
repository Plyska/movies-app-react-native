export default async (pageNumber) => {
  const data = await getData(pageNumber);
  return data;
};

async function getData(start) {
 // console.log(pageNumber, 'PAGE NUMBER');
  try {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=20`
    );
    const res_json = await res.json();
//    console.log(res_json);
    return res_json;
  } catch (err) {
    console.log(err);
  }
}
