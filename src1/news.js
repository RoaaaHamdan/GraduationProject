// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "http://newsapi.org/v2/top-headlines?country=sa&category=health&apiKey=12b6ec6b09aa4b08a6619c6fac4216af";

export async function getNews() {
  let result = await fetch(url).then(response => response.json()).catch(err=>{console.log(err)});
  return result.articles;
}
