export default async () => {
  const data = await getData();
  return data;
};

async function getData() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    const res_json = await res.json();
    return res_json;
  } catch (err) {
    console.log(err);
  }
}
